import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import useWidgetInputReservation from '../hooks/useWidgetInputReservation';
import InputText from '../../shared/components/InputText';
import Spacer from '../../shared/components/Spacer';
import { BodyText } from '../../shared/themes/typhography';
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';

type FormDataReservation = {
  name?: string;
  date?: any;
  time?: any;
};

const WidgetInputReservation = () => {
  const {
    isOpenTimePicker,
    setOpenTimePicker,
    isOpenDatePicker,
    setOpenDatePicker,
    handleSubmitReservation,
  } = useWidgetInputReservation();
  const { control, handleSubmit, getValues, setValue } =
    useForm<FormDataReservation>({
      defaultValues: {
        date: new Date(),
        name: '',
        time: new Date(),
      },
    });

  return (
    <View className="px-4">
      <View>
        <Text className={`${BodyText.Medium.Bold}`}>Nama</Text>
        <Spacer height={5} />
        <Controller
          control={control}
          name="name"
          rules={{
            validate: value => {
              if (value === '') {
                return 'Nama tidak boleh kosong';
              }
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <InputText
                value={field.value}
                onChangeText={field.onChange}
                errorMessage={fieldState.error?.message}
                testID="InputReservation:name"
              />
            );
          }}
        />
      </View>

      <Spacer height={16} />
      <View>
        <Text className={`${BodyText.Medium.Bold}`}>Tanggal</Text>
        <Spacer height={5} />
        <Controller
          control={control}
          name="date"
          rules={{
            validate: value => {
              if (value === '') {
                return 'Tanggal tidak boleh kosong';
              }
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <>
                <Pressable
                  onPress={() => setOpenDatePicker(true)}
                  className="border-neutral-40 flex flex-row items-center rounded-lg border px-4 pt-[13px] pb-[14px]">
                  <Text>{dayjs(field.value).format('DD MMMM YYYY')}</Text>
                </Pressable>
                {fieldState.error?.message && (
                  <View className="mt-2" testID="errorMessage">
                    <Text className={`${BodyText.Tiny.Regular} text-red-600`}>
                      {fieldState.error?.message}
                    </Text>
                  </View>
                )}
              </>
            );
          }}
        />
      </View>

      <Spacer height={16} />
      <View>
        <Text className={`${BodyText.Medium.Bold}`}>Waktu</Text>
        <Spacer height={5} />
        <Controller
          control={control}
          name="time"
          rules={{
            validate: value => {
              if (value === '') {
                return 'Waktu tidak boleh kosong';
              }
            },
          }}
          render={({ field, fieldState }) => {
            return (
              <>
                <Pressable
                  onPress={() => setOpenTimePicker(true)}
                  className="border-neutral-40 flex flex-row items-center rounded-lg border px-4 pt-[13px] pb-[14px]">
                  <Text>{dayjs(field.value).format('HH:mm')}</Text>
                </Pressable>
                {fieldState.error?.message && (
                  <View className="mt-2" testID="errorMessage">
                    <Text className={`${BodyText.Tiny.Regular} text-red-600`}>
                      {fieldState.error?.message}
                    </Text>
                  </View>
                )}
              </>
            );
          }}
        />
      </View>

      <Spacer height={16} />
      <Pressable
        onPress={handleSubmit(handleSubmitReservation)}
        className=" bg-blue-400 p-3 rounded-lg">
        <Text className={`${BodyText.Medium.Bold} text-center text-white`}>
          Buat Reservasi
        </Text>
      </Pressable>

      <DatePicker
        modal
        mode="date"
        open={isOpenDatePicker}
        date={getValues('date')}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
        onConfirm={value => {
          setValue('date', value);
          setOpenDatePicker(false);
        }}
      />

      <DatePicker
        modal
        mode="time"
        open={isOpenTimePicker}
        date={getValues('time')}
        onCancel={() => {
          setOpenTimePicker(false);
        }}
        onConfirm={value => {
          setValue('time', value);
          setOpenTimePicker(false);
        }}
      />
    </View>
  );
};

export default WidgetInputReservation;
