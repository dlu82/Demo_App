import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import styles from './style';
import Buttn from '../../components/ButtonComponent';
import Textinput from '../../components/TextInputComponent';
import ErrCompnt from '../../components/ErrorMessgComponent';
import Image from '../../constants/images';

import {userRegister} from '../../store/slices/regSlice';
import {useDispatch, useSelector} from 'react-redux';

const index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch({});

  const [name, setStdName] = useState('');
  const [email, setstdMail] = useState('');
  const [password, setPassword] = useState('');

  const onRegistering = async values => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };

    const registerResult = await dispatch(userRegister(values));
    if (userRegister.fulfilled.match(registerResult)) {
      if (registerResult?.payload?.data) {
        navigation.navigate('HomeScreen');
      } else {
        ToastAndroid.showWithGravity(
          loginResult?.data?.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    }
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema,
    onSubmit: values => {
      console.log('FORMIK VALUE=====', values);
      onRegistering(values);
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Header}>Create an account</Text>
        <View>
          <Textinput
            Textinput={'Full name'}
            inputColor={'#7E84A3'}
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            onBlur={formik.handleBlur('name')}
          />
          {formik.errors.name && formik.touched.name && (
            <ErrCompnt msg={formik.errors.name} />
          )}
          <Textinput
            Textinput={'Email address'}
            inputColor={'#7E84A3'}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            onBlur={formik.handleBlur('email')}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrCompnt msg={formik.errors.email} />
          )}
          <Textinput
            Textinput={'Password'}
            Icon={Image.Invivisible}
            secureTextEntry
            inputColor={'#7E84A3'}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
          />
          {formik.errors.password && formik.touched.password && (
            <ErrCompnt msg={formik.errors.password} />
          )}
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Buttn label={'Sign up'} tapOn={formik.handleSubmit} />
          <Text style={styles.ORtext}>OR</Text>
          <Buttn
            IconTrue={true}
            label={'Sign up with Google'}
            btnStyle={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#000',
            }}
            txtStyle={{color: '#000'}}
            tapOn={() => {
              navigation.navigate('');
            }}
          />
          <Text style={styles.DescriptionText}>
            By clicking sign up button to agree the{' '}
            <Text
              style={{
                ...styles.DescriptionText,
                ...{
                  textDecorationLine: 'underline',
                  fontFamily: 'Inter-Bold',
                },
              }}>
              {' '}
              Terms
            </Text>
            {'  '}
            and
            {'  '}
            <Text
              style={{
                ...styles.DescriptionText,
                ...{
                  textDecorationLine: 'underline',
                  fontFamily: 'Inter-Bold',
                },
              }}>
              Privacy statement
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            justifyContent: 'center',
            paddingTop: 140,
          }}>
          <Text style={styles.SignUpText}>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                ...styles.SignUpText,
                ...{
                  color: '#8318CC',
                  textDecorationLine: 'underline',
                  fontFamily: 'Inter-Medium',
                },
              }}>
              Login{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;
