import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const DATA = [
    {
      id: '1',
        user: {
          imageUri: 'https://i.pinimg.com/564x/38/8b/d3/388bd3a77086f302fc8edc1a11e651c2.jpg',
          name: 'Olivia'  
        },
        imageUri : 'https://i.pinimg.com/originals/69/ce/49/69ce49a8a8e7b34b4cb9550cda06fe96.jpg',
        caption: 'Beautiful city #instagram',
        likesCount: 5324,
        postedAt: '6 minutes ago'   
       },
       {
         id: '2',
        user: {
          imageUri: 'https://i.pinimg.com/originals/3a/c9/1a/3ac91af9825c514882172314fcb6c268.jpg',
          name: 'Samantha'  
        },
        imageUri : 'https://i.pinimg.com/originals/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg',
        caption: 'Check this out!',
        likesCount: 3712,
        postedAt: '6 minutes ago'   
       },
       {
         id: '3',
        user: {
          imageUri: 'https://i.pinimg.com/originals/e0/09/ce/e009ce051a820efba61f80a63a61bd8e.jpg',
          name: 'Marianna'  
        },
        imageUri : 'https://image.winudf.com/v2/image/Y29tLnVraW5nLnBlbWFuZGFuZ2Fud2FsbHBhcGVyX3NjcmVlbl8wXzE1MjMxOTY2NTRfMDQw/screen-0.jpg?fakeurl=1&type=.jpg',
        caption: 'Wonderfull place #instagram',
        likesCount: 1946,
        postedAt: '6 minutes ago'   
       }
];

const Feed = () => {
return(
 <FlatList 
 keyExtractor = {item => item.id}
 ListHeaderComponent = {Stories}
 data = {DATA}
 renderItem = {({ item }) => {
  return <Post post = {item} />   
 }}
 />   
)
};

export default Feed;