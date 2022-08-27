import React, {ReactNode} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {STYLES} from '../utils/styles';

const Chips = (props: {children: ReactNode; onPress: () => void}) => {
  return (
    <TouchableOpacity style={STYLES.chips} onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Chips;
