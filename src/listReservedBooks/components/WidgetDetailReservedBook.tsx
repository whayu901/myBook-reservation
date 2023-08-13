import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Authors } from '../../listBooks/definitions/types';
import { DataReservedBook } from '../definitions/types';
import { BodyText, Heading } from '../../shared/themes/typhography';
import Spacer from '../../shared/components/Spacer';
import dayjs from 'dayjs';

interface WidgetDetailReservedBookProps {
  data?: DataReservedBook;
  onClickFinishedReservedBook?: () => void;
}

const WidgetDetailReservedBook: React.FC<
  WidgetDetailReservedBookProps
> = props => {
  const inset = useSafeAreaInsets();

  const arrayToStringListAuthors = (value: Authors[]) => {
    const result = value.map(item => item.name).join(', ');

    return result;
  };

  return (
    <View style={{ paddingBottom: inset.bottom }} className="px-4">
      <View className="flex items-center py-4">
        <Text className={`${Heading.H3}`}>
          Silahkan Tunjukan Detail Ini Kepada Admin
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer height={10} />
        <View>
          <Text className={`${BodyText.Medium.Bold}`}>Nama</Text>
          <Spacer height={5} />
          <View className="border-neutral-40 flex flex-row items-center rounded-lg border px-4 pt-[13px] pb-[14px]">
            <Text>{props.data?.name}</Text>
          </View>
        </View>

        <Spacer height={16} />
        <View>
          <Text className={`${BodyText.Medium.Bold}`}>Tanggal</Text>
          <Spacer height={5} />
          <View className="border-neutral-40 flex flex-row items-center rounded-lg border px-4 pt-[13px] pb-[14px]">
            <Text>{dayjs(props.data?.date).format('DD MMM YYYY')}</Text>
          </View>
        </View>

        <Spacer height={16} />
        <View>
          <Text className={`${BodyText.Medium.Bold}`}>Waktu/Jam</Text>
          <Spacer height={5} />
          <View className="border-neutral-40 flex flex-row items-center rounded-lg border px-4 pt-[13px] pb-[14px]">
            <Text>{dayjs(props?.data?.time).format('HH:mm')}</Text>
          </View>
        </View>

        <Spacer height={16} />
        <View>
          <Text className={`${BodyText.Medium.Bold}`}>Buku yang dipinjam</Text>
          <Spacer height={5} />

          {props?.data?.listBooks?.map((item, index) => (
            <Pressable
              key={index}
              className={`rounded-lg px-4 py-[10px] bg-white shadow-sm border border-earthGreen-40 mb-2`}>
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
          ))}
        </View>

        <Spacer height={16} />
        <Pressable
          onPress={props?.onClickFinishedReservedBook}
          className=" bg-blue-400 p-3 rounded-lg">
          <Text className={`${BodyText.Medium.Bold} text-center text-white`}>
            Selesai
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default WidgetDetailReservedBook;
