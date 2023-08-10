import React, { memo, useCallback } from 'react';
import {
  View,
  FlatList,
  Pressable,
  FlatListProps,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import { BookItem } from '../definitions/types';

type BookListProps = {
  data?: BookItem[];
};

const BookList: React.FC<BookListProps> = props => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

export default BookList;
