let initialSetUp=[];


const rows=5;
const columns=5;
const length=5;
let toCheck=12; //Change to check a single pixel


initialSetUp=[1, 0, 0, 0, 0,
     0, 0, 1, 0, 0, 
     0, 0, 1, 0, 0, 
     0, 0, 1, 0, 0, 
     0, 0, 0, 0,0];


console.log(initialSetUp);

function countfamily(arr_i, i) //takes the array and it's index 2 count living neigboorhood
{
    let famcount=0;
    for(let j=0; j<arr_i.length; j++){
        //Searching every liv cll that'ts not the central
        if(arr_i[j]==1)
        {
            if(j==i-1-columns ) //firstneigh
            {
                famcount++;
            }

            else if(j==i-columns) //second
            {
                famcount++;
            }

            else if(j==i-columns+1) //third
            {
                famcount++;
            }

            else if(j==i-1) //fourth
            {
                famcount++;
            }

            else if(j==i+1) //fifth
            {
                famcount++;
            }

            else if(j==i+columns-1) //sixth
            {
                famcount++;
            }

            else if(j==i+columns) //seventh
            {
                famcount++;
            }

            else if(j==i+columns+1) //seventh
            {
                famcount++;
            }


        }
        
    }

    return famcount;

}

/* //FUNCTION TO COUNT NEIGHBOUR READY
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

console.log(countfamily(initialSetUp, toCheck));
