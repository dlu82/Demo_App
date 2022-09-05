import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    // marginVertical: 10,
    padding: 10,
    // borderBottomWidth: 5,
    // borderBottomColor: '#F3F3F8',
  },
  productpic: {
    width: 160,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    width: 180,
    marginLeft: 15,
    justifyContent: 'center',
  },
  TxT: {
    color: '#000',
  },
  // Buttn: {
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  // },
});
export default style;
