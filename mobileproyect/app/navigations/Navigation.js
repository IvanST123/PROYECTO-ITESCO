import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

import { Icon } from 'react-native-elements'
// import Restaurants from '../screens/Restaurants'
// import Favorites from '../screens/Favorites'
// import Account from "../screens/Account";
// import Search from "../screens/Search";
// import TopRestaurants from "../screens/TopRestaurants";



const Tab = createBottomTabNavigator()

export default function Navigation() {
    return(
        <NavigationContainer>

          <Tab.Navigator
          initialRouteName="restaurants"
          tabBarOptions={{
              inactiveTintColor: '#646464',
              activeTintColor: '#1EB5EB'
          }}
          screenOptions={({route}) => ({
              tabBarIcon:({color}) =>screenOptions(route, color)

          })} 
          >
                   
                  <Tab.Screen 
                  name= 'restaurants' 
                  component={RestaurantsStack}
                  options={{title:"INICIO"}} 
                  />
                  
                  <Tab.Screen 
                  name= 'favorites' 
                  component={FavoritesStack}
                  options={{title:"UBICACIÓN"}} 
                  />

                  <Tab.Screen 
                  name= 'account' 
                  component={AccountStack}
                  options={{title:"SESIÓN"}} 
                  />

                  <Tab.Screen 
                  name= 'search' 
                  component={SearchStack}
                  options={{title:"Buscar"}} 
                  />

                  <Tab.Screen 
                  name= 'top-restaurants' 
                  component={TopRestaurantsStack}
                  options={{title:"Top 5"}} 
                  />

                  
                  
                  
                  
                  </Tab.Navigator>  
        </NavigationContainer>  
    )
    
}

function screenOptions(route, color) {
    let iconName
    switch (route.name) {
        case 'restaurants':
            iconName='flag-variant-outline'
            break
        case 'favorites':
            iconName='map-search-outline'
            break
        case 'top-restaurants':
            iconName='star-outline'
            break
        case 'search':
            iconName='magnify'
            break
        case'account':
            iconName='account-check-outline'
            break   


    }
    
    return(
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    ) 

}
