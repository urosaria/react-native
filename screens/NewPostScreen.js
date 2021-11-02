import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";
import Icon from 'react-native-vector-icons/Ionicons';

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AddNewPost navigation={navigation} />
        </SafeAreaView>
    )
}

export default NewPostScreen;

