import React from 'react'
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import LoginForm from "../components/loginScreen/LoginForm";

const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainder}>
            <Icon title="instagram" name="logo-instagram" size={100} />
        </View>
        <LoginForm navigation = {navigation} />
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
export default LoginScreen
