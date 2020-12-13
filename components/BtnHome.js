import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const BtnHome = ({style, styleText, navigation, textNav, name}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={style}
      onPress={() => navigation.navigate(textNav)}>
      <Text style={styleText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BtnHome;
