import axios from 'axios';

const getBookList = async () => {
  const response = await axios.get(
    'https://openlibrary.org/subjects/love.json',
  );

  return response.data;
};

export { getBookList };
