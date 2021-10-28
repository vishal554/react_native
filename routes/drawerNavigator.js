import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import About from '../screens/about'
import HomeNavigator from './homeNavigator';




const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator()
    return <DrawerStack.Navigator>
        <DrawerStack.Screen name="Home" component={HomeNavigator}></DrawerStack.Screen>
        <DrawerStack.Screen name="About" component={About}></DrawerStack.Screen>
    </DrawerStack.Navigator>
}

export default DrawerNavigator