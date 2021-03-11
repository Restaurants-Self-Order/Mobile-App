import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import ModalSelectInput from '../ModalSelectInput/ModalSelectInput.screen'
import styles from './SignUp.style'

const SignUp = ({action}) => {
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.description}>Welcome back, sign in to order</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.textForm} placeholder='example@domain.com' placeholderTextColor='#C4C4C4'/>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.textForm} placeholder='Your password' placeholderTextColor='#C4C4C4'/>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.textForm} placeholder='Your password' placeholderTextColor='#C4C4C4'/>
                </View>
                <Pressable style={styles.actionButton}>
                    <Text style={styles.actionText}>CREATE ACCOUNT</Text>
                </Pressable>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerBottomText}>Already have an Account? <Text style={styles.footerTextColor} onPress={()=>action('signin')}>Login now</Text></Text>
                </View>
            </View>
        </>
    )
}

export default SignUp;