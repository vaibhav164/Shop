import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cross from 'react-native-vector-icons/AntDesign';
import { ScreenHeight } from '../../Utils/Constant';

interface SearchInputProps {
  onFocus?:()=>void;
  onBlur?:()=> void;
  closeIcon?: boolean;
  onchangeValue:(value:string)=>any;
}
const SearchInput = ({onFocus, onBlur, onchangeValue}:SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputActive, setInputActive] = useState(false)
const handleFocus =()=>{
  setSearchQuery('')
  setInputActive(true)
  if (onFocus) onFocus(); 
}
const handleChange = (text)=>{
  setSearchQuery(text);
  onchangeValue(text)
}
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={onBlur}
          showSoftInputOnFocus={true}
        />
      </View>
        {(inputActive || searchQuery.length) && <Cross onPress={()=>{setInputActive(false); setSearchQuery(''); onchangeValue('')}} name="closecircle" size={18} color="#aaa" style={styles.crossIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height:ScreenHeight*0.07,
    flexDirection:'row',
    paddingHorizontal:'3%'
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
    borderWidth:1,
    alignSelf:'flex-start'
  },
  crossIcon: {
    alignSelf:'center',
    marginBottom:'3%'
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
