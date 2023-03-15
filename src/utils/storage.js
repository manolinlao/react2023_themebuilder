// graba en localStorage un key,value
export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

// recupera del localStorage
export const getFromLS = (key) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};
