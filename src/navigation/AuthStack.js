import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen';
import ArticleDetails from '../Screens/ArticleDetails';

import FavoritesScreen from '../Screens/FavoritesScreen';
import SplashScreen from '../Screens/SplashScreen';
import Tabs from '../Screens/Tabs';
import SignUpScreen from '../Screens/SignUpScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View} from 'react-native';

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '871504711219-96h7tsrhlomme914aeqg4jorj3nesaa2.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="Login"
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signup"
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
        component={SignUpScreen}
      />

      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
    </Stack.Navigator>
  );
};
export default AuthStack;
