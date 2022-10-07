let initialSetUp=[];
const rows=5;
const columns=5;
let toCheck=17;

//Setting an initial array
initialSetUp=[0, 0, 0, 0, 0,
     1, 1, 1, 0, 0, 
     0, 0, 0, 0, 0, 
     0, 0, 0, 1, 1, 
     0, 0, 0, 1, 0];



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

function LifeTurn(arr) //returns the next gen
{
let currentGen=arr;
let nextGen=new Array(25).fill(0); //Setting a array of zeros
//console.log(nextGen);

for(let i=0; i<currentGen.length; i++) //Checking every cell in the moodle order (i)
{
    let neighbours=countfamily(currentGen, i); //Getting number of neighbours for this cell
    if(currentGen[i]==1) //Any live cell (1-3)...
    {
        if(neighbours>3)//3.- with more than three live neighbours dies, as if by overpopulation.
        {
            nextGen[i]=0; //Dies
        }

        else if(neighbours<2) //1.- with fewer than two live neighbours dies, by underpopulation
        {
            nextGen[i]=0; //dies
        }

        else if(2<=neighbours<=3) //2.- with two or three live neighbours lives on to the next generation.
        {
            nextGen[i]=1; //lives
        }

    }

    else if(currentGen[i]==0 ) //4.- any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    {
        if(neighbours==3)
        {
            nextGen[i]=1; //Become alive
        }

        
    }

}
return nextGen;
}


//console.log(initialSetUp);
console.log(LifeTurn(initialSetUp));
console.log(toCheck);
console.log(initialSetUp[toCheck]);

console.log(countfamily(initialSetUp, toCheck));

let netstr=[]
netstr=LifeTurn(initialSetUp);
console.log(netstr[toCheck]);
