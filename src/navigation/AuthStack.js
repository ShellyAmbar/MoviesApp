import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../Views/Screens/HomeScreen';
import ProfileScreen from '../Views/Screens/ProfileScreen';
import LoginScreen from '../Views/Screens/LoginScreen';
import ArticleDetails from '../Views/Screens/ArticleDetails';

import FavoritesScreen from '../Views/Screens/FavoritesScreen';
import SplashScreen from '../Views/Screens/SplashScreen';
import Tabs from '../Views/Screens/Tabs';
import SignUpScreen from '../Views/Screens/SignUpScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {View} from 'react-native';

const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '149636402307-aojve5arh8pj22d4ba55ica3p4ri8qit.apps.googleusercontent.com',
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
