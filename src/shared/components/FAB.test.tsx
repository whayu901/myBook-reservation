import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FAB from './FAB';

describe('FAB Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<FAB title="Button Title" />);
    const button = getByText('Button Title');
    expect(button).toBeDefined();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <FAB title="Button Title" onPress={onPressMock} />,
    );
    const button = getByText('Button Title');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
