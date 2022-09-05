import {StyleSheet, Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Button: {
    flexDirection: 'row',
    backgroundColor: '#8318CC',
    height: 50,
    width: ScreenWidth / 1.15,
    // marginVertical:30,
    marginHorizontal: 10,
    // marginLeft: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
