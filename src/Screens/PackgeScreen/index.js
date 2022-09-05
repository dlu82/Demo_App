import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import Headr from '../../components/Header Component';
import Prdct from '../../components/ProductComponent';

import {productUrl} from '../../store/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';

const index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch({});
  const {user} = useSelector(state => state.prdct);
  // console.log('usergdcx ======>> ', user);

  useEffect(() => {
    dispatch(productUrl());
  }, []);

  return (
    <View style={styles.container}>
      <Headr IsBack IsText HeadrText={'Top Products'} />
      <FlatList
        data={user?.products?.slice(0, 8)}
        renderItem={({item, index}) => (
          <Prdct
            data={item}
            index={index}
            length={user?.products?.slice(0, 8).length}
          />
        )}
        contentContainerStyle={{paddingBottom: 10}}
      />
    </View>
  );
};

export default index;
