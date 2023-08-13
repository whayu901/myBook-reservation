import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import ListBooks from '../listBooks/screens/ListBooks';
import ListReserved from '../listReservedBooks/screens/ListReserved';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ListBooks" component={ListBooks} />
        <Stack.Screen name="ListReservation" component={ListReserved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
