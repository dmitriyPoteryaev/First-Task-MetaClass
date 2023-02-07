const sort = (srt) => {
  if (typeof srt !== 'string') {
    throw Error('INVALID_ARGUMENT');
  }


  return srt.split(' ').reduce((acc, cur, index) =>{
    if(index===0){
      return acc + cur.toLowerCase().split('').sort().join('')
    
    } else {
    
      return acc + ' ' + cur.toLowerCase().split('').sort().join('')
    }
    
     }  , '')
};

export default sort;
