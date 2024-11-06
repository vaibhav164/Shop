import { View, Text, Button, SafeAreaView, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { itemList } from '../../Utils/Constant'
interface CartScreenPorps{
  navigation: any
}
export default function CartScreen({navigation}:CartScreenPorps) {
  return (
    <SafeAreaView  style={{flex:1, paddingTop:'10%'}}>
      <Text>CartScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  )
}
