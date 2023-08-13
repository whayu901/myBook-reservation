import { useCallback, useState } from 'react';

const useWidgetInputReservation = () => {
  const [isLoading, setLoading] = useState(false);
  const [isOpenDatePicker, setOpenDatePicker] = useState(false);
  const [isOpenTimePicker, setOpenTimePicker] = useState(false);

  const handleSubmitReservation = useCallback((value: any) => {
    console.log({ value });
  }, []);

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
