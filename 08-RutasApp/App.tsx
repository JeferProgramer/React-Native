import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { PermissionsProvier } from './src/context/PermissionsContext';
import { Navigator } from './src/navigator/Navigator';

const AppState = ({children}: any) => {
  return (
    <PermissionsProvier>
      {children}
    </PermissionsProvier>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator/>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
