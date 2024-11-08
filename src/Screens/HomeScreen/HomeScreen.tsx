import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Container from '../../Components/Container/Container';
import {itemList, ScreenHeight, ScreenWidth} from '../../Utils/Constant';
import {Module} from '../../Utils/Constant';
import SearchInput from '../../Components/SearchTextInput/SearchTextInput';
import NeighbourHoodItems from '../../Components/NeighbourHoodSpecial/NeighbourHoodItems';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../Redux/ProductListSlice';
import {useFocusEffect} from '@react-navigation/native';
const banners = [
  {id: '1', image: 'https://picsum.photos/200/300'},
  {id: '2', image: 'https://picsum.photos/200/300'},
  {id: '3', image: 'https://picsum.photos/200/300'},
];

interface HomScreenProps {
  navigation?: any;
}
const HomeScreen = ({navigation}: HomScreenProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const [reduceModule, setReduceModule] = useState<Boolean>(false);
  const [activeModule, sestActiveModule] = useState<String>('');
  const {data, loading, error} = useSelector(state => state.productListData);

  const renderBannerItem = ({item}) => (
    <View style={{marginHorizontal: '2%'}}>
      <Image source={{uri: item.image}} style={styles.bannerImage} />
    </View>
  );
  const renderProductItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigation.navigate('ProductDetailScreen', {product: item});
      }}
      style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.title.slice(0, 30)}</Text>
    </Pressable>
  );

  const renderModules = ({item}) => (
    <Pressable
      onPress={() => sestActiveModule(item.title)}
      style={[{width: ScreenWidth * 0.245}]}>
      {!reduceModule ? (
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: activeModule == item.title ? '#ff4f01' : '#fff',
            marginHorizontal: '2%',
            borderRadius: 5,
            backgroundColor: activeModule == item.title ? '#ff4f01' : '#fff',
            paddingVertical: '10%',
          }}>
          <Image
            source={
              item.title == 'Exclusive'
                ? require('../../Assets/images/exclusive.jpeg')
                : item.title == 'Food'
                ? require('../../Assets/images/Food.png')
                : item.title == 'Payment'
                ? require('../../Assets/images/payment.png')
                : require('../../Assets/images/stores.jpeg')
            }
            style={{
              width: 50,
              height: 80,
              borderRadius: 5,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={[
              {fontSize: 16, fontWeight: 'bold', marginBottom: '0.5%'},
              {color: activeModule == item.title ? '#fff' : 'red'},
            ]}>
            {item.title}
          </Text>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: activeModule == item.title ? '#ff4f01' : '#fff',
            borderWidth: 1,
            marginHorizontal: '2%',
            alignItems: 'center',
            paddingVertical: '8%',
            borderColor: activeModule == item.title ? '#ff4f01' : '#fff',
            borderRadius: 5,
          }}>
          <Text
            style={[
              {fontSize: 16, fontWeight: 'bold', paddingBottom: '1%'},
              {
                color: reduceModule
                  ? activeModule == item.title
                    ? '#fff'
                    : 'red'
                  : 'red',
              },
            ]}>
            {item.title}
          </Text>
        </View>
      )}
    </Pressable>
  );
  const onScrollEvent = (event: any) => {
    let scrollY = event.nativeEvent.contentOffset.y;
    Platform.OS == 'ios' && scrollY > 65
      ? setReduceModule(true)
      : Platform.OS == 'android' && scrollY > 1
      ? setReduceModule(true)
      : setReduceModule(false);
  };
  return (
    <Container>
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator size="large" color="#ff4f01" />{' '}
          </View>
        ) : (
          data && (
          data &&
          <>
              <FlatList
                data={Module}
                renderItem={renderModules}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productList}
                style={{
                  backgroundColor: '#fff',
                  marginTop: Platform.OS == 'android' && '10%',
                  height: !reduceModule
                    ? ScreenHeight * 0.21
                    : ScreenHeight * 0.08,
                }}
              />
              <ScrollView
                onScroll={onScrollEvent}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}>
                <Carousel
                  loop
                  width={ScreenWidth}
                  height={ScreenWidth * 0.3}
                  autoPlay={false}
                  data={banners}
                  scrollAnimationDuration={1000}
                  onSnapToItem={index => console.log('current index:', index)}
                  renderItem={renderBannerItem}
                  style={{alignItems: 'center', justifyContent: 'center'}}
                />
                <SearchInput
                  onFocus={() => {
                    navigation.navigate('Search');
                  }}
                />
                <NeighbourHoodItems />
                <FlatList
                  data={[...data].reverse()}
                  renderItem={renderProductItem}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.productList}
                />
                <FlatList
                  data={data}
                  renderItem={renderProductItem}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.productList}
                />
                <FlatList
                  data={[...data].reverse()}
                  renderItem={renderProductItem}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.productList}
                />
              </ScrollView>
            </>
          )
        )}
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    resizeMode: 'cover',
    margin: 10,
    marginHorizontal: 70,
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    width: 150,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 13,
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
