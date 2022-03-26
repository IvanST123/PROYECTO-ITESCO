import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Enlaces from '../screens/Enlaces'

const Stack = createStackNavigator() 

export default function EnlacesStack() {
    return(
        <Stack.Navigator>
                    
                    <Stack.Screen
                    
                    name='enlaces'
                    component={Enlaces}
                    options={{title:'Enlaces externos'}}
                    
                    />

 

                    </Stack.Navigator>

    )
    
}
