const intersection = (...arg) => {
  if (arg.length < 2) {
    throw Error('INVALID_ARGUMENTS_COUNT');
  }
  if (!arg.every((array) => Array.isArray(array))) {
    throw Error('INVALID_ARGUMENT');
  }
  if (arg.some((array) => array.some((elem) => typeof elem !== 'number'))) {
    throw Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const set = new Set();

  const [firtsArray, secondArray] = arg;

  firtsArray.forEach((element) => {
    if (secondArray.some((elem) => elem === element)) {
      set.add(element);
    }
  });

  return Object.values(Object.fromEntries(set.entries()));
};

export default intersection;
