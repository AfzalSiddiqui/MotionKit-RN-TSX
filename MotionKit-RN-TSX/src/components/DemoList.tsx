import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {StaggeredItem} from '../effects/staggeredList';

interface DemoListProps {
  items?: string[];
}

const DemoList: React.FC<DemoListProps> = ({
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
}) => (
  <>
    {items.map((item, index) => (
      <StaggeredItem key={index} index={index} style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </StaggeredItem>
    ))}
  </>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
  },
});

export default DemoList;
