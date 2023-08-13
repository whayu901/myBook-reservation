import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { useGlobalContext } from '../../shared/context/GlobalStateContext';
import { DataReservedBook } from '../definitions/types';

const useListReserved = () => {
  const [isLoading, setLoading] = useState(false);
  const [dataListReserved, setDataListReserved] = useState([]);
  const [isModalSuccess, setModalSuccess] = useState(false);
  const [dataSelectedDetailReserved, setDataSelectedDetailReserverd] =
    useState<DataReservedBook>({
      listBooks: [],
    });
  const { globalValue, setGlobalValue } = useGlobalContext();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    setDataListReserved(globalValue);
  }, [globalValue]);

  const handleBSheetOpen = useCallback(() => {
    return bottomSheetRef.current?.present();
  }, []);

  const handleBSheetClose = useCallback(() => {
    return bottomSheetRef?.current?.close();
  }, []);

  const handleDoneCheckedReservationBook = () => {
    const updatedGlobalValue = globalValue || [];

    const dataDeleteFromGlobalStateReservation = updatedGlobalValue.filter(
      (item: any) => item !== dataSelectedDetailReserved,
    );

    setDataListReserved(prevState =>
      prevState.filter(item => item !== dataSelectedDetailReserved),
    );
    handleBSheetClose();
    setGlobalValue(dataDeleteFromGlobalStateReservation);

    setTimeout(() => {
      setModalSuccess(true);
    }, 600);
  };

  const snapPoints = useMemo(() => ['100%'], []);

  return {
    isLoading,
    bottomSheetRef,
    dataListReserved,
    handleBSheetOpen,
    handleBSheetClose,
    handleDoneCheckedReservationBook,
    snapPoints,
    dataSelectedDetailReserved,
    setDataSelectedDetailReserverd,
    isModalSuccess,
    setModalSuccess,
  };
};

export default useListReserved;
