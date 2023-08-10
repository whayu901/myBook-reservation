import React, { memo, useCallback } from 'react';
import {
  View,
  FlatList,
  Pressable,
  FlatListProps,
  StyleProp,
  ViewStyle,
  Text,
  Dimensions,
} from 'react-native';
import { Authors, BookItem } from '../definitions/types';
import useQueryBookList from '../hooks/useQueryBookList';
import Spacer from '../../shared/components/Spacer';

type BookListProps = {
  data?: BookItem[];
};

const BookList: React.FC<BookListProps> = props => {
  const { data, isFetching } = useQueryBookList();

  const arrayToStringListAuthors = (value: Authors[]) => {
    const result = value.map(item => item.name).join(', ');

    return result;
  };

  const renderItem = ({ item, index }: { item: BookItem; index: number }) => {
    return (
      <View
        className={`${
          index % 2 ? '' : 'mr-2'
        } rounded-lg px-4 py-[10px] bg-slate-500 flex-1 shadow-sm`}>
        <Text>{item.title}</Text>
        <Text>{arrayToStringListAuthors(item.authors ?? [])}</Text>
        <Text>{item.cover_edition_key}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data?.works}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Spacer height={16} />} // Adjust the spacing value as needed
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
};

export default BookList;
