import React from 'react';
import { render } from '@testing-library/react-native';
import Spacer from './Spacer';

describe('Spacer Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Spacer />);
    const spacerElement = getByTestId('spacer');
    expect(spacerElement).toBeDefined();
  });

  it('applies custom styles', () => {
    const customStyle = { width: 100, height: 20, backgroundColor: 'red' };
    const { getByTestId } = render(<Spacer {...customStyle} />);
    const spacerElement = getByTestId('spacer');
    const computedStyle = spacerElement.props.style;

    expect(computedStyle).toEqual(expect.objectContaining(customStyle));
  });
});
