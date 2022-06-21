import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components//FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
import {useNavigation, useTheme} from '@react-navigation/native';
import userImg from '../assets/images/user.png';
import {colors} from '../utils/Theme';
const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const handleLoginSuccess = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome Stranger!</Text>

      <Image
        source={require('../assets/images/default-user-image.png')}
        style={styles.circularImg}
      />
      <Text style={styles.subText}>
        Please log in to continue to the awesomness
      </Text>

      <View style={styles.bottomButtonsContainer}>
        <SocialButton
          style={styles.botton}
          color={colors.white}
          buttonTitle="Login with Facebook"
          btnType="facebook"
          backgroundColor={colors.darkBlue}
          //   onPress={() => fbLogin(() => handleLoginSuccess())}
          onPress={() => handleLoginSuccess()}
        />

        <SocialButton
          style={styles.botton}
          color={colors.white}
          buttonTitle="Or with Google"
          btnType="google"
          backgroundColor={colors.darkRed}
          //   onPress={() => googleLogin(() => handleLoginSuccess())}
          onPress={() => handleLoginSuccess()}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  titleText: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,

    color: colors.black,
  },
  subText: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    marginBottom: 10,
    color: colors.darkGrey,
    textAlign: 'center',
  },

  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  circularImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 10,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 10,
    margin: 5,
    height: 60,
    color: colors.white,
  },
});
