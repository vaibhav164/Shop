import { View, Text, Button } from 'react-native'
import React from 'react'
interface CartScreenPorps{
  navigation: any
}
export default function CartScreen({navigation}:CartScreenPorps) {
  return (
    <View>
      <Text>CartScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}