import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/ManuLateralBasico';
import { MenuLateral } from './src/navigator/ManuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
   <NavigationContainer>
    <AppState>
      {/* <MenuLateralBasico/> */}
      {/* <StackNavigator/> */}
      <MenuLateral/>
      {/* <Tabs/> */}
    </AppState>
   </NavigationContainer>
  );
};

export default App;

const AppState = ({children}:any)  => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
