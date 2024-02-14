const cloneDeepCopy = (data) => {
  if (typeof data !== 'object' || data === undefined || data === null) {
    return data;
  }

  if (data instanceof Date) {
    return new Date(data);
  }

  if (data instanceof RegExp) {
    return new RegExp(data);
  }

  if (data instanceof Map) {
    const copyMap = new Map();
    data.forEach((value, key) => {
      copyMap.set(key, cloneDeepCopy(value));
    });
    return copyMap;
  }

  if (data instanceof Set) {
    const copySet = new Set();
    data.forEach((value) => {
      copySet.add(cloneDeepCopy(value));
    });
    return copySet;
  }

  if (Array.isArray(data)) {
    const copyArray = [];
    data.forEach((value, index) => {
      copyArray[index] = cloneDeepCopy(value);
    });
    return copyArray;
  }

  const result = {};

  Object.keys(data).forEach((key) => {
    result[key] = cloneDeepCopy(data[key]);
  });

  return result;
};

export default cloneDeepCopy;
