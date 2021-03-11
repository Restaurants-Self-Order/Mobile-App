import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import styles from './SignIn.style'

const SignIn = ({action}) => {
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>My account</Text>
                <Text style={styles.description}>Welcome back, sign in to order</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.textForm} placeholder='example@domain.com' placeholderTextColor='#C4C4C4'/>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.textForm} placeholder='Your password' placeholderTextColor='#C4C4C4'/>
                </View>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerText} onPress={()=>action('recovery')}>Forgot Password?</Text>
                </View>
                <Pressable style={styles.actionButton}>
                    <Text style={styles.actionText}>Login</Text>
                </Pressable>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerBottomText}>Don’t have an Account?  <Text style={styles.footerTextColor} onPress={()=>action('signup')}>Create account</Text></Text>
                </View>
            </View>
        </>
    )
}

export default SignIn;