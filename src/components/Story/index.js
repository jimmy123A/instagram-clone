import React from 'react';
import ProfilePicture from '../ProfilePicture';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Story = (props) => {

const navigation = useNavigation();

const onStoryPress = () => {   
 navigation.navigate('Story', { userId: id });
}

const {
  story: {   
   user: {
    imageUri,
    name,
    id  
 }  
} 
} = props;

return(
<TouchableWithoutFeedback onPress = {onStoryPress} >
 <View>   
 <ProfilePicture uri = {imageUri} />
 <Text style = {styles.name} >{name}</Text> 
 </View>  
</TouchableWithoutFeedback>
)
};

export default Story;