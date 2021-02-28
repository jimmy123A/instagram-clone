import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons'; 
import styles from './styles';

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {

 const [isLiked, setIsLiked] = useState(false);
 const [likesCount, setLikesCount] = useState(0);

 const onHeartPress = () => { 
  setLikesCount(isLiked ? likesCount - 1 : likesCount + 1); 
  setIsLiked(!isLiked);
 };

  useEffect(() => {
   setLikesCount(likesCountProp);
  }, []);

return(
 <View style = {styles.container} >
  <View style = {styles.iconsContainer} >
  <View style = {styles.leftIcons} >
  <TouchableOpacity onPress = {onHeartPress} >        
  <AntDesign name= {isLiked ? 'heart' : 'hearto'} size={25} color= {isLiked ? '#e73838' : '#545454'} />
  </TouchableOpacity>
  <EvilIcons name="comment" size={32} color={'#545454'} />
  <SimpleLineIcons name="paper-plane" size={22} color={'#545454'} />
  </View>
  <View style = {styles.rightIcons} >
  <FontAwesome name="bookmark-o" size={24} color={'#545454'} />
  </View>
  </View>  
  <Text style = {styles.likes} >{likesCount} likes</Text>
  <Text style = {styles.caption} >{caption}</Text>
  <Text style = {styles.createdAt} >{postedAt}</Text>   
 </View>  
)
};

export default Footer;