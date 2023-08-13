import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { GlobalProvider, useGlobalContext } from './GlobalStateContext';
import { Text, Pressable } from 'react-native';

describe('GlobalContext Provider', () => {
  it('should provide globalValue and setGlobalValue', () => {
    const MockComponent = () => {
      const { globalValue, setGlobalValue } = useGlobalContext();
      return (
        <>
          <Text>{globalValue}</Text>
          <Pressable onPress={() => setGlobalValue('new value')}>
            <Text>Set Value</Text>
          </Pressable>
        </>
      );
    };

    const { getByText } = render(
      <GlobalProvider>
        <MockComponent />
      </GlobalProvider>,
    );

    fireEvent.press(getByText('Set Value'));
    expect(getByText('new value')).toBeTruthy(); // Updated value
  });
});
