import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewConfig: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTodo: {
    backgroundColor: 'white',
    height: 65,
    width: '98%',
    borderBottomWidth: 1.5,
    borderLeftWidth: 8,
    borderLeftColor: 'black',
    borderBottomColor: 'gray',
    marginBottom: 10,
    paddingLeft: 5,
  },
  scrollView: {
    flex: 1,
  },
  flexView: {
    flex: 1,
  },
  viewDetails: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
