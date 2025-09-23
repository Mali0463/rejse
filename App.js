import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'; // hvis ikoner ikke virker, brug: '@react-native-vector-icons/ionicons'

import Forside from './views/forside';
import Review from './views/review';
import StackNavigator from './components/stack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            const iconMap = { Forside: 'home', Oversigt: 'list', Review: 'settings' };
            return <Ionicons name={iconMap[route.name] ?? 'ellipse'} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Forside" component={Forside} />
        <Tab.Screen name="Oversigt" component={StackNavigator} />
        <Tab.Screen name="Review" component={Review} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}