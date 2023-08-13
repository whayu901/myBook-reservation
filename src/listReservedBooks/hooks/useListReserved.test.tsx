import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useGlobalContext } from '../../shared/context/GlobalStateContext'; // You need to provide a mock for this context
import useListReserved from './useListReserved';

// Provide a mock implementation of useGlobalContext
jest.mock('../../shared/context/GlobalStateContext', () => ({
  useGlobalContext: jest.fn(),
}));

describe('useListReserved Hook', () => {
  it('should return initial values', () => {
    // Mock implementation of useGlobalContext
    (useGlobalContext as jest.Mock).mockReturnValue({
      globalValue: [],
      setGlobalValue: jest.fn(),
    });

    const { result } = renderHook(() => useListReserved());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.dataListReserved).toEqual([]);
    expect(result.current.isModalSuccess).toBe(false);
    expect(result.current.dataSelectedDetailReserved).toEqual({
      listBooks: [],
    });
    expect(result.current.snapPoints).toEqual(['100%']);
  });

  it('should update dataSelectedDetailReserved', () => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      globalValue: [],
      setGlobalValue: jest.fn(),
    });

    const { result } = renderHook(() => useListReserved());

    act(() => {
      result.current.setDataSelectedDetailReserverd({
        listBooks: [
          { title: 'Book 1', authors: [], cover_edition_key: '3232' },
        ],
      });
    });

    expect(result.current.dataSelectedDetailReserved).toEqual({
      listBooks: [{ title: 'Book 1', authors: [], cover_edition_key: '3232' }],
    });
  });
});
