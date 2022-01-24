import { FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ChartScreen from '../screens/ChartScreen';
import EbookScreen from '../screens/EbookScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home"  size={24} color='gray' />,
        })}
      />
      <BottomTab.Screen
        name="Charts"
        component={ChartScreen}
        options={{
          title: 'Charts',
          tabBarIcon: ({ color }) => <FontAwesome name="line-chart" size={24} color='gray' />,
        }}
      />
      <BottomTab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color='gray' />,
        }}
      />
      <BottomTab.Screen
        name="Ebooks"
        component={EbookScreen}
        options={{
          title: 'Ebooks',
          tabBarIcon: ({ color }) => <Ionicons name="newspaper-outline" size={24} color='gray' />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Charts',
          tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={24} color='gray' />,
        }}
      />
    </BottomTab.Navigator>
  );
}