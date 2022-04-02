import React from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import { Divider } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"

export default function Login(){
    return(
    <ScrollView >
        <Image
            source={require("../../../assets/tres.png")}
            resizeMode="contain"
            style={styles.logo}
        />
        <View style={styles.viewContainer}> 
        <p> <Text>INICIAR SESIÓN</Text></p>
         <CreateAccount/>

        </View>

        <Divider style={styles.divider}/>
          
       

    </ScrollView>
 )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
         ¿Nuevo ingreso? {" "}
            <Text
              style = {styles.linkRegister}
              onPress={()=>navigation.navigate("register")}
            ><br/>
               Haz click aquí  
            </Text>
        </Text>

    )
    
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 300,
        marginTop:20
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
        textAlign:"center",
        fontWeight: "bold"


    },
    divider:{
        backgroundColor:"#00a680",
        margin: 40

    },
    textRegister:{
        marginTop: 15,
        marginLeft:10,
        marginRight: 10
    },
    linkRegister:{
        color: "#00a580",
        fontWeight: "bold"

    }

})