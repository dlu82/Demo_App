import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import TextInput from '../../components/TextInputComponent';
import Button from '../../components/ButtonComponent';
import Image from '../../constants/images';
import ErrCompnt from '../../components/ErrorMessgComponent';

import {userLogin} from '../../store/slices/regSlice';
// import {deleteApiFunction} from '../../store/slices/regSlice';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import * as yup from 'yup';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch({});

  const onTapLogin = async values => {
    const loginResult = await dispatch(userLogin(values));
    if (userLogin.fulfilled.match(loginResult)) {
      if (loginResult.payload.data) {
        navigation.navigate('HomeScreen');
      } else {
        ToastAndroid.showWithGravity(
          loginResult?.payload?.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      // loginResult??"fgfjmv"
      // console.log(loginResult, '----------------=-=--=----------------');
    }
  };

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema,
    onSubmit: values => {
      console.log('FORMIK VALUE=====', values);
      onTapLogin(values);
    },
  });

  // console.log('formik error======', formik.errors, formik.touched);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.txt}>Welcome</Text>
        <View>
          <TextInput
            Textinput={'Email/Phone number'}
            inputColor={'#7E84A3'}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            onBlur={formik.handleBlur('email')}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrCompnt msg={formik.errors.email} />
          )}
          <TextInput
            Textinput={'Password'}
            inputColor={'#7E84A3'}
            secureTextEntry
            Icon={Image.Invivisible}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
          />
          {formik.errors.password && formik.touched.password && (
            <ErrCompnt msg={formik.errors.password} />
          )}

          <View style={{position: 'absolute', right: 28, bottom: -15}}>
            <TouchableOpacity>
              <Text style={styles.ForgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Button label={'Login'} tapOn={formik.handleSubmit} />
          <Text style={styles.ORtext}>OR</Text>
          <Button
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
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 110,
          }}>
          <Text style={styles.SignUpText}>Don't have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text
              style={{
                ...styles.SignUpText,
                ...{
                  color: '#8318CC',
                  textDecorationLine: 'underline',
                  fontFamily: 'Inter-Medium',
                },
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
