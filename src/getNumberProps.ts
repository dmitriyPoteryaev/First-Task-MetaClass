

const getNumberProps = (...obj) => {

  let resultArray: string[];
  if(obj.length===1){
     resultArray = [];
    
  }
  else {
     resultArray = obj[1];
  }
 

    if((typeof (obj[0])!=="object"||obj[0]===null||Array.isArray(obj[0]))) {

        throw Error('INVALID_ARGUMENT')

    }



    Object.keys(obj[0]).forEach((elem,i)=>{

        if(typeof Object.values(obj[0])[i] === "number"){
      
      resultArray.push(elem)
      
        }
      
        if(typeof Object.values(obj[0])[i]==="object"&&Object.values(obj[0])[i]!==null) {
           getNumberProps(Object.values(obj[0])[i], resultArray)
      
        }
      
      
        
      })
   

      return resultArray.sort()

};

export default getNumberProps;
