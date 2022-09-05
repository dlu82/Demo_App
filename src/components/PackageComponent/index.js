import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const index = ({data, courseName, backgrnd, lessons, tagArray, ListStyle}) => {
  const navigation = useNavigation();
  // console.log('item====++====  ', data);
  return (
    <View style={{...style.List, ...ListStyle}}>
      <Pressable
        style={style.Press}
        onPress={() => {
          navigation.navigate('DetailPage');
        }}>
        <Image
          style={style.backImg}
          source={{uri: data?.item?.images[0]}}
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
        />

        <View style={style.descStyle}>
          <Text style={style.Coursename} numberOfLines={2}>
            {data?.item?.title}
          </Text>
          <Text style={style.Coursename}>{data?.item?.brand}</Text>
          <Text
            numberOfLines={2}
            style={{color: '#000', fontSize: 15, fontFamily: 'Inter-Regular'}}>
            {data?.item?.description}
          </Text>
        </View>
        {/* <View style={{flexDirection: 'row', marginLeft: 11}}>
          {tagArray &&
            tagArray.map(item => {
              return (
                <View style={style.subject(item)}>
                  <Text style={style.subjectText(item)}>{item.title}</Text>
                </View>
              );
            })}
        </View> */}
      </Pressable>
    </View>
  );
};
export default index;
