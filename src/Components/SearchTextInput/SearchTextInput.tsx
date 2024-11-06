import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cross from 'react-native-vector-icons/AntDesign';
import { ScreenHeight } from '../../Utils/Constant';

interface SearchInputProps {
  onFocus?:()=>void;
  onBlur?:()=> void;
  closeIcon?: boolean;
}
const SearchInput = ({onFocus, onBlur, closeIcon}:SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputActive, setInputActive] = useState(false)
const handleFocus =()=>{
  setSearchQuery('')
  setInputActive(true)
  if (onFocus) onFocus(); 
}
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={handleFocus}
          onBlur={onBlur}
          showSoftInputOnFocus={true}
        />
      </View>
        {(inputActive && searchQuery.length) && <Cross onPress={()=>{setInputActive(false)}} name="closecircle" size={18} color="#aaa" style={styles.crossIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height:ScreenHeight*0.07,
    flexDirection:'row'
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    width: '90%',
    height:'80%',
    borderColor:'#e2e3e5',
    borderWidth:1
  },
  crossIcon: {
    alignSelf:'center'
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchInput;
