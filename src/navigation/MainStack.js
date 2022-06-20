import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ArticleDetails from '../Screens/ArticleDetails';
import FavoritesScreen from '../Screens/FavoritesScreen';

import Tabs from '../Screens/Tabs';

import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LoginScreen from '../Screens/LoginScreen';

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="Tabs" component={Tabs} />

      <Stack.Screen
        name="ArticleDetails"
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
        component={ArticleDetails}
      />
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

      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export {MainStack};
