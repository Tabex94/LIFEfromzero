let initialSetUp=[];
const rows=5;
const columns=5;
let toCheck=7;

//Setting an initial array
initialSetUp=[0, 0, 0, 0, 0,
     0, 0, 1, 0, 0, 
     0, 0, 1, 0, 0, 
     0, 0, 1, 0, 0, 
     0, 0, 0, 0, 0];



function countfamily(arr_k, k) //takes the array and it's index 2 count living neigboorhood
{
    let famcount=0;
    for(let j=0; j<arr_k.length; j++){
        //Searching every liv cll that'ts not the central
        if(arr_k[j]==1)
        {
            if(j==k-1-columns ) //firstneigh
            {
                famcount++;
            }

            else if(j==k-columns) //second
            {
                famcount++;
            }

            else if(j==k-columns+1) //third
            {
                famcount++;
            }

            else if(j==k-1) //fourth
            {
                famcount++;
            }

            else if(j==k+1) //fifth
            {
                famcount++;
            }

            else if(j==k+columns-1) //sixth
            {
                famcount++;
            }

            else if(j==k+columns) //seventh
            {
                famcount++;
            }

            else if(j==k+columns+1) //seventh
            {
                famcount++;
            }


        }
        
    }

    return famcount;

}

function LifeTurn(arr) //returns the next gen
{
let currentGen=arr;
let nextGen=new Array(rows*columns).fill(0); //Setting a array of zeros
//console.log(nextGen);

for(let l=0; l<currentGen.length; l++) //Checking every cell in the moodle order (i)
{
    let neighbours=countfamily(currentGen, l); //Getting number of neighbours for this cell
    if(currentGen[l]==1) //Any live cell (1-3)...
    {
        if(neighbours>3)//3.- with more than three live neighbours dies, as if by overpopulation.
        {
            nextGen[l]=0; //Dies
        }

        else if(neighbours<2) //1.- with fewer than two live neighbours dies, by underpopulation
        {
            nextGen[l]=0; //dies
        }

        else if(2<=neighbours<=3) //2.- with two or three live neighbours lives on to the next generation.
        {
            nextGen[l]=1; //lives
        }

    }

    else if(currentGen[l]==0 ) //4.- any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    {
        if(neighbours==3)
        {
            nextGen[l]=1; //Become alive
        }

        
    }

}
return nextGen;
}


//console.log(initialSetUp);
console.log(LifeTurn([0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 
    0, 0, 1, 0, 0, 
    0, 0, 1, 1, 0, 
    0, 0, 0, 0, 0]));
console.log(toCheck);
console.log(initialSetUp[toCheck]);

console.log(countfamily(initialSetUp, toCheck));

let netstr=[]
netstr=LifeTurn(initialSetUp);
console.log(netstr[toCheck]);

let actual=[];
    actual=[0, 0, 0, 0, 0,
        0, 0, 1, 0, 0, 
        0, 0, 1, 0, 0, 
        0, 0, 1, 0, 0, 
        0, 0, 0, 0, 0];
        actual=LifeTurn(actual);
console.log(actual);

