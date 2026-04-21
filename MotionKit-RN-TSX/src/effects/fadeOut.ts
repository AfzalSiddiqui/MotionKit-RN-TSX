import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useFadeOut = (isActive: SharedValue<number>, duration: number = 500) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isActive.value ? 0 : 1, {duration}),
  }));
};

export default useFadeOut;
