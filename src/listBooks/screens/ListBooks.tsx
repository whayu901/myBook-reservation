import React from 'react';
import { Text, View } from 'react-native';
import BookList from '../components/BookList';

const ListBooks: React.FC = () => {
  return (
    <View>
      <Text>Hello this is list</Text>

      <BookList />
    </View>
  );
};
export default ListBooks;
