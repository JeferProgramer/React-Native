import { useRef } from 'react'
import { Animated, Easing } from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  };


  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  };

  const startMoving = (initPosition: number, duration=300) => {

    position.setValue(initPosition);
     Animated.timing(
      position,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
        easing: Easing.bounce,
      }
    ).start();
  };
  return {
    fadeIn,
    fadeOut,
    position,
    opacity,
    startMoving,
  }
};

export default useAnimation;
