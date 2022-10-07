//-----------UI GLOBAL CONSTANS-----------

const container=document.querySelector('.container');
const sizeEl=document.querySelector('.size');
let size = sizeEl.value;
let draw = false;
let clicked="";
const randomBtn = document.querySelector('.btnRndm');
const resetBtn = document.querySelector('.btn');
const textLog = document.querySelector('.textlog');
const dataLog = document.querySelector('.datalog');

//------GameLogic GLOBAL CONSTANTS

let initialSetUp=[];
let rows=size;
let columns=size;


//Functions to display info
function displaylog(info)
{
    textLog.textContent=info;
}

function displaydatalog(info)
{
    dataLog.textContent=info;
}

/*-----------------------GAME LOGIC-----------------*/
/*-----------------------GAME LOGIC-----------------*/



//Setting an initial array

initialSetUp=new Array(25).fill(0);




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

function LifeTurn(arr)
{
let currentGen=arr;
let nextGen=new Array(25).fill(0); //Setting a array of zeros
console.log(nextGen);

for(let i=0; i<currentGen.length; i++) //Checking every cell in the moodle order (i)
{
    let neighbours=countfamily(currentGen, i); //Getting number of neighbours for this cell
    if(currentGen[i]==1) //Any live cell (1-3)...
    {
        if(neighbours<2) //1.- with fewer than two live neighbours dies, by underpopulation
        {
            nextGen[i]=0; //dies
        }

        else if(neighbours==2 || neighbours==3) //2.- with two or three live neighbours lives on to the next generation.
        {
            nextGen[i]=1; //lives
        }

        else if(neighbours>3)//3.- with more than three live neighbours dies, as if by overpopulation.
        {
            nextGen[i=0]; //Dies
        }
    }

    else if(currentGen[i]==0 && neighbours==3) //4.- any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    {
        nextGen[i]=1; //Become alive
    }

}
return nextGen;
}

function singleUpdate(j){
initialSetUp[j]=1;
}

function resetLife(){
    initialSetUp=new Array(rows*columns).fill(0);
    displaydatalog(initialSetUp);

}


/*---------------------GAME LOGIC-----------------*/







//-----------------------UI LOGIC-------------------------------------------------// 
//----------------------UI LOGIC-------------------------------------------------// 


//Populate is only used in the interface logic! remember not no mix with game logic

function setState(cell){
    initialSetUp[cell]=1;
    displaylog(initialSetUp);
}

function populate(size){
    container.style.setProperty('--size', size)
    for (let i=0; i<size*size; i++) //Adding each pixel in acord of the size
    {
        const div = document.createElement('div');
        div.classList.add('pixel');        

        div.addEventListener('mouseover', function(){
            if(!draw){return;}
            div.style.backgroundColor="rgb(255, 255, 255)";
            displaydatalog(i); //i'm showing the pixel I clicked
            setState(i);

        });

        div.addEventListener('mousedown', function(){
            div.style.backgroundColor="rgb(255, 255, 255)";
            displaydatalog(i);
            setState(i);
        });
        
        /*
        div.addEventListener('click', function(){
            div.style.backgroundColor="rgb(255, 255, 255)";
            displaydatalog(i);
            setState(i);
        })*/


        container.appendChild(div);
    }

}

function reset(){
    container.innerHTML='';
    populate(size);
}



//------------------UI LOGIC-------------------------------------------------// 
 

window.addEventListener("mousedown", function(){
    draw=true;

});

window.addEventListener("mouseup", function(){
    draw=false;

});

//I have to reset both grid and logic buffer
resetBtn.addEventListener('click', function(){
    reset();
    resetLife();
})

randomBtn.addEventListener('click', function(){
    displaylog(initialSetUp);
})


/*
sizeEl.addEventListener('keyup', function(){
    size=sizeEl.value;
    rows=size;
    columns=size;
    reset();
    resetLife();

})*/

sizeEl.addEventListener('change', function(){
    size=sizeEl.value;
    rows=size;
    columns=size;
    reset();
    resetLife();
})


populate(size);

