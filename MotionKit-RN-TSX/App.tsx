import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AnimatedView from './src/core/AnimatedView';
import DemoCard from './src/components/DemoCard';
import DemoList from './src/components/DemoList';
import {ShimmerView} from './src/effects/shimmer';
import {useTypewriter} from './src/effects/typewriter';
import {useMorph} from './src/effects/morph';
import {
  useFadeIn,
  useFadeOut,
  useScaleUp,
  useScaleDown,
  useBounce,
  useShake,
  useRotateClockwise,
  useRotateCounterClockwise,
  useSlideInFromLeft,
  useSlideInFromRight,
  useSlideInFromTop,
  useSlideInFromBottom,
  useSlideOutToLeft,
  useSlideOutToRight,
  usePulse,
  useFlipHorizontal,
  useFlipVertical,
  useSwing,
  useColorPulse,
  useOpacityScale,
  usePathMotion,
  useSpringElastic,
} from './src/effects';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const TypewriterDemo: React.FC = () => {
  const text = useTypewriter('Hello, MotionKit!', 50);
  return <Text style={styles.typewriterText}>{text}</Text>;
};

const MorphDemo: React.FC = () => (
  <AnimatedView effect={useMorph} trigger="onTap" style={styles.morphBox} />
);

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>MotionKit RN TSX Demo</Text>

        <Section title="1. Fade In">
          <DemoCard title="Fade In" effect={useFadeIn} />
        </Section>

        <Section title="2. Fade Out">
          <DemoCard title="Fade Out" effect={useFadeOut} />
        </Section>

        <Section title="3. Scale Up">
          <DemoCard title="Scale Up" effect={useScaleUp} />
        </Section>

        <Section title="4. Scale Down">
          <DemoCard title="Scale Down" effect={useScaleDown} />
        </Section>

        <Section title="5. Bounce">
          <DemoCard title="Bounce" effect={useBounce} />
        </Section>

        <Section title="6. Shake">
          <DemoCard title="Shake" effect={useShake} />
        </Section>

        <Section title="7. Rotate Clockwise">
          <DemoCard title="Rotate CW" effect={useRotateClockwise} />
        </Section>

        <Section title="8. Rotate Counter-Clockwise">
          <DemoCard title="Rotate CCW" effect={useRotateCounterClockwise} />
        </Section>

        <Section title="9. Slide In from Left">
          <DemoCard title="Slide Left" effect={useSlideInFromLeft} />
        </Section>

        <Section title="10. Slide In from Right">
          <DemoCard title="Slide Right" effect={useSlideInFromRight} />
        </Section>

        <Section title="11. Slide In from Top">
          <DemoCard title="Slide Top" effect={useSlideInFromTop} />
        </Section>

        <Section title="12. Slide In from Bottom">
          <DemoCard title="Slide Bottom" effect={useSlideInFromBottom} />
        </Section>

        <Section title="13. Slide Out to Left">
          <DemoCard title="Slide Out Left" effect={useSlideOutToLeft} />
        </Section>

        <Section title="14. Slide Out to Right">
          <DemoCard title="Slide Out Right" effect={useSlideOutToRight} />
        </Section>

        <Section title="15. Pulse / Heartbeat">
          <DemoCard title="Pulse" effect={usePulse} />
        </Section>

        <Section title="16. Flip Horizontal">
          <DemoCard title="Flip H" effect={useFlipHorizontal} />
        </Section>

        <Section title="17. Flip Vertical">
          <DemoCard title="Flip V" effect={useFlipVertical} />
        </Section>

        <Section title="18. Swing / Wobble">
          <DemoCard title="Swing" effect={useSwing} />
        </Section>

        <Section title="19. Staggered List">
          <DemoList />
        </Section>

        <Section title="20. Color Pulse">
          <DemoCard title="Color Pulse" effect={useColorPulse} />
        </Section>

        <Section title="21. Opacity + Scale">
          <DemoCard title="Opacity + Scale" effect={useOpacityScale} />
        </Section>

        <Section title="22. Shimmer Loader">
          <ShimmerView width={300} height={20} />
          <View style={{height: 8}} />
          <ShimmerView width={200} height={20} />
        </Section>

        <Section title="23. Path Motion">
          <DemoCard title="Path Motion" effect={usePathMotion} trigger="onMount" />
        </Section>

        <Section title="24. Spring / Elastic">
          <DemoCard title="Spring" effect={useSpringElastic} />
        </Section>

        <Section title="25. Typewriter Text">
          <TypewriterDemo />
        </Section>

        <Section title="26. Morph / Shape">
          <MorphDemo />
        </Section>

        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },
  typewriterText: {
    fontSize: 22,
    fontWeight: '500',
  },
  morphBox: {
    width: 100,
    height: 100,
  },
});

export default App;
