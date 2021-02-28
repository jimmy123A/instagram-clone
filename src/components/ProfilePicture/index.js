import React from 'react';
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const ProfilePicture = ({ uri, size = 70 }) => {
return (
<View style = {[styles.container, { width: size + 6, height: size + 6 }]} >
<LinearGradient
  style = {{ position: 'absolute', width: size + 6, height: size + 6, borderRadius: (size + 6) / 2 }}
  colors = {['#C117BC', '#FF0066', '#FFCC33', '#FF0066']} />
<Image
 style = {[styles.image, { width: size, height : size }]}
 source = {{ uri }} />
</View>
)
};

export default ProfilePicture;