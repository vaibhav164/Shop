import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Container from '../../Components/Container/Container';
import { itemList } from '../../Utils/Constant';
const {width: viewportWidth} = Dimensions.get('window');

const banners = [
  {id: '1', image: 'https://picsum.photos/200/300'},
  {id: '2', image: 'https://picsum.photos/200/300'},
  {id: '3', image: 'https://picsum.photos/200/300'},
];

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: '$10.00',
    image: 'https://picsum.photos/200',
    tags: ['Free Delivery', 'Selling Fast'],
  },
  {
    id: '2',
    name: 'Product 2',
    price: '$15.00',
    image: 'https://picsum.photos/200',
    tags: ['New Arrival'],
  },
  {
    id: '3',
    name: 'Product 3',
    price: '$20.00',
    image: 'https://picsum.photos/200',
    tags: ['Free Delivery'],
  },
];
interface HomScreenProps {
  navigation?: any;
}
const HomeScreen = ({navigation}: HomScreenProps) => {
  const renderBannerItem = ({item}) => (
    <View style={{marginHorizontal:'2%'}}>
    <Image 
    source={{uri: item.image}} 
    style={styles.bannerImage} 
    />
    </View>
  );

  const renderProductItem = ({item}) => (
    <View style={styles.productCard}>
      <Image
       source={{uri: item.image}} 
       style={styles.productImage} 
       />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.tagsContainer}>
          <Text style={styles.tag}>
            {item.category}
          </Text>
      </View>
    </View>
  );

  return (
    <Container>
    <ScrollView>
      <Carousel
        loop
        width={viewportWidth}
        height={viewportWidth*0.3}
        autoPlay={false}
        data={banners}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={renderBannerItem}
        style={{alignItems:'center', justifyContent:'center'}}
      />
      <FlatList
        data={itemList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        style={{backgroundColor:'red'}}
      />
      <FlatList
        data={itemList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
      <FlatList
        data={itemList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
      <FlatList
        data={itemList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
     resizeMode: 'cover',
     backgroundColor: 'pink',
     margin:10,
     marginHorizontal:70
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 5,
    fontSize: 12,
  },
  productList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default HomeScreen;
