import 'react-native-gesture-handler';
import React, { useState } from 'react'
import * as Fonts from 'expo-font'
import Home from './screens/home'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './routes/drawerNavigator'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './state/reducers/reducer';

const store = createStore(reducer)

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
      <Provider store={store}>
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
      </Provider>
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
