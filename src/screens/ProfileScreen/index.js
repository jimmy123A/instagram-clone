import React from 'react';
import { Text, Button, View } from 'react-native';
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {

 const onSignOutPress = async () => {
  try {   
  await Auth.signOut();
  } catch (err) {
    console.log(err);  
  }
 };   

 return (
  <View style = {{ marginTop: 50 }} >   
  <Button 
  color = "red"
  title ="Sign Out"
  onPress = {onSignOutPress} />
  <Text style = {{ alignSelf: 'center', marginTop: 150 }} >ProfileScreen</Text>
  </View>  
 )   
};

export default ProfileScreen;