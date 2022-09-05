import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import styles from './style';
import Google from '../../assets/Icons/google-icon.svg';
const index = ({label, btnStyle, txtStyle, tapOn, IconTrue}) => {
  return (
    <TouchableOpacity
      onPress={() => tapOn()}
      style={{...styles.Button, ...btnStyle}}>
      {IconTrue && (
        <View style={{right: 60}}>
          <Google />
        </View>
      )}
      <Text style={{...styles.text, ...txtStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;
