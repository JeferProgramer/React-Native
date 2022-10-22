/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import {useNavigation} from '@react-navigation/core';

const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2 Screen</Text>

      <Button
        title='Ir pagina 3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;
