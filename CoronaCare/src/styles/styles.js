import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  Temperature: {
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
  },
  Image: {
    width: 150,
    height: 100,
    margin: 1,
    borderRadius: 7,
  },
  item: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'right',
  },
  welcomeText: {
    fontWeight: 'normal',
    fontSize: 36,
    color: '#000000',
    padding: 20,
  },
});
