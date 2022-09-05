import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import Header from '../../components/Header Component';
import AD from '../../components/ListComponents';
import SubHead from '../../components/subHeadComponent';
import Packages from '../../components/PackageComponent';
import constants from '../../constants/constatnts';

import {productUrl} from '../../store/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';

const index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch({});
  const {user} = useSelector(state => state.prdct);
  // console.log('homeapiDataaAAAA======  ', user);
  const {search} = useSelector(state => state.prdct);

  useEffect(() => {
    dispatch(productUrl());
  }, ['']);

  return (
    <View style={style.container}>
      <ScrollView>
        <Header
          IsDrawer
          IsLogo
          IsSearch
          TapOn={() => navigation.navigate('SearchScreen')}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={constants.Banner}
          // keyExtractor={(item, index) => item?.id?.toString()}
          renderItem={({item, index}) => <AD imageurl={item.image} />}
          contentContainerStyle={{marginVertical: 10, paddingRight: 12}}
        />
        <SubHead
          subHead={'Top Packages'}
          needSeeAll
          OnPress={() => navigation.navigate('PackageScreen')}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={user?.products?.slice(0, 8)}
          renderItem={(item, index) => <Packages data={item} />}
          contentContainerStyle={{marginVertical: 10, paddingRight: 12}}
        />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
