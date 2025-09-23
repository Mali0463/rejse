import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forside from '../views/forside';
import Oversigt from '../views/oversigt';
import Review from '../views/review';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Oversigt"   // vigtigt: vi er i Oversigt-tabben
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <Stack.Screen name="Forside" component={Forside} options={{ title: 'Forside' }} />
      <Stack.Screen name="Oversigt" component={Oversigt} options={{ title: 'Oversigt' }} />
      <Stack.Screen name="Review" component={Review} options={{ title: 'Review' }} />
    </Stack.Navigator>
  );
}
