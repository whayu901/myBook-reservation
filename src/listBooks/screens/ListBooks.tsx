import React from 'react';
import { Text, View } from 'react-native';
import BookList from '../components/BookList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Heading } from '../../shared/themes/typhography';
import Spacer from '../../shared/components/Spacer';

const ListBooks: React.FC = () => {
  const inset = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: inset.top + 20, marginHorizontal: 15, flex: 1 }}>
      <Text className={`${Heading.H1}`}>Book List</Text>
      <Spacer height={16} />
      <BookList />
    </View>
  );
};
export default ListBooks;
