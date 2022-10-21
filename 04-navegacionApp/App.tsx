import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/ManuLateralBasico';
import { MenuLateral } from './src/navigator/ManuLateral';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
   <NavigationContainer>
    {/* <MenuLateralBasico/> */}
    {/* <StackNavigator/> */}
    <MenuLateral/>
    {/* <Tabs/> */}
   </NavigationContainer>
  );
};

export default App;
