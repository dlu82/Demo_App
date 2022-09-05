import {StyleSheet, Dimensions} from 'react-native';
const Screenwidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  List: {
    height: 239,
    width: Screenwidth / 1.75,
    marginLeft: 13,
    borderRadius: 10,
  },
  backImg: {
    width: Screenwidth / 1.75,
    height: 115,
    resizeMode: 'contain',
  },

  Coursename: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Inter-SemiBold',
  },
  descStyle: {
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 10,
  },
  subject: item => ({
    height: 20,
    width: 60,
    borderRadius: 3,
    backgroundColor: item.backgrndColor,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  }),
  subjectText: item => ({
    color: item.textcolr,
    fontSize: 12,
    fontWeight: '600',
  }),
});

export default style;
