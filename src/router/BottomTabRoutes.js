import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

import HomeStackScreen from './HomeRoutes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreen from '../screens/PostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => (
<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
           if (iconName = focused) {
            return <Entypo name="home" size={24} color="black" />
             }
             return <AntDesign name="home" size={24} color="black" />
        }

        else if (route.name === 'Discovery') {
          if (iconName = focused) {
            return <FontAwesome name="search" size={24} color="black" />
          }
          return <Feather name="search" size={24} color="black" />
        }

        else if (route.name === 'Post') {
          return <AntDesign name="plussquareo" size={24} color="black" />
        }

        else if (route.name === 'Notifications') {
          if (iconName = focused) {
            return <AntDesign name="heart" size={24} color="black" />
          }
          return <AntDesign name="hearto" size={24} color="black" />
        }

        else if (route.name === 'Profile') {
          if (iconName = focused) {
            return <MaterialIcons name="person" size={24} color="black" />
          }
          return <MaterialIcons name="person-outline" size={24} color="black" />
        }

      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      showLabel: false
    }}
   >
   <Tab.Screen name ="Home" component = {HomeStackScreen} />
   <Tab.Screen name ="Discovery" component = {DiscoveryScreen} /> 
   <Tab.Screen name ="Post" component = {PostScreen} />
   <Tab.Screen name ="Notifications" component = {NotificationScreen} />
   <Tab.Screen name ="Profile" component = {ProfileScreen} />
   </Tab.Navigator>
)

export default BottomTabRoutes;