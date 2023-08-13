import { useCallback, useState } from 'react';
import { BookItem } from '../definitions/types';
import { useGlobalContext } from '../../shared/context/GlobalStateContext';

interface Props {
  selectedBooks?: BookItem[];
  onClickConfirmReservation?: () => void;
}

const useWidgetInputReservation = ({
  selectedBooks,
  onClickConfirmReservation,
}: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [isOpenDatePicker, setOpenDatePicker] = useState(false);
  const [isOpenTimePicker, setOpenTimePicker] = useState(false);
  const { setGlobalValue, globalValue } = useGlobalContext();

  const handleSubmitReservation = useCallback(
    (value: any) => {
      const dataSavedReservation = {
        ...value,
        listBooks: selectedBooks,
      };

      const updatedGlobalValue = globalValue || [];
      setGlobalValue([...updatedGlobalValue, dataSavedReservation]);
      onClickConfirmReservation?.();
    },
    [selectedBooks],
  );

  return {
    isLoading,
    isOpenTimePicker,
    setOpenTimePicker,
    isOpenDatePicker,
    setOpenDatePicker,
    handleSubmitReservation,
  };
};

export default useWidgetInputReservation;
