import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Carrera from '../screens/Carrera'

const Stack = createStackNavigator() 

export default function CarreraStack() {
    return(
        <Stack.Navigator>
                    
                    <Stack.Screen
                    
                    name='carreras'
                    component={Carrera}
                    options={{title:'Carrera'}}
                    
                    />

 

                    </Stack.Navigator>

    )
    
}
