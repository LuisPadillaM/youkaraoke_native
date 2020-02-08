import {DefaultTheme} from 'react-native-paper';
import {torchRed, blueRibbon} from './colors'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: torchRed[200],
    accent: blueRibbon[200],
  },
};

export default theme
