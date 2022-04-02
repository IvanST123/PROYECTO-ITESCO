import React from "react"
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"
import { Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
export default function UserGuest(){
    const navigation = useNavigation()
    return(
        <ScrollView style={StyleSheet.container}>

            <Image 
            
            style={styles.stretch}
            source={require("../../../assets/segundo.jpeg")}
            />
            <Text style={styles.title}>ÚNETE AL ITESCO</Text> 
            <Text style={styles.description}>Instituto Tecnológico Superior de Coatzacoalcos</Text>

            <View style={styles.viewBtn}>
            <Button
            title="INICIAR SESIÓN"
            buttonStyle={styles.btnStyle}
            containerStyle={styles.btnContainer}
            onPress={()=>navigation.navigate("login")}
            
            />

            </View>

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
        resizeMode: "cover",
        marginBottom: 40,
        borderRadius:25
       
    },
    title:{
        fontWeight: "bold",
        fontSize: 19,
        marginBottom:10,
        textAlign:"center",
        borderRadius:25,
        backgroundColor:"#00d1ff"
    },
    description:{
        marginBottom: 20,
        textAlign: "center"
    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    },
    btnStyle:{
        backgroundColor:"#005366",
       
    },
    btnContainer:{
        width: "70%",
        
    }


})