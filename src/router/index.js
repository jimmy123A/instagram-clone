import React from 'react';
import StoryScreen from '../screens/StoryScreen';
import BottomTabRoutes from './BottomTabRoutes';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, SimpleLineIcons } from '@expo/vector-icons'; 
import { Image } from 'react-native';

const HomeStack = createStackNavigator();

const Router = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
     name ="Home"
      component = {BottomTabRoutes}
      options = {{ 
       title: 'Instagram',   
       headerLeft: () => (
        <Feather name="camera" size={24} color="black" style = {{ marginLeft: 15 }} />
       ),
       headerRight: () => (
        <SimpleLineIcons name="paper-plane" size={22} color={'#545454'} style = {{ marginRight: 15 }} /> 
       ),
       headerTitle: () => (
         <Image 
         resizeMode = "contain"
         style = {{ width: 250, height: 35 }}
         source = {{ uri: 'https://www.dafont.com/forum/attach/orig/7/3/737566.png?1' }} />
       ) 
      }}
      /> 
      <HomeStack.Screen
       name ="Story" 
      component = {StoryScreen}
      options = {{
        headerShown: false  
      }}
       />
   </HomeStack.Navigator>
)

export default Router;