import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.constructor}>
            <Header />
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
