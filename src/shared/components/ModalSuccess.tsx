import React, { memo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

import MyLottie from '../../../assets/lottie';
import { BodyText } from '../themes/typhography';
import Spacer from './Spacer';

interface ModalSuccessProps {
  isVisible: boolean;
  message?: string;
  textButton?: string;
  onDismis?: () => void;
}

const ModalSuccess = ({
  isVisible,
  message,
  textButton,
  onDismis,
}: ModalSuccessProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver={true}>
      <View className="items-center self-center justify-center">
        <View className="bg-white px-[30px] py-5 rounded-lg">
          <LottieView
            source={MyLottie.successCheck}
            style={{ height: 120, width: 120, alignSelf: 'center' }}
            autoPlay
            loop
          />
          <Spacer height={16} />
          <View>
            <Text className={`${BodyText.Medium.Regular} text-center`}>
              {message}
            </Text>
          </View>
          <Spacer height={16} />
          <Pressable onPress={onDismis}>
            <Text
              className={`${BodyText.Medium.Bold} text-center text-neutral-70`}>
              {textButton}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalSuccess);
