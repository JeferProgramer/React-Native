/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useform';
import { styles } from '../theme/appTheme';

const TextInputScreen = () => {

  const {theme:{colors,divideColor}} = useContext(ThemeContext);

  const {form, onChange, isSubscribed} = useForm({
    name:'',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.globalMargin}>

          <HeaderTitle title="Input Text"/>


          <TextInput
            style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={(value => onChange(value, 'name'))}
            placeholderTextColor={divideColor}
          />
          <TextInput
             style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Ingrese su email"
            autoCorrect={false}
            onChangeText={(value => onChange(value, 'email'))}
            keyboardType="email-address"
            placeholderTextColor={divideColor}
          />

          <View style={styles.switchRow}>
            <Text style={{...styles.switchText, color: colors.text}}>Is Active</Text>
            <CustomSwitch isOn={isSubscribed} onChage={ (value) => onChange(value, 'isSubscribed')}/>
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)}/>
          <HeaderTitle title={JSON.stringify(form, null, 3)}/>

          <TextInput
            style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Ingrese su telefono"
            onChangeText={(value => onChange(value, 'phone'))}
            keyboardType="phone-pad"
            placeholderTextColor={divideColor}
          />

          <View style={{height: 100}}/>

        </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const stylesInput = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
});
