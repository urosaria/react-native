import React, { useState } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {Divider} from "react-native-elements";

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'home-sharp',
        inActive: 'home-outline',
    },
    {
        name: 'Search',
        active: 'search-sharp',
        inActive: 'search-outline',
    },
    {
        name: 'Live',
        active: 'videocam-sharp',
        inActive: 'videocam-outline',
    },
    {
        name: 'Shop',
        active: 'cart-sharp',
        inActive: 'cart-outline',
    },
    {
        name: 'Profile',
        active: '',
        inActive: require('../../assets/user/user1.jpeg'),
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, getActiveTab] = useState('Home')

    const Icon_ = ({ icon }) => (
        <TouchableOpacity onPress={() => getActiveTab(icon.name)}>
            <Icon title="like" name={ activeTab === icon.name ? icon.active : icon.inActive } size={25} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    icon.name !== 'Profile' ?
                        <Icon_ key={index} icon={icon} />
                    :
                        <TouchableOpacity onPress={() => getActiveTab(icon.name)}>
                            <Image source={icon.inActive} style={styles.image} key={index}></Image>
                        </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#eaeaea'
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
        //marginBottom: 5
    },
    icon: {
        width: 30,
        height: 30,
    },
    image : {
        marginTop: 2,
        width: 25,
        height: 25,
        borderRadius: 12,
    },
})

export default BottomTabs
