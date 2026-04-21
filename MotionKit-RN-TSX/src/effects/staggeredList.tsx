import React, {useEffect} from 'react';
import {ViewStyle, StyleProp} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

interface StaggeredItemProps {
  children: React.ReactNode;
  index: number;
  delay?: number;
  style?: StyleProp<ViewStyle>;
}

export const StaggeredItem: React.FC<StaggeredItemProps> = ({
  children,
  index,
  delay = 100,
  style,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withDelay(index * delay, withTiming(1, {duration: 400}));
    translateY.value = withDelay(index * delay, withTiming(0, {duration: 400}));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Animated.View style={[style, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default StaggeredItem;
