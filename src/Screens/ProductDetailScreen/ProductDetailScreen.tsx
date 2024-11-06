import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
interface ProductDetailScreenProps {
  navigation: any;
  route: any
}
export default function ProductDetailScreen({route, navigation}: ProductDetailScreenProps) {
  const { product } = route.params; 
  const [isExpanded, setIsExpanded] = useState(false); 
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    navigation.navigate('CartScreen',{quantity:quantity, product:product.name})
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
  return (
    <SafeAreaView style={{flex:1, paddingTop:'10%', backgroundColor:'#fff'}}>
       <Icon onPress={()=>navigation.goBack()} name="arrow-back" size={20} color="#aaa" style={{color:'black', marginLeft:'5%'}} />
      <Image source={{ uri: product.image }} style={styles.productImage} />

      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>

        <Text style={styles.productDescription}>
          {isExpanded ? product.description : `${product.description.slice(0, 100)}...`} 
          <Text onPress={toggleText} style={styles.toggleButton}>
          {isExpanded ? 'View Less' : 'View More'}
        </Text>
        </Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productDetails: {
    marginTop: 20,
    paddingHorizontal:'5%'
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
