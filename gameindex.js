let initialSetUp=[];

const rows=5;
const columns=5;

initialSetUp=[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0];
//console.log(initialSetUp);

function countfamily(arr_i){

}

function LifeTurn(arr){
let currentGen=arr;
let count=0;
for(let i=0; i<currentGen.length; i++){

    //We have to count alive neighbors
    if(currentGen[i]==1) //if alive
    {
        count++;
    }
}

console.log(count);
return currentGen;
}

console.log(LifeTurn(initialSetUp));
