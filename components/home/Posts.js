import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView, Button, TouchableOpacity} from "react-native"
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

const postFooterIcones = [
    {
        title : 'Like',
        imgUrl: 'heart-outline',
        likedImgUrl: 'heart-sharp'
    },
    {
        title : 'Chat',
        imgUrl: 'chatbubble-outline',
        likedImgUrl: 'chatbubble-sharp'
    },
    {
        title : 'Dm',
        imgUrl: 'arrow-redo-outline',
        likedImgUrl: 'arrow-redo-sharp'
    },
    {
        title : 'BookMark',
        imgUrl: 'bookmark-outline',
        likedImgUrl: 'bookmark-sharp'
    },
]

const Posts = ({post}) => {
    return (
        <View style={{marginBottom: 30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{
        marginRight: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <View style={{
            marginTop:10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={styles.imageBorder}>
                <Image
                    source={post.profile_picture}
                    style={styles.image}></Image>
            </View>
            <Text style={{
                marginLeft: 5,
                fontWeight: '600',
            }}>{post.user}</Text>
        </View>

        <Text style={{
            fontWeight: '900',
        }}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View
        style={{
            width: '100%',
            height: 450,
        }}>
        <Image
            source={post.imgUrl}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
         />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
            <Icons imgStyle = {styles.footerIcon} imgUrl={postFooterIcones[0].imgUrl} />
            <Icons imgStyle = {styles.footerIcon} imgUrl={postFooterIcones[1].imgUrl} />
            <Icons imgStyle = {styles.footerIcon} imgUrl={postFooterIcones[2].imgUrl} />
        </View>
        <View style={{flex:1, alignItems:'flex-end'}}>
            <Icons imgStyle = {styles.footerIcon} imgUrl={postFooterIcones[3].imgUrl} />
        </View>
    </View>
)

const Icons = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Icon title="like" name={imgUrl} style={imgStyle} size={25} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View>
        <Text style={{ fontWeight: '600' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop:5 }}>
        <Text>
            <Text style={{ fontWeight:'600' }}>{post.user}</Text>
            <Text> {post.caption} </Text>
            <Text style={{ color: '#0149FF' }}> {post.tags} </Text>
        </Text>
    </View>
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop:5 }}>
        {!! post.comments.length && (
            <Text style={{ color: 'gray'}}>
                    View {post.comments.length > 1 ? 'all ': ''}{post.comments.length}
                    {post.comments.length > 1 ? ' comments': ' comment'}
            </Text>
        )}
    </View>
)

const Comments = ({ post }) =>(
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop:5 }}>
                <Text style={{ }}>
                    <Text style={{ fontWeight: '600'}}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    imageBorder:{
        width: 40,
        height: 40,
        borderWidth: 1.8,
        borderColor: '#ff8501',
        marginLeft:5,
        borderRadius: 20,
        alignItems: 'center'
    },
    image : {
        marginTop: 2,
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    footerIcon: {
        marginRight: 10
    }
})
export default Posts
