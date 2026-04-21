import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useMorph = (isActive: SharedValue<number>, duration: number = 800) => {
  return useAnimatedStyle(() => ({
    borderRadius: withTiming(isActive.value ? 50 : 10, {duration}),
    width: 100,
    height: 100,
    backgroundColor: '#1976D2',
  }));
};

export default useMorph;
