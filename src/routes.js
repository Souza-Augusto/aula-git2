import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './screens/tela1';
import Tela2 from './screens/tela2';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela1" component={Tela1} />
      <Stack.Screen name="Tela2" component={Tela2} />
    </Stack.Navigator>
  );
}
