export const getStoredData = key => {
  const storedData = sessionStorage.getItem(key, {});
  if (!storedData) return;
  return JSON.parse(storedData);
};

export const getStoredDataById = (key, id) => {
  const storedData = getStoredData(key);
  return storedData.filter(data => data.id === id);
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

export const updateStoreDataItemValue = (key, id, field, value) => {
  let storedData = getStoredData(key);
  if (!storedData) return null;

  const newData = storedData.map(item => {
    if (item.id === id) {
      return { ...item, [field]: value };
    }
    return item;
  });
  sessionStorage.setItem(key, JSON.stringify(newData));
  return newData;
};

export const getLocalStorageData = key => {
  let storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

export const setLocalStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
