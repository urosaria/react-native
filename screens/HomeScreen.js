import React, { useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import {db} from '../firebaase'

const HomeScreen = ({navigation}) => {
    useEffect(() => {
        db.collectionGroup('posts').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <SafeAreaView style={styles.constructor}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView style={{height: '80%'}}>
                { POSTS.map((post, index) => (
                    <Posts post={post} key={index} />
                )) }
            </ScrollView>
            <BottomTabs icons={ bottomTabIcons } />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default HomeScreen
