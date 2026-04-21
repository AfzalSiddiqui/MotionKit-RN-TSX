import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useFadeIn = (isActive: SharedValue<number>, duration: number = 500) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 1 : 0, {duration}),
  }));
};

export default useFadeIn;
