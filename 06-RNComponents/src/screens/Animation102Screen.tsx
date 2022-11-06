import React from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useRef } from 'react';

export const Animation102Screen = () => {

  const move = useRef(new Animated.ValueXY()).current;

  const moveResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: move.x,
        dy: move.y,
      },
    ],{
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        move,
        {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        } //back zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
        <Animated.View   {...moveResponder.panHandlers}
        style={
          [move.getLayout(), styles.purpleBox]
        }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox:{
      backgroundColor: '#75CEDB',
      width: 150,
      height: 150,
  },
});
