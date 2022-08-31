import 'react-native-gesture-handler';
import React from 'react';
import FirstPage from './FirstPage';
import Login from './Login';
import Signin from './Signin';
import Birth from './Birth';
import Photo from './Photo';
import Password from './Password';
import Homepage from './Homepage';
import Likes from './Likes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#844AFF',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarInactiveBackgroundColor: '#E8E8E8',
        tabBarIconStyle: {display: 'none'},
        tabBarStyle: {
          height: 99,
        },
        tabBarItemStyle: {
          marginTop: 20,
          height: 42,
          width: 170,
          borderRadius: 10,
          margin: 7,
          marginHorizontal: 15,
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: 'Kullanıcılar',
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarLabel: 'Beğenenler',
        }}
      />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            headerTintColor: 'black',
          }}
          name="Welcome"
          component={FirstPage}
        />
        <Stack.Screen
          options={{
            title: 'Giriş Yap',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
            headerTitleStyle: {fontFamily: 'Gilroy-SemiBold', fontSize: 24},
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'Kayıt Ol',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Birth"
          component={Birth}
          options={{
            title: 'Kayıt Ol',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{
            title: 'Kayıt Ol',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{
            title: 'Kayıt Ol',
            headerBackTitleVisible: false,
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
