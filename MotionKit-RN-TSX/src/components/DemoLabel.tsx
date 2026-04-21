import React from 'react';
import {Text, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import AnimatedView, {EffectHook, TriggerType} from '../core/AnimatedView';

interface DemoLabelProps {
  text: string;
  effect: EffectHook;
  trigger?: TriggerType;
  style?: StyleProp<ViewStyle>;
}

const DemoLabel: React.FC<DemoLabelProps> = ({
  text,
  effect,
  trigger = 'onMount',
  style,
}) => (
  <AnimatedView effect={effect} trigger={trigger} style={[styles.label, style]}>
    <Text style={styles.text}>{text}</Text>
  </AnimatedView>
);

const styles = StyleSheet.create({
  label: {
    padding: 8,
  },
  text: {
    fontSize: 15,
  },
});

export default DemoLabel;
