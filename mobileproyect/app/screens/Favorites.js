import React from "react"
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
export default function Favorites() {
    const navigation = useNavigation()

   return(
    <View style={StyleSheet.container}>

<Text style={styles.title}>MAPA</Text> 

    <View style={styles.map}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15166.265248950698!2d-94.522517!3d18.137808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb7944f799fa278e!2sTecNM%20-%20Campus%20Instituto%20Tecnol%C3%B3gico%20Superior%20de%20Coatzacoalcos!5e0!3m2!1ses-419!2smx!4v1648930340031!5m2!1ses-419!2smx" ></iframe></View>

</View>


)
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10

    },
    stretch:{
        width:"100%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 40
       
    },
    title:{
        fontWeight: "bold", //color en negrita del texto//
        fontSize: 40,
        marginBottom:10,
        textAlign:"center"
       
    },
    description:{
        marginBottom: 20,
        textAlign: "center",
        backgroundColor: '#7fe8ff',           //caja// 
        // backgroundRadius: 10    // borderWidth: 2,                   //caja dentro texto//
        // borderRadius: 10                   
    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    },
    btnStyle:{
        backgroundColor:"#b2c6cd"
    },
    btnContainer:{
        width: "70%"
    },
    
    map:{
        width:"100%",
        height:"100%", 
        // frameborder:"0", 
        borderStyle: "solid"
        

    }
    


})