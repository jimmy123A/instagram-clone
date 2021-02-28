mutation user1 {
    createUser(input: {name: "Samantha", image: "https://i.pinimg.com/originals/3a/c9/1a/3ac91af9825c514882172314fcb6c268.jpg"}) {
      id
      name
    }
  }
  
  mutation user2 {
    createUser(input: {name: "Olivia", image: "https://i.pinimg.com/564x/38/8b/d3/388bd3a77086f302fc8edc1a11e651c2.jpg"}) {
      id
      name
    }
  }
  
  mutation user3 {
    createUser(input: {name: "Marianna", image: "https://i.pinimg.com/originals/e0/09/ce/e009ce051a820efba61f80a63a61bd8e.jpg"}) {
      id
      name
    }
  }
  
  mutation user4 {
    createUser(input: {name: "Helena", image: "https://i.pinimg.com/originals/25/ab/ab/25ababfbc052d72be11b1868ba48719b.jpg"}) {
      id
      name
    }
  }

  mutation user5 {
    createUser(input: {name: "Emma", image: "https://data.whicdn.com/images/310076215/original.jpg"}) {
      id
      name
    }
  }
  
  mutation user6 {
    createUser(input: {name: "Elizabeth", image: "https://i.pinimg.com/originals/c3/36/a0/c336a01ded5dc64ebc309b5572ad2e32.jpg"}) {
      id
      name
    }
  }
  
  mutation user7 {
    createUser(input: {name: "Sofia", image: "https://image.winudf.com/v2/image1/Y29tLmFuZHJvbW8uZGV2Nzc5MzkyLmFwcDg3NjYyMV9zY3JlZW5fMV8xNTQxNTIxOTMyXzA0Mw/screen-1.jpg?fakeurl=1&type=.jpg"}) {
      id
      name
    }
  }
  
  mutation user8 {
    createUser(input: {name: "Mike", image: "https://i.pinimg.com/236x/1a/e9/04/1ae904a5585759a49f5758f777602338.jpg"}) {
      id
      name
    }
  }

  
  mutation post1 {
    createPost(input: {userID: "",likes: 24,caption: "Beautiful city #instagram", image: "https://i.pinimg.com/originals/69/ce/49/69ce49a8a8e7b34b4cb9550cda06fe96.jpg"}) {
      id
      image
      caption
      likes
      user {
        name
      }
    }
  }
  
  mutation story1 {
    createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post2 {
    createPost(input: {userID: "",likes: 1092,caption: "Check this out", image: "https://i.pinimg.com/originals/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story2 {
    createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1534142499731-a32a99935397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post3 {
    createPost(input: {userID: "", likes: 3450,caption: "Wonderfull chil times #instagram", image: "https://image.winudf.com/v2/image/Y29tLnVraW5nLnBlbWFuZGFuZ2Fud2FsbHBhcGVyX3NjcmVlbl8wXzE1MjMxOTY2NTRfMDQw/screen-0.jpg?fakeurl=1&type=.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story3 {
    createStory(input: {userID: "", image: "https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post4 {
    createPost(input: {userID: "",likes: 40, caption: "Isn't this awesome", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story4 {
    createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  query listPosts {
    listPosts {
      items {
        caption
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  
  query listStorys {
    listStorys {
      items {
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }