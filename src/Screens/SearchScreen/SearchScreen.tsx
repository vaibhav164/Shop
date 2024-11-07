import React from 'react'
import { View, Text, FlatList, Pressable, Image, StyleSheet } from 'react-native'
import SearchInput from '../../Components/SearchTextInput/SearchTextInput'
import Container from '../../Components/Container/Container'
import { itemList, ScreenHeight, ScreenWidth } from '../../Utils/Constant'


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
        <View>
        <SearchInput closeIcon={true} />
        <FlatList
            data={itemList}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
          </View>
      </Container>
  )
}


const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    padding: ScreenWidth * 0.03,
    marginRight: ScreenWidth * 0.03,
    flexDirection: 'row',
    marginBottom: ScreenHeight * 0.02,
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: ScreenWidth * 0.2,
    height: ScreenWidth * 0.2,
    borderRadius: 5,
    resizeMode: 'contain',
    marginRight:'5%'
  },
  productInfo: {
    marginLeft: ScreenWidth * 0.04,
    justifyContent: 'center',
    flex: 1,
  },
  productName: {
    fontSize: ScreenWidth * 0.035,
    fontWeight: 'bold',
    marginVertical: ScreenHeight * 0.005,
    color: '#333',
    overflow: 'hidden',
  },
  productList: {
    paddingVertical: ScreenHeight * 0.02, 
    paddingHorizontal: ScreenWidth * 0.03,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
  },
});
