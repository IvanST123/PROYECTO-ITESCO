import React,{useRef} from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegisterForm from "../../components/Account/RegisterForm"
import Toast from "react-native-toast-message"

export default function Register(){
    const toastRef = useRef()
    return(
        <KeyboardAwareScrollView>
            
            
            <Image
                source={require("../../../assets/kisspng-graduate-university-george-brown-college-higher-ed-educational-icon-5ae224ebd810a4.466892761524770027885.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style = {styles.viewForms}>
               <RegisterForm toastRef={toastRef}/>
            </View>
            <Toast ref={toastRef}/>


        </KeyboardAwareScrollView>
    )

}

const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft: 40
    },
    logo:{
        width:"100%",
        height: 200,
        marginTop:20
    }
})