import React from 'react';
import 'react-native-gesture-handler';
import { Navigation } from './src/navigator/Navigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';


const App = () => {
  return (
    <AppState>
      <Navigation/>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
export default App;
