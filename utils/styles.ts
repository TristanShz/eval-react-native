import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const STYLES = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
  },
  text: {
    color: COLORS.neutral.default,
  },

  title: {
    fontWeight: '600',
    fontSize: 18,
  },

  lightText: {
    fontWeight: '400',
    fontSize: 14,
  },

  container: {
    padding: 8,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },

  colContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  chips: {
    marginRight: 8,
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 8,
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 999,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: COLORS.secondary.default,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
});
