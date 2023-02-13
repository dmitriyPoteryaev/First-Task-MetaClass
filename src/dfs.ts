const dfs = (obj) => {

    if(typeof obj !== 'object' || obj===null ) {

        throw Error('INVALID_ARGUMENT')
    }
    const resultArray : any[]= [];
    const workObj = JSON.parse(JSON.stringify(obj));
  
    if (resultArray.length === 0) {
      resultArray.push(Object.keys(workObj)[0]);
    }
  
    // базис данного дерева. Аналог рута в небинарном или бинарном дереве
    let basis = resultArray[resultArray.length - 1];
  
  
    // данную задачу реализуем без построения дерева и сразу ретёрним массив
    while (basis) {
     let dfwef : any =  Object.values(workObj)
      if(dfwef[0].length===0){
        return resultArray; 
  
      }
      
      if (workObj[basis].length !== 0) {
        resultArray.push(workObj[basis][0]);
  
        basis = resultArray[resultArray.length - 1];
      } else {
        for (let i = 0; i < Object.keys(workObj).length; i++) {
            let arrVal : any=  Object.values(workObj)[i];
          if (
            arrVal.some((elem) => elem === basis)
          ) {
            workObj[Object.keys(workObj)[i]].splice(0,1)
  
            basis = Object.keys(workObj)[i];
          }
        }
      }
    }

    return 

};

export default dfs;
