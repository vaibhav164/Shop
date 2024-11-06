import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { NeighbourHoodItemsList, ScreenWidth } from '../../Utils/Constant';

export default function NeighbourHoodItems() {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item?.imageUrl }} style={styles.image} />
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      );
    
      return (
        <View style={styles.container}>
           <Text style={styles.text}>{'Your Neighbourhood Favourate'}</Text> 
          <FlatList
            data={NeighbourHoodItemsList}
            horizontal={true} // This makes it horizontal
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false} // Hide the scroll indicator
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius:50,
      marginVertical:'5%'
    },
    image: {
      width: ScreenWidth*0.2,
      height: ScreenWidth*0.2,
      borderRadius: 50,
      resizeMode: 'cover',
    },
    text: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal:'4%'
    },
    itemText: {
      marginTop: 5,
      fontSize: 16,
      paddingHorizontal:'4%'
    },
  });
  