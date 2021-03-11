import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import styles from './Recovery.style'

const Recovery = ({action}) => {
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.description}>Sorry you forgot your password,we can assist in setting a new password, enter your registered email below and we would send to you a password reset link </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.textForm} placeholder='example@domain.com' placeholderTextColor='#C4C4C4'/>
                </View>
                <Pressable style={styles.actionButton}>
                    <Text style={styles.actionText}>Send me a link</Text>
                </Pressable>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerBottomText}>Already have an Account? <Text style={styles.footerTextColor} onPress={()=>action('signin')}>Login now</Text></Text>
                </View>
            </View>
        </>
    )
}

export default Recovery;