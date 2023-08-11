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
import { BodyText } from '../../shared/themes/typhography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BookListProps = {
  data?: BookItem[];
};

const BookList: React.FC<BookListProps> = props => {
  const { data, isFetching } = useQueryBookList();
  const inset = useSafeAreaInsets();

  const arrayToStringListAuthors = (value: Authors[]) => {
    const result = value.map(item => item.name).join(', ');

    return result;
  };

  const renderItem = ({ item, index }: { item: BookItem; index: number }) => {
    return (
      <Pressable
        className={`${
          index % 2 ? '' : 'mr-2'
        } rounded-lg px-4 py-[10px] bg-white flex-1 shadow-sm`}>
        <Text className={`${BodyText.Large.Bold}`}>{item.title}</Text>
        <View className="pt-2">
          <Text className={`${BodyText.Small.Bold}`}>Authors: </Text>
          <Text
            className={`${BodyText.Small.Regular}`}>{`${arrayToStringListAuthors(
            item.authors ?? [],
          )}`}</Text>
        </View>
        <View>
          <Text className={`${BodyText.Small.Bold}`}>Edition Key: </Text>
          <Text
            className={`${BodyText.Small.Regular}`}>{`${item.cover_edition_key}`}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data?.works}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: inset.bottom }}
      ItemSeparatorComponent={() => <Spacer height={16} />} // Adjust the spacing value as needed
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
};

export default BookList;
