import {useAnimatedStyle, withTiming, SharedValue} from 'react-native-reanimated';

export const useRotateClockwise = (isActive: SharedValue<number>, duration: number = 800) => {
  return useAnimatedStyle(() => {
    const rotation = withTiming(isActive.value ? 360 : 0, {duration});
    return {
      transform: [{rotate: `${rotation}deg`}],
    };
  });
};

export default useRotateClockwise;
