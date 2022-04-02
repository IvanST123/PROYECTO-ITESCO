import React from "react"
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
export default function Restaurants() {
    const navigation = useNavigation()

   return(
    <ScrollView style={StyleSheet.container}>

    <Image 
    
    style={styles.stretch}
    source={require("../../assets/primero.png")}
    />
    <Text style={styles.title}>INFORMÁTICA</Text> 
    <Text style={styles.title2}>Objetivo General</Text> 

    <Text style={styles.description}>Formar profesionales competentes en el diseño, desarrollo, implementación y administración de proyectos informáticos con una visión sistémica, tecnológica y estratégica; ofreciendo soluciones innovadoras e integrales a las organizaciones de acuerdo con las necesidades actuales; comprometidos con su entorno, desempeñándose con actitud ética, emprendedora y de liderazgo</Text>

    

</ScrollView>

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
    title2:{
        fontWeight: "bold", //color en negrita del texto//
        fontSize: 19,
        marginBottom:10,
        textAlign:"center"
       
       
    }


})