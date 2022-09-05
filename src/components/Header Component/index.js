import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import Drawer from '../../assets/Icons/Drawer.svg';
import Logo from '../../assets/Icons/Logo.svg';
import Search from '../../assets/Icons/Search.svg';
import Back from '../../assets/Icons/arrow-left.svg';

const index = ({
  TapOn,
  IsBack,
  IsDrawer,
  IsLogo,
  IsSearch,
  IsText,
  HeadrText,
}) => {
  const navigation = useNavigation();

  const didTapOnBack = () => {
    console.log('Baack ===');
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {IsBack && (
            <TouchableOpacity onPress={didTapOnBack}>
              <Back />
            </TouchableOpacity>
          )}
          {IsText && (
            <Text
              style={{
                left: 20,
                color: '#000',
                fontSize: 16,
                fontFamily: 'Inter-SemiBold',
              }}>
              {HeadrText}
            </Text>
          )}
          {IsDrawer && <Drawer />}
          {IsLogo && (
            <View style={{left: 23}}>
              <Logo />
            </View>
          )}
        </View>
        {IsSearch && (
          <TouchableOpacity onPress={TapOn}>
            <Search />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#DEE2F5',
          marginTop: 15,
        }}
      />
    </View>
  );
};
export default index;
