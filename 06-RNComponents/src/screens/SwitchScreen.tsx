/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

const SwitchScreen = () => {

  const {theme:{colors}} = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHappy, isHungry} = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>

      <HeaderTitle title="Switches"/>

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
        }}>Is Active</Text>
        <CustomSwitch isOn={isActive} onChage={ (value) => onChange(value, 'isActive')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
        }}>Is Hungry</Text>
        <CustomSwitch isOn={isHungry} onChage={ (value) => onChange(value, 'isHungry')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text,
        }}>Is Happy</Text>
        <CustomSwitch isOn={isHappy} onChage={ (value) => onChange(value, 'isHappy')}/>
      </View>

      <Text style={{
          ...styles.switchText,
          color: colors.text,
      }}>
        {JSON.stringify(state, null, 5)}
      </Text>

    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({

  switchRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
