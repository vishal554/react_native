import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Home from '../screens/home'
import Details from '../screens/details'
import { ImageBackground, StyleSheet } from 'react-native';




const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
    <ImageBackground style={styles.backgroundImage } source={require('../assets/game_bg.png')}>
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
            <HomeStack.Screen name="Details" component={Details} ></HomeStack.Screen>
        </HomeStack.Navigator>
    </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        height: '100%'
    }
})

export default HomeNavigator