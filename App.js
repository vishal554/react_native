import React, { useState } from 'react'
import * as Fonts from 'expo-font'
import Home from './screens/home'
import AppLoading from 'expo-app-loading'

import Navigator from './routes/homestack'

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
      <Navigator />
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
