import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import {USERS} from '../../data/users.js'

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showHorizontalScrollindicator={false}
            >
                <View style={{
                    alignItems:'center',
                    marginRight: 7
                }}>
                    <View style={styles.myBorder}>
                        <Image
                            source={require('../../assets/user/user1.jpeg')}
                            style={styles.image}></Image>
                    </View>
                    <Text style={{
                        color: '#333',
                        marginTop:3
                    }}>
                        Your story
                    </Text>
                </View>
                {USERS.map((story, index) => (
                    <View key={index} style={{alignItems:'center'}}>
                        <View style={styles.storiesBorder}>
                            <Image
                                source={story.image}
                                style={styles.image}></Image>
                        </View>
                        <Text style={{marginTop:3}}>
                            {story.user.length > 11
                            ? story.user.slice(0,10).toLowerCase() + '...'
                            : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 13
    },
    myBorder:{
        width: 74,
        height: 74,
        borderWidth: 2,
        borderColor: '#66666b',
        marginLeft:5,
        borderRadius: 37,
        alignItems: 'center',
    },
    image : {
        marginTop: 3,
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    storiesBorder:{
        width: 74,
        height: 74,
        borderWidth: 2,
        borderColor: '#ff8501',
        marginLeft: 10,
        borderRadius: 37,
        alignItems: 'center',
    },
})
export default Stories
