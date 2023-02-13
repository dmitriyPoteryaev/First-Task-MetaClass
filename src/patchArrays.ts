// @ts-nocheck

const patchArrays = (): void => {

    Array.prototype.count = function(){

        const arr = this;

        return arr.length

    }

    Array.prototype.insert = function(index : number, elem : any){
        const arr = this;

        if(typeof index !== 'number'){

            throw Error('INVALID_ARGUMENT')
        }

        if(index<0){

            return [elem,...arr]
        }

    

         arr.splice(index, 0, elem);

        return  arr;

              
   

    }

    Array.prototype.remove = function(elemGlobal : any){
        const arr = this;

        if(!arr.some(elem=>elem===elemGlobal)) {

            return arr
        }
const index  = arr.indexOf(elemGlobal)


arr.splice(index, 1)

        return arr;
   
    }

};

export default patchArrays;
