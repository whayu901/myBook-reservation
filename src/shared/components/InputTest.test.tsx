import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputText from './InputText';

describe('InputText Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<InputText testID="InputText" />);
    const inputElement = getByTestId('InputText');
    expect(inputElement).toBeDefined();
  });

  it('changes focus and triggers onFocus/onBlur', () => {
    const onFocusMock = jest.fn();
    const onBlurMock = jest.fn();

    const { getByTestId } = render(
      <InputText
        testID="InputText"
        onFocus={onFocusMock}
        onBlur={onBlurMock}
      />,
    );

    const inputElement = getByTestId('InputText');
    fireEvent(inputElement, 'focus');
    expect(onFocusMock).toHaveBeenCalledTimes(1);

    fireEvent(inputElement, 'blur');
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it('displays error message', () => {
    const { getByTestId, getByText } = render(
      <InputText testID="InputText" errorMessage="This is an error message" />,
    );

    const errorMessage = getByText('This is an error message');
    expect(errorMessage).toBeDefined();
  });
});
