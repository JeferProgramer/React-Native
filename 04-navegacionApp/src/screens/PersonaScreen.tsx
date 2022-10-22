/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

const PersonaScreen = ({route, navigation}: Props) => {

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  const {changeUsername} = useContext( AuthContext);
  const {nombre} = params;

  useEffect(() => {
    changeUsername(nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
          {
            JSON.stringify(params, null, 3)
          }
        </Text>
    </View>
  );
};

export default PersonaScreen;
