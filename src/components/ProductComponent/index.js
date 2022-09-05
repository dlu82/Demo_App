import React from 'react';

import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';

const index = ({data, didPress, index, length}) => {
  const navigation = useNavigation();
  console.log('data--------------', data);
  return (
    <View style={{alignItems: 'center'}}>
      <View style={style.container}>
        <View style={style.productpic}>
          <Image
            source={{uri: data?.images[0]}}
            style={{
              width: 160,
              height: 80,
              borderRadius: 10,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={style.details}>
          <Text style={style.TxT}>{data?.title}</Text>
          <Text style={style.TxT}>{data?.brand}</Text>
          <Text numberOfLines={2} style={style.TxT}>
            {data?.description}
          </Text>
        </View>
      </View>
      {index + 1 >= length ? null : (
        <View style={{width: '80%', height: 1, backgroundColor: '#E0E0E0'}} />
      )}
    </View>
  );
};
export default index;
