import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, width, height} from '../../components/Theme';

const styles = background =>
  EStyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: background,
    },

    SplashScreen_RootView: {
      justifyContent: 'center',
      alignItems: 'center',

      width: width,
      height: height,
      backgroundColor: colors.darkGrey,
    },

    SplashScreen_ChildView: {
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.black,
    },
    SplashScreenText: {
      fontColor: colors.white,
      fontWeight: '900',
      fontSize: 40,
    },
  });
export {styles};
