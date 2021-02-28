import React, { useState, useEffect } from 'react';
import { 
SafeAreaView,
ImageBackground,
ActivityIndicator,
TouchableWithoutFeedback,
Dimensions, View, Text, TextInput } from 'react-native';
import DATA from '../../data/stories';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

import ProfilePicture from '../../components/ProfilePicture';

const SCREEN_WIDTH = Dimensions.get('window').width;

const StoryScreen = () => {

const [userStories, setUserStories] = useState(null);
const [activeStoryIndex, setActiveStoryIndex] = useState(null);

const route = useRoute();
const navigation = useNavigation();
const userId = route.params.userId;

useEffect(() => {
    
 const userStories = DATA.find(storyData => storyData.user.id === userId);
 setUserStories(userStories);
 setActiveStoryIndex(0);

}, []);

  const navigateToNextUser = () => {
   navigation.push('Story', { userId: (parseInt(userId) + 1).toString() });
  };

  const navigateToPreviousUser = () => {
    navigation.push('Story', { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length -1) {
     navigateToNextUser();   
     return;   
    }  
   setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex <= 0) {
     navigateToPreviousUser();   
     return;   
    }  
   setActiveStoryIndex(activeStoryIndex - 1);
  };

 const handlePress = (event) => {
   const x = event.nativeEvent.locationX;
   let isRight = true;
   if (x < SCREEN_WIDTH / 2) {
     isRight = false;  
   }
   console.log(`isRight is ${isRight}`);

  if(isRight) {
    handleNextStory();
  } else {
    handlePreviousStory();  
  }
 };

 if (!userStories) {
    return (
    <SafeAreaView>
    <ActivityIndicator /> 
    </SafeAreaView>
    ) 
  }

 const activeStory = userStories.stories[activeStoryIndex];

return(
 <View style = {styles.container} >
  <TouchableWithoutFeedback onPress = {handlePress} >  
 <ImageBackground
  style = {styles.image}
  source = {{ uri: activeStory.imageUri }} >
  <View style = {styles.userInfo} >    
  <ProfilePicture uri = {userStories.user.imageUri} size = {45} />
  <Text style = {styles.name} >{userStories.user.name}</Text>
  <Text style = {styles.date} >{activeStory.postedTime}</Text>  
  </View>
  <View style = {styles.bottomContainer} >
   <View style = {styles.cameraButton} >   
  <Feather name="camera" size={25} color="white" />
   </View>
  <TextInput
   style = {styles.textInput}
   placeholderTextColor = "white"
   placeholder ="Send message" />
  <SimpleLineIcons name="paper-plane" size={28} color={'white'} style = {styles.msgButton} />
  </View>   
  </ImageBackground>
  </TouchableWithoutFeedback> 
 </View>  
)
};

export default StoryScreen;