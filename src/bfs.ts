const bfs = (obj123) => {

  if(typeof obj123 !== 'object' || obj123===null ) {

    throw Error('INVALID_ARGUMENT')
}
  let resultArray: any = [];
  const workObj = JSON.parse(JSON.stringify(obj123));

  if (resultArray.length === 0) {
    resultArray.push("A");
  }

  // базис данного дерева. Аналог рута в небинарном или бинарном дереве
  let basis: any = [resultArray[resultArray.length - 1]];

  // данную задачу реализуем без построения дерева и сразу ретёрним массив
  while (basis.length!==0) {
    if (Object.keys(workObj).length === resultArray.length) {
      return resultArray;
    }

    if (basis.length !== 0) {
      let beetwen: any = [];

      basis.forEach((element) => {
        resultArray = [...resultArray, ...workObj[element]];

        beetwen = [...beetwen, ...workObj[element]];
      });

      basis = [...beetwen];

      beetwen = [];
    }
  }

  return resultArray; 
};

export default bfs;
