import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
 image: {
  width : SCREEN_WIDTH,
  height : SCREEN_WIDTH   
 }   
});

export default styles;