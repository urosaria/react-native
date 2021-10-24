import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Instagram</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.icons8.com/ios/50/000000/plus-2-math.png'}}
                        style={styles.icon}
                     />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{
                        uri: 'https://img.icons8.com/ios/50/000000/like--v1.png'}}
                           style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image source={{
                        uri: 'https://img.icons8.com/ios/50/000000/telegram-app.png'}}
                           style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 12.5,
        resizeMode: 'contain'
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 22,
        bottom: 12,
        zIndex: 999,
        textAlign: 'center',
        width: 20,
        height: 20,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unreadBadgeText: {
        color: '#ffffff',
        fontWeight: '500'
    }
})

export default Header
