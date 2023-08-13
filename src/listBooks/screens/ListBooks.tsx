import React from 'react';
import { Pressable, Text, View } from 'react-native';
import BookList from '../components/BookList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BodyText, Heading } from '../../shared/themes/typhography';
import Spacer from '../../shared/components/Spacer';
import FAB from '../../shared/components/FAB';
import useListBooks from '../hooks/useListBooks';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BlurBackdrop from '../../shared/libs/@gorhom/bottom-sheet/BlackBackdrop';
import WidgetInputReservation from '../components/WidgetInputReservation';

const ListBooks: React.FC = () => {
  const inset = useSafeAreaInsets();
  const {
    selectedBook,
    setSelectedBook,
    isSelectedBookActive,
    setSelectedBookActive,
    bottomSheetRef,
    handleBSheetOpen,
    snapPoints,
    handleSelectedBookMultiple,
  } = useListBooks();

  return (
    <View
      style={{
        paddingTop: inset.top + 20,
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: '#f6f6f6',
      }}>
      <Text className={`${Heading.H1}`}>Book List</Text>
      <Spacer height={16} />
      <BookList
        isSelectedType={isSelectedBookActive}
        selectedData={selectedBook}
        onClickSelectItem={value => handleSelectedBookMultiple(value)}
      />

      {!isSelectedBookActive && (
        <FAB
          title="Lakukan Reservasi Buku"
          onPress={() => setSelectedBookActive(true)}
        />
      )}

      {isSelectedBookActive && (
        <View className="absolute bottom-[20px] flex flex-row justify-between items-center pt-3 ">
          <Pressable
            onPress={() => setSelectedBookActive(false)}
            className="bg-white border border-red-500 py-3 w-1/2 rounded-lg mr-1">
            <Text className={`${BodyText.Small.Bold} text-center text-red-500`}>
              Batal
            </Text>
          </Pressable>
          <Pressable className="bg-blue-400 py-3 w-1/2 rounded-lg">
            <Text
              className={`${BodyText.Small.Bold} text-center text-white`}>{`Konfirmasi ${selectedBook.length} Buku`}</Text>
          </Pressable>
        </View>
      )}

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={props => <BlurBackdrop {...props} />}
        topInset={inset.top}>
        <View>
          <WidgetInputReservation />
        </View>
      </BottomSheetModal>
    </View>
  );
};
export default ListBooks;
