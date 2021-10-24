import {USERS} from "./users";

export const POSTS = [
    {
        imgUrl: require('../assets/user/user1.jpeg'),
        user: USERS[0].user,
        likes: 7878,
        caption: 'Choose your player, hear editions love you Caption area test building React Native JS',
        tags: '#JS #React #Javascript',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'my_friend1',
                comment: 'I love you, forever ever'
            },
            {
                user: 'my_friend2',
                comment: 'Oh my gash!! Don\'t be'
            }
        ]
    },
    {
        imgUrl: require('../assets/user/user2.jpeg'),
        user: USERS[0].user,
        likes: 7878,
        caption: '222 Choose your player, hear editions...',
        tags: '#JS #React #Javascript',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'my_friend1',
                comment: 'I love you, forever ever'
            },
        ]
    },
    {
        imgUrl: require('../assets/user/user2.jpeg'),
        user: USERS[0].user,
        likes: 7878,
        caption: '222 Choose your player, hear editions...',
        tags: '#JS #React #Javascript',
        profile_picture: USERS[0].image,
        comments: []
    }
]

