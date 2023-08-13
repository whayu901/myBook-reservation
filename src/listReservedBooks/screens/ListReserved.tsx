import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { BodyText, Heading } from '../../shared/themes/typhography';
import Spacer from '../../shared/components/Spacer';
import useListReserved from '../hooks/useListReserved';
import ReservedList from '../components/ReservedList';
import BlurBackdrop from '../../shared/libs/@gorhom/bottom-sheet/BlackBackdrop';
import WidgetDetailReservedBook from '../components/WidgetDetailReservedBook';
import ModalSuccess from '../../shared/components/ModalSuccess';

const ListReserved: React.FC = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const {
    bottomSheetRef,
    dataListReserved,
    handleBSheetOpen,
    handleDoneCheckedReservationBook,
    snapPoints,
    dataSelectedDetailReserved,
    setDataSelectedDetailReserverd,
    isModalSuccess,
    setModalSuccess,
  } = useListReserved();

  return (
    <View
      style={{
        paddingTop: inset.top + 20,
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: '#f6f6f6',
      }}>
      <View className="flex flex-row items-center">
        <Pressable onPress={() => navigation.goBack()}>
          <Text
            className={`${BodyText.Medium.Regular} text-seaBlue-60 underline`}>
            {'<Kembali'}
          </Text>
        </Pressable>
        <Spacer width={45} />
        <View className="self-center">
          <Text className={`${Heading.H1}`}>List Reservation</Text>
        </View>
      </View>
      <Spacer height={16} />

      <ReservedList
        data={dataListReserved}
        onClickDetail={value => {
          setDataSelectedDetailReserverd(value);
          handleBSheetOpen();
        }}
      />

      <ModalSuccess
        isVisible={isModalSuccess}
        message="Berhasil Melakukan Check Reservasi"
        onDismis={() => setModalSuccess(false)}
        textButton="Tutup"
      />

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={props => <BlurBackdrop {...props} />}
        topInset={inset.top}>
        <View>
          <WidgetDetailReservedBook
            data={dataSelectedDetailReserved}
            onClickFinishedReservedBook={() => {
              handleDoneCheckedReservationBook();
            }}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default ListReserved;
