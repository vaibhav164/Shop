import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, Dimensions, SafeAreaView, Pressable } from 'react-native';
import ShopButton from '../../Components/Button/Button';
import { ScreenHeight, ScreenWidth } from '../../Utils/Constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../Redux/CartItemsSlice';
const CartScreen = ({navigation}) => {
  const cart = useSelector((state: any) => state.cartItemList.cart);
  const [cartItems, setCartItems] = useState(cart);
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
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
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
    Alert.alert('Checking Out','Prodeed for Payment',[
      {text: 'OK', onPress: () => {}}]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={{padding: '5%'}}>
        <Icon
          onPress={() => navigation.navigate('Home')}
          name="arrow-back"
          size={20}
          color="#aaa"
          style={{color: 'black'}}
        />
      </Pressable>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return(
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.productName}>{item?.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={[styles.quantityText,{color:'#000'}]}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => removeItem(item.id)} disabled={cartItems.length == 0} style={styles.removeButton}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
      )}}
        />
        </>
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
    padding: ScreenWidth * 0.04,
    paddingTop:'10%'
  },
  emptyCartText: {
    fontSize: ScreenWidth * 0.05,
    color: '#444',
    textAlign: 'center',
    marginTop: ScreenHeight * 0.1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ScreenHeight * 0.02, 
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: ScreenWidth * 0.04,
  },
  productImage: {
    width: ScreenWidth * 0.2, 
    height: ScreenWidth * 0.2, 
    borderRadius: 12,
    marginRight: ScreenWidth * 0.04, 
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: ScreenWidth * 0.05, 
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: ScreenWidth * 0.045, 
    color: '#888',
    marginTop: ScreenHeight * 0.01, 
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ScreenHeight * 0.02, 
  },
  quantityButton: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    marginHorizontal: ScreenWidth * 0.03, 
    height:ScreenHeight*0.04,
    width:ScreenHeight*0.04,
    justifyContent:'center',
    alignItems:'center'
  },
  quantityText: {
    fontSize: 20, 
    color: '#fff',
    textAlign:'center',
    fontWeight:'600'
  },
  removeButton: {
    padding: ScreenWidth * 0.02, 
    marginLeft: ScreenWidth * 0.03, 
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
  },
  removeText: {
    color: '#FF4040',
    fontSize: ScreenWidth * 0.04, 
    fontWeight: 'bold',
  },
  totalContainer: {
    paddingTop: ScreenHeight * 0.02, 
    paddingBottom: ScreenHeight * 0.02, 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,

  },
  totalText: {
    fontSize: ScreenWidth * 0.06, 
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    marginTop: ScreenHeight * 0.02, 
    backgroundColor: '#007BFF',
    paddingVertical: ScreenHeight * 0.03, 
    paddingHorizontal: ScreenWidth * 0.2, 
    borderRadius: 25,
    marginBottom: ScreenHeight * 0.02, 
  },
  checkoutText: {
    color: '#fff',
    fontSize: ScreenWidth * 0.04, 
    fontWeight: 'bold',
  },
});

export default CartScreen;
