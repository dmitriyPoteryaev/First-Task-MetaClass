const multiply = (x) => {

   
    if(typeof x !== 'number') {

        throw Error('INVALID_ARGUMENT') 
     }

    return function(y){
        if(typeof y !== 'number') {

            throw Error('INVALID_ARGUMENT') 
         }

        return x*y


    }

};

export default multiply;
