export const getBooks = async () => {
  const response = await fetch(process.env.BASE_URL).then(res => res.json());
  return response;
};

export const getBookDetails = async (query) => {
  const response = await fetch(`${process.env.BASE_URL}?q=${query}`).then(res => res.json());
  return response;
};
