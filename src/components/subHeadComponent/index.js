import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import styles from './style';
import RightIcon from '../../assets/Icons/Icon-down.svg';

const index = ({subHead, spclStyle, needSeeAll, OnPress}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, ...spclStyle}}>
      <Text style={styles.Category}>{subHead}</Text>
      <TouchableOpacity onPress={OnPress}>
        {needSeeAll && (
          <Text style={styles.SeeAll}>
            See all <RightIcon />{' '}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default index;
