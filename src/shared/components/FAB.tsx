import React, { memo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BodyText } from '../themes/typhography';

interface FABProps {
  onPress?: () => void;
  title?: string;
}

const FAB: React.FC<FABProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      className="absolute bottom-[30px] right-0 bg-blue-400 p-3 rounded-lg">
      <Text className={`${BodyText.Small.Bold} text-white`}>{props.title}</Text>
    </Pressable>
  );
};

export default memo(FAB);
