import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  txt: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 30,
  },
  ForgotPassword: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    // marginLeft: 240,
    // position: 'absolute',
    // marginBottom: 10,
  },
  ORtext: {
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: '#7E84A3',
    fontSize: 20,
    paddingVertical: 20,
  },
  DescriptionText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#7E84A3',
    lineHeight: 17,
    letterSpacing: 1,
  },
  SignUpText: {
    fontFamily: 'Inter-Regular',
    color: '#000',
    fontSize: 16,
  },
});

export default styles;
