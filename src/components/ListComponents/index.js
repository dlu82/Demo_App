import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import Images from '../../constants/images';
// import constants from '../../constants/constatnts';

const index = ({ListStyle, imageurl}) => {
  const navigation = useNavigation();
  return (
    <View style={{...style.List, ...ListStyle}}>
      <Pressable onPress={() => {}}>
        <Image style={style.backImg} source={imageurl} />
      </Pressable>
    </View>
  );
};
export default index;
