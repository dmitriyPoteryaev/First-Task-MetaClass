const sum = (...arg) => {
  if (arg.some((num) => typeof num !== 'number')) {
    throw Error('INVALID_ARGUMENT');
  }
  if (arg.length < 2) {
    throw Error('INVALID_ARGUMENTS_COUNT');
  }

  return arg.reduce((acc, cur) => acc + cur, 0);
};
export default sum;
