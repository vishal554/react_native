import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Details from '../screens/details'

const screens = {
    Home: {
        screen: Home
    },
    details: {
        screen: Details
    }
}

const homeStack = createStackNavigator(screens)
export default createAppContainer(homeStack)