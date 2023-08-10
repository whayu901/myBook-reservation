import { useQuery } from '@tanstack/react-query';
import { getBookList } from '../fetchers/getBookList';

const useQueryBookList = () => {
  return useQuery(['book/list'], () => {
    return getBookList();
  });
};

export default useQueryBookList;
