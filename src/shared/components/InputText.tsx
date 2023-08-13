import React, { memo, useCallback, useMemo, useState } from 'react';
import { View, TextInput, Pressable, TextInputProps, Text } from 'react-native';

import { useSharedValue, withTiming } from 'react-native-reanimated';

import colors from '../themes/colors';
import { BodyText } from '../themes/typhography';

type InputTextProps = {
  label?: string;
  errorMessage?: string;
} & TextInputProps;

const InputText: React.FC<InputTextProps> = ({
  label,
  errorMessage,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const isHaveErrorMessage = useMemo(() => {
    return errorMessage && errorMessage !== '';
  }, [errorMessage]);

  const animationFocusProgress = useSharedValue(rest.value ? 1 : 0);

  const handleFocus = useCallback(
    (isFocus: boolean) => {
      setFocus(isFocus);

      if (isFocus) {
        animationFocusProgress.value = withTiming(1);
      } else if (!rest?.value?.length) {
        // only animate to 0 if the value is empty and not focused
        animationFocusProgress.value = withTiming(0);
      }
    },
    [animationFocusProgress, rest?.value?.length],
  );

  return (
    <View>
      <View
        className={`${
          focus
            ? 'border-earthGreen-40 border'
            : isHaveErrorMessage
            ? 'border-red-600 border'
            : 'border-neutral-40 border'
        } flex flex-row items-center rounded-lg border px-4`}>
        <View>
          <TextInput
            testID="InputText"
            {...rest}
            placeholderTextColor={colors.neutral[60]}
            onFocus={e => {
              handleFocus(true);
              rest?.onFocus?.(e);
            }}
            onBlur={e => {
              handleFocus(false);
              rest?.onBlur?.(e);
            }}
            className="pb-[14px] pr-4 pt-[13px]"
          />
        </View>
      </View>

      {!!isHaveErrorMessage && (
        <View className="mt-2" testID="errorMessage">
          <Text className={`${BodyText.Tiny.Regular} text-red-600`}>
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

export default memo(InputText);
