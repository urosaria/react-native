import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import FormikPostUploader from "./FormikPostUploader";
import {NavigationContainer} from "@react-navigation/native";

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation} />
    </View>
)

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon title="back arrow" name='chevron-back-outline' size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
    }
})

export default AddNewPost
