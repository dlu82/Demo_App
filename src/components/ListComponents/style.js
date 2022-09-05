import {StyleSheet, Dimensions} from 'react-native';
const Screenwidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  List: {
    height: 175,
    width: Screenwidth / 1.15,
    marginLeft: 13,
    borderRadius: 10,
    borderColor: '#E6E6E6',
    marginTop: 10,
  },
  backImg: {
    width: Screenwidth / 1.15,
    height: 175,
    borderRadius: 10,
  },
});

export default style;
