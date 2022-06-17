import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
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
    }, 1500);
  }, []);

  const renderSplash = () => {
    return (
      <View style={styles().SplashScreen_ChildView}>
        <Text style={{textAlign: 'center'}}>Movies App</Text>
      </View>
    );
  };
  return (
    <View style={styles(background).MainContainer}>
      {isVisible === true ? renderSplash() : null}
    </View>
  );
};

export default SplashScreen;
