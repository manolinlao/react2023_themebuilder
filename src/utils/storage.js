export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
