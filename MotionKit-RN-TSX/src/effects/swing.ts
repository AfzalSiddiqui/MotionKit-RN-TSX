import {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';

export const useSwing = (isActive: SharedValue<number>) => {
  return useAnimatedStyle(() => ({
    transform: [
      {
        rotate: isActive.value
          ? withRepeat(
              withSequence(
                withTiming('15deg', {duration: 150}),
                withTiming('-15deg', {duration: 150}),
                withTiming('0deg', {duration: 150}),
              ),
              3,
              false,
            )
          : '0deg',
      },
    ],
  }));
};

export default useSwing;
