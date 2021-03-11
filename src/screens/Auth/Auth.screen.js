import React, { useState, useRef } from 'react'
import { Image, ScrollView, Text, View, TouchableWithoutFeedback, Pressable, Modal, StyleSheet, Dimensions } from 'react-native'
import SignIn from '../../components/SignIn/SignIn.screen'
import SignUp from '../../components/SignUp/SignUp.screen'
import Recovery from '../../components/Recovery/Recovery.screen'
import { SvgXml } from 'react-native-svg';
import Close from '../../assets/images/closeButton.svg';
import styles from './Auth.style'

const Auth = ({}) => {

    const [selectedScreen, setSeclectedScreen] = useState('signin');

    const _dishScrollRef = useRef();

    const switchSelectedScreen = (screen) => {
        switch (screen) {
            case 'signin':
                setSeclectedScreen(screen);
                break;
                
            case 'signup':
                setSeclectedScreen(screen);
                break;
                
            case 'recovery':
                setSeclectedScreen(screen);
                break;
        
            default:
                break;
        }
    }

    return(
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{marginLeft:47.89}}>
                                <SvgXml width="19.23" height="19.23" xml={Close} fill='#797979' style={styles.ellipse}/>
                            </View>
                            {
                                selectedScreen == 'signin'
                                ?
                                    <SignIn action={switchSelectedScreen}/>
                                :
                                    selectedScreen == 'signup'
                                    ?
                                        <SignUp action={switchSelectedScreen}/>
                                    :
                                        <Recovery action={switchSelectedScreen}/>
                            }
                        </View>
                    </View>
                </Modal>
            </View>
            {/* <View style={styles.container}>
                <View style={styles.menuSliderContainer}>
                    <ScrollView ref={_dishScrollRef} contentContainerStyle={styles.dishScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.dishImage} source={require('../../assets/images/salad1.png')}/>
                        </View>
                        <View style={[styles.imageContainer, {paddingTop:30}]}>
                            <Image style={styles.dishImage}  source={require('../../assets/images/salad2.png')}/>
                        </View>
                    </ScrollView>
                    <View style={styles.authAbsoluteButtonContainer}>
                        <TouchableWithoutFeedback onPress={()=> selectedScreen != 'signin' ? switchSelectedScreen('signin') : null}>
                            <View>
                                <Text style={styles.authText}>Login</Text>
                                <View style={[styles.borderButtom, {backgroundColor: selectedScreen == 'signin' ? styles.borderButtom.backgroundColor : '#fff'}]}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=> selectedScreen != "signup" ? switchSelectedScreen('signup') : null}>
                            <View>
                                <Text style={styles.authText}>Sign-up</Text>
                                <View style={[styles.borderButtom, {backgroundColor: selectedScreen == 'signup' ? styles.borderButtom.backgroundColor : '#fff'}]}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <>
                    {
                        selectedScreen == 'signin'
                        ?
                            <SignIn recovery={()=> selectedScreen != "recovery" ? switchSelectedScreen('recovery') : null}/>
                        :
                            selectedScreen == 'signup'
                            ?
                                <SignUp/>
                            :
                                <Recovery/>
                    }
                </>
            </View> */}
        </>
    )
}

export default Auth;