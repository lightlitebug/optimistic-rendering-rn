import React, { useState } from 'react'
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const MainScreen = () => {
  const [favorited, setFavorited] = useState(false)

  const TouchableComponent =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  const toggleFavorite = () => {
    setFavorited(prevFavorite => !prevFavorite)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const genNum = Math.floor(Math.random() * 100)
        console.log('random number generated: ', genNum)

        if (genNum % 2 === 0) {
          resolve(true)
        } else {
          resolve(false)
        }
      }, 2000)
    })
  }

  return (
    <View style={styles.container}>
      <TouchableComponent
        onPress={() => {
          toggleFavorite().then(result => {
            if (!result) {
              setFavorited(prevFavorite => !prevFavorite)
            }
          })
        }}
      >
        <View>
          <MaterialIcons
            name={favorited ? 'favorite' : 'favorite-border'}
            size={120}
            color="red"
          />
        </View>
      </TouchableComponent>
    </View>
  )
}

MainScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Optimistic Rendering'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainScreen
