import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import dayjs from 'dayjs'; // You may need to provide a mock for this if needed
import WidgetDetailReservedBook from './WidgetDetailReservedBook';
import { DataReservedBook } from '../definitions/types';

describe('WidgetDetailReservedBook Component', () => {
  const mockData: DataReservedBook = {
    name: 'John Doe',
    date: '2023-08-15',
    time: '14:30',
    listBooks: [
      {
        title: 'Book 1',
        authors: [{ name: 'Author 1', key: '' }],
        cover_edition_key: '123456',
      },
    ],
  };

  it('should render correctly with provided data', () => {
    const { getByText } = render(
      <WidgetDetailReservedBook
        data={mockData}
        onClickFinishedReservedBook={() => {}}
      />,
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText(dayjs('2023-08-15').format('DD MMM YYYY'))).toBeTruthy();
    expect(getByText('Book 1')).toBeTruthy();
    expect(getByText('Author 1')).toBeTruthy();
    expect(getByText('123456')).toBeTruthy();
    expect(getByText('Selesai')).toBeTruthy();
  });

  it('should call onClickFinishedReservedBook when "Selesai" is pressed', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <WidgetDetailReservedBook
        data={mockData}
        onClickFinishedReservedBook={handleClick}
      />,
    );

    fireEvent.press(getByText('Selesai'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
