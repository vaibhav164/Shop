import { View, Text, Button } from 'react-native'
import React from 'react'
interface ProductDetailScreenProps {
  navigation: any
}
export default function ProductDetailScreen({navigation}: ProductDetailScreenProps) {
  return (
    <View>
      <Text>ProductDetailScreen</Text>
      <Button
        title="Go to PaymentScreen"
        onPress={() => navigation.navigate('PaymentScreen')}
      />
    </View>
  )
}