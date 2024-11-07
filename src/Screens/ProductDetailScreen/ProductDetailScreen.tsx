import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScreenWidth} from '../../Utils/Constant';
import Carousel from 'react-native-reanimated-carousel';
import ShopButton from '../../Components/Button/Button';
interface ProductDetailScreenProps {
  navigation: any;
  route: any;
}
export default function ProductDetailScreen({
  route,
  navigation,
}: ProductDetailScreenProps) {
  const {product} = route.params;
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    navigation.navigate('CartScreen', {
      quantity: quantity,
      product: product.name,
    });
    console.log(`Added ${quantity} of ${product.name} to the cart`);
  };
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };
  const renderBannerItem = ({item}) => (
    <Image source={{uri: item}} style={styles.productImage} />
  );
  return (
    <SafeAreaView style={{flex: 1, paddingTop: '10%', backgroundColor: '#fff'}}>
      <Pressable onPress={() => navigation.goBack()} style={{padding: '5%'}}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={20}
          color="#aaa"
          style={{color: 'black'}}
        />
      </Pressable>
      <Carousel
        loop
        width={ScreenWidth}
        autoPlay={false}
        data={[product.image, product.image, product.image]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={renderBannerItem}
        style={{flex: 1}}
      />
      <View style={{paddingHorizontal: '6%'}}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.productDetails}>
        <View>
          <Text style={styles.productDescription}>
            {isExpanded
              ? product.description
              : `${product.description.slice(0, 100)}...`}
            <Text onPress={toggleText} style={styles.toggleButton}>
              {isExpanded ? 'View Less' : 'View More'}
            </Text>
          </Text>
          <ShopButton title="Add to Cart" onPress={handleAddToCart} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productDetails: {
    marginTop: 20,
    paddingHorizontal: '5%',
    height: ScreenWidth,
    flex: 1,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
  },
  goBackButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  toggleButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
