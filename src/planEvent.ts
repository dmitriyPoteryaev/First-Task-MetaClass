const planEvent = (cb, time) => {
  if (typeof cb !== 'function') {
    throw Error('INVALID_ARGUMENT');
  }
  if (typeof time !== 'number') {
    throw Error('INVALID_ARGUMENT');
  }
  if (time <= 0) {
    return new Promise(function (resolve, reject) {
      const res = cb();

    
        resolve;
        return res
     
    });
  }

  return new Promise(function (resolve, reject) {
    
    setTimeout(() => {
        const res = cb();
        resolve;
        return res
      
    }, time);
  });
};

export default planEvent;
