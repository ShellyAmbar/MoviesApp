import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export {width, height};

export const colors = {
  primary: '#202022',
  black: '#000000',
  white: '#ffffff',
  lightGrey: '#e8e8e8',
  grey: '#BBBBBC',
  darkGrey: '#8F8F90',
  error: '#FF4365',
  info: '#4C34F5',
  success: '#84DD63',
  overlay: 'rgba(00,00,00,0.1)',
  bg: '#FAFAFC',
  darkBlue: '#00008b',
  darkRed: '#d80000',
  buttonOverlayGrey: '#cccccc',
  lightBlue: '#E3EDFF',
};

export const PADDING = 18;

export const BORDER_RADIUS = {
  small: 10,
  med: 20,
  minimal: 2,
};
