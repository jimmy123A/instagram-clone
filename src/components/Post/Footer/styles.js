import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  margin: 5
 }, 
 iconsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 5
 },  
 likes: {
  fontWeight : 'bold',
  margin: 3
 },
 caption: {
  margin: 3
 },
 createdAt: {
  margin: 3,
  color: '#8c8c8c'
 },
 leftIcons: {
  flexDirection: 'row',
  width: 110,
  justifyContent: 'space-between',
  alignItems: 'center'   
 }   
});

export default styles;