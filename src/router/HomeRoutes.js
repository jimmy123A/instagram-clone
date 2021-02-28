import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, SimpleLineIcons } from '@expo/vector-icons'; 
import { Image } from 'react-native';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
<HomeStack.Navigator>
    <HomeStack.Screen
     name ="Home"
      component = {HomeScreen}
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
   </HomeStack.Navigator>
)

export default HomeRoutes;