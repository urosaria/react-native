import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SignupForm from "../components/signupScreen/SignupForm";

const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainder}>
            <Icon title="instagram" name="logo-instagram" size={100} />
        </View>
        <SignupForm navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainder: {
        alignItems: 'center',
        marginTop: 60
    }
})
export default SignupScreen
