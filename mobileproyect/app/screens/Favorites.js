import React from "react"
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
export default function Favorites() {
    const navigation = useNavigation()

   return(
    <View style={StyleSheet.container}>

<Text style={styles.title}>MAPA</Text> 

    <View style={styles.map}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15166.265248950698!2d-94.522517!3d18.137808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb7944f799fa278e!2sTecNM%20-%20Campus%20Instituto%20Tecnol%C3%B3gico%20Superior%20de%20Coatzacoalcos!5e0!3m2!1ses-419!2smx!4v1649808506775!5m2!1ses-419!2smx"></iframe></View>
    <View style={styles.title2}><p><strong>Dirección:</strong></p></View>
    <View style={styles.title1}> CARRETERA, Antigua a Minatitlán KM 16.5, Reserva Territorial, 96536 Coatzacoalcos, Ver.</View> 
    <View style={styles.title2}><p><strong>Teléfono:</strong></p></View>
    <View style={styles.title1}><a href="tel:+52921 211 8158">921 211 8158</a></View> 

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
    map:{
        width:"200",
        height:"350", 
        background: "center",
        borderRadius: 10,
        resizeMode: "cover"
    },
    title1:{
        fontSize: 19,
        marginBottom:10,
        textAlign:"center",
        borderRadius: 1,
        backgroundColor: "#7AFAAE"
    },
    title2:{
        
        fontWeight: "bold", //color en negrita del texto//
        fontSize: 19,
        marginBottom:10,
        textAlign:"center",
        borderRadius: 900,
        backgroundColor: "#7AFAEE"
    }

})
