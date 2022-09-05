import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {searchProducts} from '../../store/slices/productSlice';

import style from './style';
import image from '../../constants/images';
import Prdct from '../../components/ProductComponent';
import TextInput from '../../components/TextInputComponent';
import BackButton from '../../assets/Icons/arrow-left.svg';

const index = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [listData, setListData] = useState([]);

  const navigation = useNavigation();
  const didTapOnBack = () => {
    // console.log('Baack ===');
    navigation.goBack();
  };
  useEffect(() => {
    if (searchText.length >= 1) {
      searchFunction();
    } else {
      setListData();
    }
  }, [searchText]);

  const searchFunction = async () => {
    const ResultAction = await dispatch(searchProducts(searchText));
    if (searchProducts.fulfilled.match(ResultAction)) {
      setListData(ResultAction?.payload?.products);
    } else {
      setListData([]);
    }
  };
  // console.log('ResulT ActION==>>> ', ResultAction);
  // console.log('eroorrrr:=====', ResultAction);
  const emptyData = () => {
    return (
      <View style={style.body}>
        <Image source={image.SearchImage} style={style.centerImage} />
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text style={{color: '#000'}}>No search results.</Text>
          <Text style={{color: '#4D4D4D', textAlign: 'center'}}>
            We couldn’t find what you’re looking for
          </Text>
        </View>
      </View>
    );
  };
  // useEffect(() => {
  //   setListData();
  // }, []);

  // console.log('listDATATAAA======  ', listData);
  return (
    <View style={style.container}>
      <View style={style.Header}>
        <TouchableOpacity onPress={didTapOnBack}>
          <BackButton />
        </TouchableOpacity>
        <TextInput
          Textinput={'Search all packages'}
          container={{
            backgroundColor: '#E9E9F2',
            marginVertical: 10,
            borderWidth: 0,
          }}
          onChangeText={textEvent => {
            setSearchText(textEvent);
          }}
        />
      </View>

      <FlatList
        ListEmptyComponent={emptyData}
        data={listData}
        renderItem={({item, index}) => (
          //data, index, length is just names
          <Prdct data={item} index={index} length={listData.length} />
        )}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default index;
