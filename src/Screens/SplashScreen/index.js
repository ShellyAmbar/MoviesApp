import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../utils/Theme';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();
  const {background, dark} = theme;
  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen();
      navigation.navigate('Signup');
    }, 1000);
  }, []);

  const renderSplash = () => {
    return (
      <View style={styles.childView}>
        <Text style={styles.text}>Movies App</Text>
      </View>
    );
  };
  return <View>{isVisible === true ? renderSplash() : null}</View>;
};

export default SplashScreen;
const styles = StyleSheet.create({
  childView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center',
  },
});
