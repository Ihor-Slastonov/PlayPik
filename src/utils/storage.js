export const getStoredData = key => {
  const storedData = sessionStorage.getItem(key, {});
  if (!storedData) console.log('No data');
  return JSON.parse(storedData);
};

export const updateStoredData = (key, newGame) => {
  let storedData = getStoredData(key);

  if (!storedData) return null;
  storedData.push(newGame);

  sessionStorage.setItem(key, JSON.stringify(storedData));

  return storedData;
};

export const deleteFromStoreData = (key, id) => {
  let storedData = getStoredData(key);
  if (!storedData) return null;

  const newData = storedData.filter(item => item.id !== id);

  sessionStorage.setItem(key, JSON.stringify(newData));
  return newData;
};
