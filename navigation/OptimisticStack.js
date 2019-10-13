import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import MainScreen from '../screens/MainScreen'

const OptimisticStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'red' : ''
      },
      headerTitleStyle: {
        color: Platform.OS === 'android' ? 'white' : 'black'
      }
    }
  }
)

export default createAppContainer(OptimisticStack)
