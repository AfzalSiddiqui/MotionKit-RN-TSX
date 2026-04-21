import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useScaleUp = (isActive: SharedValue<number>, duration: number = 400) => {
  return useAnimatedStyle(() => ({
    transform: [
      {scale: withTiming(isActive.value ? 1 : 0.5, {duration})},
    ],
  }));
};

export default useScaleUp;
