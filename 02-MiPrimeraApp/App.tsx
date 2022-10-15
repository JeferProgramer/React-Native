import React from 'react';
import { SafeAreaView } from 'react-native';
// import FlexScreen from './src/screens/FlexScreen';
import TareasScreen from './src/screens/TareasScreen';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { Contador } from './src/screens/Contador';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    // <HolaMundoScreen/>
    // <Contador/>
    <SafeAreaView style={{ flex:1}}>
      {/* <BoxObjectModel/> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareasScreen/>
    </SafeAreaView>
  );
};

export default App;
