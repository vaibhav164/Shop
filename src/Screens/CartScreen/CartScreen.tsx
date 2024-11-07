import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, Dimensions, SafeAreaView } from 'react-native';
import ShopButton from '../../Components/Button/Button';
import { ScreenHeight, ScreenWidth } from '../../Utils/Constant';


const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Product 1', price: 20, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Product 2', price: 40, quantity: 2, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Product 3', price: 15, quantity: 1, image: 'https://via.placeholder.com/100' },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => setCartItems(cartItems.filter(item => item.id !== id)) }
      ]
    );
  };

  const handleCheckout = () => {
    Alert.alert('Proceeding to Checkout');
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal().toFixed(2)}</Text>
          <ShopButton title={'Proceed to Checkout'} onPress={handleCheckout} size='m'/>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: ScreenWidth * 0.04, // Padding is now responsive
    paddingTop:'10%'
  },
  emptyCartText: {
    fontSize: ScreenWidth * 0.05, // Responsive font size
    color: '#444',
    textAlign: 'center',
    marginTop: ScreenHeight * 0.1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ScreenHeight * 0.02, // Responsive margin
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: ScreenWidth * 0.04,
  },
  productImage: {
    width: ScreenWidth * 0.2, // Responsive image width
    height: ScreenWidth * 0.2, // Responsive image height
    borderRadius: 12,
    marginRight: ScreenWidth * 0.04, // Responsive margin
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: ScreenWidth * 0.05, // Responsive font size
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: ScreenWidth * 0.045, // Responsive font size
    color: '#888',
    marginTop: ScreenHeight * 0.01, // Responsive margin
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ScreenHeight * 0.02, // Responsive margin
  },
  quantityButton: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    marginHorizontal: ScreenWidth * 0.03, // Responsive margin
    height:ScreenHeight*0.04,
    width:ScreenHeight*0.04,
    justifyContent:'center',
    alignItems:'center'
  },
  quantityText: {
    fontSize: 20, // Responsive font size
    color: '#fff',
    textAlign:'center',
    fontWeight:'600'
  },
  removeButton: {
    padding: ScreenWidth * 0.02, // Responsive padding
    marginLeft: ScreenWidth * 0.03, // Responsive margin
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
  },
  removeText: {
    color: '#FF4040',
    fontSize: ScreenWidth * 0.04, // Responsive font size
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: ScreenHeight * 0.05, // Responsive margin
    paddingTop: ScreenHeight * 0.02, // Responsive padding
    paddingBottom: ScreenHeight * 0.02, // Responsive padding
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,

  },
  totalText: {
    fontSize: ScreenWidth * 0.06, // Responsive font size
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    marginTop: ScreenHeight * 0.02, // Responsive margin
    backgroundColor: '#007BFF',
    paddingVertical: ScreenHeight * 0.03, // Responsive padding
    paddingHorizontal: ScreenWidth * 0.2, // Responsive padding
    borderRadius: 25,
    marginBottom: ScreenHeight * 0.02, // Responsive margin
  },
  checkoutText: {
    color: '#fff',
    fontSize: ScreenWidth * 0.04, // Responsive font size
    fontWeight: 'bold',
  },
});

export default CartScreen;
