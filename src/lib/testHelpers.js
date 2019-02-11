export const getAction = (type, params) => ({ type, ...params });

export const getNext = (saga, ...rest) => {
  const generator = saga(...rest);
  return (...args) => generator.next(...args).value;
};
