import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  height: '100%'
 }, 
 bottomContainer: {
  flexDirection: 'row',
  marginBottom: 20
 },  
 image: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'space-between',
  width: '100%'   
 },
 userInfo: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20   
 },
 name: {
  color: 'white',
  fontWeight: '600',
  fontSize: 15   
 },
 textInput: {
  width: 300,
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 50,
  height: 45,
  flex: 1,
  marginLeft: 10,
  color: 'white',
  paddingLeft: 15,
  fontSize: 16   
 },
 cameraButton: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50    
 },
 msgButton: {
  alignSelf: 'center',
  width: 50,
  marginLeft: 15   
 },
 date: {
  color: '#808080',
  marginLeft: 10,
  fontSize: 16,
  alignSelf: 'center'   
 }   
});

export default styles;