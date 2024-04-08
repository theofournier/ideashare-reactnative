import { StyleSheet } from 'react-native';
import { text1, text3 } from './Colors';

export const defaultFontFamily = 'Lato';
export const robotoFontFamily = 'Roboto';

const defaultFontStyles = {
  color: text1,
  fontFamily: defaultFontFamily,
};

const robotoFontStyles = {
  ...defaultFontStyles,
  fontFamily: robotoFontFamily,
};

export const fonts = StyleSheet.create({
  display5: {
    ...robotoFontStyles,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 45,
  },
  display4: {
    ...robotoFontStyles,
    fontSize: 30,
    lineHeight: 37.5,
  },
  display3: {
    ...robotoFontStyles,
    fontSize: 22,
    lineHeight: 27.5,
  },
  display2: {
    ...robotoFontStyles,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 27.5,
  },
  display1: {
    ...robotoFontStyles,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  title: {
    ...robotoFontStyles,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22.5,
  },
  body: {
    ...defaultFontStyles,
    fontSize: 16,
    lineHeight: 20,
  },
  bodyBold: {
    ...defaultFontStyles,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  button: {
    ...defaultFontStyles,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  caption: {
    ...robotoFontStyles,
    color: text3,
    fontSize: 14,
    lineHeight: 17.5,
  },
  captionBold: {
    ...robotoFontStyles,
    color: text3,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17.5,
  },
  mini: {
    ...robotoFontStyles,
    fontSize: 12,
    lineHeight: 15,
  },
});
