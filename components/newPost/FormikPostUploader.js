import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Button} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {Divider} from "react-native-elements";
import validUrl from 'valid-url'
import {db} from '../../firebaase'
import { firebase } from '../../firebaase'

const PLACEHOLDER_IMG = 'https://user-images.githubusercontent.com/1840855/139353168-1aca2873-033d-467c-91c5-cbb53857a3c6.png';

const uploadPostSchema = Yup.object().shape({
    //imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db
            .collection('users')
            .where('auner_uid', '===', user.uid).limit(1).onSnapshot(
                snapshot => snapshot.docs.map (doc => {
                    setCurrentLoggedInuser({
                        username: doc.data().username,
                        profilePicture: doc.data().profile_picture
                    })
                })
            )
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])

    const uploadPostToFirebase = (imageUrl, caption) => {
        const unsubscribe = db
            .collection('users')
            .doc(firebase.auth().email)
            .collection('posts')
            .add({
                imageUrl: imageUrl,
                user: currentLoggedInUser.username,
                profile_picture: currentLoggedInUser.profilePicture,
                owner_uid: firebase.auth().currentUser.uid,
                caption: caption,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                likes: 0,
                likes_by_users: [],
                comments: [],
            })
            .then (() => navigation.goBack())

        return unsubscribe
    }
    return (
        <Formik
            initialValues={{caption:'', imageUrl:''}}
            onSubmit={values => {
                uploadPostToFirebase(values.imageUrl, values.caption)
                console.log(values)
                console.log('Your post was submitted successfully')
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
                <>
                <View
                    style={{ margin:20, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Image
                        source={{
                            uri: validUrl.isUri(thumbnailUrl)
                                ? thumbnailUrl
                                : PLACEHOLDER_IMG
                        }}
                        style={ styles.defaultImg }>
                    </Image>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <TextInput
                            style={{ fontSize: 18 }}
                            placeholder='Write a caption...'
                            placeholderTextColor='gray'
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />
                    </View>
                </View>
                <Divider width={0.2} orientation='vertical' />
                <TextInput
                    onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                    style={{ fontSize: 16 }}
                    placeholder='Enter Image Url'
                    placeholderTextColor='gray'
                    onChangeText={handleChange('imageUrl')}
                    onBlur={handleBlur('imageUrl')}
                    value={values.imageUrl}
                />
                {errors.imageUrl && (
                    <Text style={{ fontSize: 10, color: 'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            }
        </Formik>
    )
}

const styles = StyleSheet.create({
    defaultImg: {
        width: 100,
        height: 100,
    }
})

export default FormikPostUploader
