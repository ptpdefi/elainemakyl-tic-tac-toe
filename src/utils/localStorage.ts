export const setLocalItem = (key: string, value: any) => {
  global.window?.localStorage?.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key: string) => {
  const itemStr = global.window?.localStorage?.getItem(key);

  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  return item;
};

export const removeLocalItem = (key: string) => {
  global.window?.localStorage.removeItem(key);
};
