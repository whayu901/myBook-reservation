import React, { memo } from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import Spacer from '../../shared/components/Spacer';
import { BodyText } from '../../shared/themes/typhography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DataReservedBook } from '../definitions/types';
import dayjs from 'dayjs';

type ReservedListProps = {
  data?: DataReservedBook[];
  onClickDetail?: (item: DataReservedBook) => void;
};

const ReservedList: React.FC<ReservedListProps> = props => {
  const inset = useSafeAreaInsets();

  const renderItem = ({
    item,
    index,
  }: {
    item: DataReservedBook;
    index: number;
  }) => {
    return (
      <Pressable
        onPress={() => props?.onClickDetail?.(item)}
        className="rounded-lg px-4 py-[10px] bg-white flex-1 shadow-sm">
        <View className="flex flex-row justify-between items-center">
          <Text className={`${BodyText.Medium.Bold}`}>Nama: </Text>
          <Text className={`${BodyText.Medium.Regular}`}>{item.name}</Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className={`${BodyText.Medium.Bold}`}>Tanggal: </Text>
          <Text className={`${BodyText.Medium.Regular}`}>
            {dayjs(item.date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className={`${BodyText.Medium.Bold}`}>Waktu/Jam: </Text>
          <Text className={`${BodyText.Medium.Regular}`}>
            {dayjs(item.time).format('HH:mm')}
          </Text>
        </View>
      </Pressable>
    );
  };

  const emptyComponentReservedList = () => (
    <View className="flex flex-1 items-center justify-center">
      <Text>Belum Ada Data</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponentReservedList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: inset.bottom }}
        ItemSeparatorComponent={() => <Spacer height={16} />}
      />
    </>
  );
};

export default memo(ReservedList);
