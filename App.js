import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import DailyPic from './screens/dailypic';
import Spacecraft from './screens/spacecrafts';
import StarMap from './screens/starmap';

const CSN = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CSN.Navigator screenOptions={{headerShown:false}}>
        <CSN.Screen name="Home" component={Home} />
        <CSN.Screen name="DP" component={DailyPic} />
        <CSN.Screen name="SC" component={Spacecraft} />
        <CSN.Screen name="SM" component={StarMap} />
      </CSN.Navigator>
    </NavigationContainer>
  );
}
