import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useOpacityScale = (isActive: SharedValue<number>, duration: number = 500) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
    transform: [
      {scale: withTiming(isActive.value ? 1 : 0.6, {duration})},
    ],
  }));
};

export default useOpacityScale;
