const pow = (...arg) => {
  if (arg.some((num) => typeof num !== 'number')) {
    throw Error('INVALID_ARGUMENT');
  }
  const [base, exponent] = arg;

  if (arg.length === 1) {
    return function (exponent) {
      if (typeof exponent !== 'number') {
        throw Error('INVALID_ARGUMENT');
      }

      return base ** exponent;
    };
  }

  if (exponent === 0) {
    return 1;
  } else {
    const addendum = exponent < 0 ? 1 : -1;

    if (addendum > 0) {
      return (1 / base) * pow(base, exponent + addendum);
    } else {
      return base * pow(base, exponent + addendum);
    }
  }
};

export default pow;
