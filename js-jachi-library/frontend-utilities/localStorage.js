export const getCached = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const setCached = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* 

Usage

setCached( 'user-color-scheme', 'dark' );

getCached( 'user-color-scheme' );

*/
