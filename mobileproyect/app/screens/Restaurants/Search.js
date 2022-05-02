import React, {useState, useEffect} from "react"
import { StyleSheet,View, Text } from "react-native"
import {Icon} from "react-native-elements"
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/app'
import Loading from "../../components/Loading"

export default function Search({ navigation }) {

    const [user, setUser] = useState(null)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((userInfo)=>{
            userInfo ? setUser(true) : setUser(false)
        })
    }, [])

    if (user == null) {
        return <Loading isVisible={true} text="cargando..." />
    }

   return(

    <View style={styles.viewBody}>
        <Text>Search</Text>
        {user && (
        <Icon     
                  reverse 
                  type="material-community"
                  name="plus"
                  color="#3FBDDF"
                  containerStyle={styles.btnContainer}
                  onPress={() => navigation.navigate("addsearch")}
        
        />
            
        )}
    </View>
   ) 
}

const styles = StyleSheet.create({
viewBody:{
    flex:1,
    backgroundColor:"#fff"
},
btnContainer:{
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset:{width: 2, height: 2},
    shadowOpacity: 0.5
}
})