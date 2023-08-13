import { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BookItem } from '../definitions/types';
import Snackbar from 'react-native-snackbar';
import { useNavigation } from '@react-navigation/native';

const useListBooks = () => {
  const [selectedBook, setSelectedBook] = useState<BookItem[]>([]);
  const [isSelectedBookActive, setSelectedBookActive] = useState(false);
  const navigation: any = useNavigation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleBSheetOpen = useCallback(() => {
    return bottomSheetRef.current?.present();
  }, []);

  const handleBSheetClose = useCallback(() => {
    return bottomSheetRef?.current?.close();
  }, []);

  const handleSelectedBookMultiple = (value: BookItem) => {
    if (selectedBook?.includes(value)) {
      setSelectedBook(prevState => prevState.filter(item => item !== value));
    } else {
      setSelectedBook([...selectedBook, value]);
    }
  };

  const handleSuccessBookReservation = () => {
    handleBSheetClose();
    setSelectedBook([]);
    setSelectedBookActive(false);
    navigation.navigate('ListReservation');

    setTimeout(() => {
      Snackbar.show({
        text: 'Berhasil Melakukan Book Reservasi',
        backgroundColor: '#3ED598',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: 'white',
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }, 1000);
  };

  const handleConfirmationSelectedBooks = useCallback(() => {
    if (selectedBook.length === 0) {
      setTimeout(() => {
        Snackbar.show({
          text: 'Silahkan Pilih Buku Terlebih Dahulu. Kamu Bisa Memilih lebih dari satu buku ya :)',
          backgroundColor: '#EA7276',
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'OK',
            textColor: 'white',
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      }, 1000);
    } else {
      handleBSheetOpen();
    }
  }, [selectedBook]);

  const snapPoints = useMemo(() => ['100%'], []);

  return {
    selectedBook,
    setSelectedBook,
    isSelectedBookActive,
    setSelectedBookActive,
    bottomSheetRef,
    handleBSheetOpen,
    snapPoints,
    handleBSheetClose,
    handleSelectedBookMultiple,
    handleConfirmationSelectedBooks,
    handleSuccessBookReservation,
  };
};

export default useListBooks;
