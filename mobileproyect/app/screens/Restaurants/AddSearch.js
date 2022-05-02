import React, {useRef, useState} from "react";
import { StyleSheet, View, Text } from "react-native"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import Loading from "../../components/Loading";
import AddSearchForm from "../../components/Searchs/AddSearchForm";
import Toast from "react-native-toast-message"

export default function AddSearch({ navigation }) {
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

   return(
    <KeyboardAwareScrollView>
        <AddSearchForm toastRef={toastRef}

        setLoading={setLoading} 
        navigation={navigation}
        />
        <Loading isVisible={loading} text="Creando Noticia..."/>
        <Toast ref={toastRef} position='top' opacity={0.9}/>

    </KeyboardAwareScrollView>
   ) 
}

const styles = StyleSheet.create({})

