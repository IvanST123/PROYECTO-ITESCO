import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../screens/Restaurants/Search'
import AddSearch from '../screens/Restaurants/AddSearch'
const Stack = createStackNavigator() 

export default function SearchStack() {
    return(
        <Stack.Navigator>
                    
                    <Stack.Screen
                    
                    name='search'
                    component={Search}
                    options={{title:'NOTICIAS CORTAS'}}
                    
                    />
                   <Stack.Screen
                    
                    name='addsearch'
                    component={AddSearch}
                    options={{title:'NOTICIAS CORTAS'}}
                    
                    />

 

                    </Stack.Navigator>

    )
    
}
