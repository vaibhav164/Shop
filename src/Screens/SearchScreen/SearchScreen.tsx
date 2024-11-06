import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import SearchInput from '../../Components/SearchTextInput/SearchTextInput'
import Container from '../../Components/Container/Container'
import { SafeAreaView } from 'react-native-safe-area-context'
import { itemList } from '../../Utils/Constant'

export default function SearchScreen({navigation}) {
  const renderProductItem = ({item}) => (
    <Pressable onPress={()=>{navigation.navigate('ProductDetailScreen',{product:item})}} style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View>
      <Text style={styles.productName}>{item.title.slice(0,30)}</Text>
      <Text style={styles.productName}>{item.title.slice(0,30)}</Text>
      </View>
    </Pressable>
  );
  return (
    <Container>
        <SafeAreaView style={{justifyContent:'center'}}>
        <SearchInput closeIcon={true} />
        <FlatList
            data={itemList}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
      </SafeAreaView>
      </Container>
  )
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    width: '100%',
    // alignItems: 'center',
    flexDirection:'row'
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 13,
    // fontWeight: 'bold',
    marginVertical: 5,
  },
  productList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});