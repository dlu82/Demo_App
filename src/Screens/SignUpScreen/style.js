import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  Header: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontFamily: 'Inter-SemiBold',
    marginTop: 26,
  },

  ORtext: {
    fontFamily: 'Inter-Regular',
    color: '#7E84A3',
    fontSize: 20,
    textAlign: 'center',
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
    // fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
