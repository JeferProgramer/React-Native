/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import useAnimation from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const {fadeIn, fadeOut, opacity, position, startMoving} = useAnimation();
  const {theme:{colors}} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
        <Animated.View style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          marginBottom: 20,
          transform:[{
            translateY: position,
          }],
        }}
        />
        <Button
          title="Fade In"
          onPress={() => {
            fadeIn();
            startMoving(100);
          }}
          color={colors.primary}
        />
        <Button title="Fade Out" onPress={fadeOut}  color={colors.primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox:{
      width: 150,
      height: 150,
  },
});
