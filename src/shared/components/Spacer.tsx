import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type SpacerProps = StyleProp<ViewStyle>;

const Spacer = (props: SpacerProps) => <View style={props} testID="spacer" />;

export default Spacer;
