import 'react-native-gesture-handler';
import React, { useState } from 'react'
import * as Fonts from 'expo-font'
import Home from './screens/home'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from './routes/homeNavigator'
import DrawerNavigator from './routes/drawerNavigator'
import { ImageBackground } from 'react-native';


const getFonts = () => {
  Fonts.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf')
  })
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <NavigationContainer>
        
          <DrawerNavigator/>
      </NavigationContainer>
    )
  }
  else{
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
  
}
