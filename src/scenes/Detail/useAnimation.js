/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
const useAnimation = () => {
  let animatedImage = useRef(new Animated.Value(1));
  let animatedBall = useRef(new Animated.Value(0)).current;
  let currentValue = 0;

  useEffect(() => {
    flipAnimation();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedImage.current, {
          toValue: 1.5,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedImage.current, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  animatedBall.addListener(({value}) => {
    currentValue = value;
  });

  const setInterpolate = animatedBall.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  const flipAnimation = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedBall, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedBall, {
        toValue: 180,
        useNativeDriver: false,
      }).start();
    }
    setTimeout(() => flipAnimation(), Math.floor(1000 + Math.random() * 3000));
  };

  return {
    animatedImage,
    rotateYAnimatedStyle,
  };
};

export default useAnimation;
