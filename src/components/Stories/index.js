import React from 'react';
import { View, FlatList } from 'react-native';
import DATA from '../../data/stories';
import Story from '../Story';
import styles from './styles';


const Stories = () => {
return(
 <FlatList
  style = {styles.container}
  showsHorizontalScrollIndicator = {false} 
  horizontal
  data = {DATA}
  keyExtractor = {item => item.user.id}
  renderItem = {({ item }) => {
   return <Story story = {item} story = {item} />   
  }}
 /> 
)
};

export default Stories;