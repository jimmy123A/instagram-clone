import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config)

const App = () => {
  return (
  <NavigationContainer>
    <Router />
  </NavigationContainer>
  );
};

export default withAuthenticator(App);
