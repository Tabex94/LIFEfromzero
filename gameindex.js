let initialSetUp=[];

const rows=5;
const columns=5;

initialSetUp=[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,0];
//console.log(initialSetUp);

function countfamily(arr_i){
    let famcount=0;
    for(let j=0; j<arr_i.length; j++){
        if(arr_i[j]==1)
        {
            famcount++;
        }
    }

    return famcount;

}

function LifeTurn(arr){
let currentGen=arr;
let count=0;

/* //FIRST COUNT A SINGLE ELEMENT
for(let i=0; i<currentGen.length; i++){

    //We have to count alive neighbors
    if(currentGen[i]==1) //if alive
    {
        count++;
    }
}*/

console.log(count);
return currentGen;
}

//console.log(LifeTurn(initialSetUp));

console.log(countfamily(initialSetUp));

