import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '../screens/Restaurants'
import { StyleSheet, View, Text, ScrollView, Image } from "react-native"


const Stack = createStackNavigator() 

export default function RestaurantsStack() {
    return(
        <Stack.Navigator>
                    
                    <Stack.Screen style={styles.title}
                    
                    name='restaurants'
                    component={Restaurants}
                    options={{textAlign:"center", title:'INICIO'}}  //titulo de arriba cambiar//
                    
                    />

 

                    </Stack.Navigator>

    )
    
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center"


    }
})  