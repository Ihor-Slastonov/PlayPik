export const getStoredData = key => {
  const storedData = sessionStorage.getItem(key, {});
  if (!storedData) console.log('No data');
  return JSON.parse(storedData);
};

export const updateStoredData = (key, newGame) => {
  let storedData = getStoredData(key);

  console.log(storedData);
  if (!storedData) return null;
  storedData.push(newGame);

  sessionStorage.setItem(key, JSON.stringify(storedData));

  return storedData;
};
