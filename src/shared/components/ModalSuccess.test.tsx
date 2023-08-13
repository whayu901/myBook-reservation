import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ModalSuccess from './ModalSuccess';

describe('ModalSuccess Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ModalSuccess isVisible={true} message="Success!" textButton="Dismiss" />,
    );

    const messageElement = getByText('Success!');
    const buttonElement = getByText('Dismiss');

    expect(messageElement).toBeDefined();
    expect(buttonElement).toBeDefined();
  });
});
