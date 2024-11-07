import { View, Text, Button } from 'react-native'
import React from 'react'
interface PaymentScreen {
  navigation: any
}
export default function PaymentScreen({navigation}:PaymentScreen) {
  return (
    <View>
      <Text>{"PaymentScreen"}</Text>
      <Button
        title="Go to CartScreen"
        onPress={() => navigation.navigate('CartScreen')}
      />
    </View>
  )
}