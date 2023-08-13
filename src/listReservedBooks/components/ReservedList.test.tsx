import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ReservedList from './ReservedList';
import { DataReservedBook } from '../definitions/types';

describe('ReservedList Component', () => {
  const mockData: DataReservedBook[] = [
    {
      name: 'John Doe',
      date: '2023-08-15',
      time: '14:30',
      listBooks: [],
    },
    {
      name: 'Jane Smith',
      date: '2023-08-16',
      time: '16:00',
      listBooks: [],
    },
  ];

  it('should render list items correctly', () => {
    const { getByText } = render(
      <ReservedList data={mockData} onClickDetail={() => {}} />,
    );

    mockData.forEach(item => {
      expect(getByText(item.name)).toBeTruthy();
    });
  });

  it('should call onClickDetail when an item is pressed', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ReservedList data={mockData} onClickDetail={handleClick} />,
    );

    fireEvent.press(getByText(mockData[0].name));
    fireEvent.press(getByText(mockData[1].name));

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).toHaveBeenCalledWith(mockData[0]);
    expect(handleClick).toHaveBeenCalledWith(mockData[1]);
  });

  it('should display empty component when data is empty', () => {
    const { getByText } = render(
      <ReservedList data={[]} onClickDetail={() => {}} />,
    );
    expect(getByText('Belum Ada Data')).toBeTruthy();
  });
});
