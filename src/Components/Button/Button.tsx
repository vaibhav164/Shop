import { Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {ScreenWidth} from '../../Utils/Constant';

interface ButtonInterface {
  onPress: () => any;
  disabled?: boolean;
  title: string;
  size?: 'l' | 'm' | 's';
}
export default function ShopButton({
  onPress,
  disabled,
  title,
  size,
}: ButtonInterface) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: disabled ? '#aaa' : '#FA812F',
          width:
            size == 's'
              ? ScreenWidth * 0.4
              : size == 'm'
              ? ScreenWidth * 0.6
              : ScreenWidth * 0.8,
        },
      ]}>
      <Text style={[styles.title, {color: disabled ? '#fff' : '#000'}]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ScreenWidth * 0.1,
    width: ScreenWidth * 0.8,
    marginVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
});
