import { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BookItem } from '../definitions/types';

const useListBooks = () => {
  const [selectedBook, setSelectedBook] = useState<BookItem[]>([]);
  const [isSelectedBookActive, setSelectedBookActive] = useState(false);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleBSheetOpen = useCallback(() => {
    return bottomSheetRef.current?.present();
  }, []);

  const handleCloseCountryCodeBottomSheet = useCallback(() => {
    return bottomSheetRef?.current?.close();
  }, []);

  const handleSelectedBookMultiple = (value: BookItem) => {
    if (selectedBook?.includes(value)) {
      setSelectedBook(prevState => prevState.filter(item => item !== value));
    } else {
      setSelectedBook([...selectedBook, value]);
    }
  };

  const snapPoints = useMemo(() => ['75%'], []);

  return {
    selectedBook,
    setSelectedBook,
    isSelectedBookActive,
    setSelectedBookActive,
    bottomSheetRef,
    handleBSheetOpen,
    snapPoints,
    handleCloseCountryCodeBottomSheet,
    handleSelectedBookMultiple,
  };
};

export default useListBooks;
