//-----------UI GLOBAL CONSTANS-----------

const container=document.querySelector('.container');
const sizeEl=document.querySelector('.size');
const speedEl=document.querySelector('.speed');
let size = sizeEl.value;
let speed=speedEl.value;
let draw = false;
let clicked="";
const randomBtn = document.querySelector('.btnRndm');
const resetBtn = document.querySelector('.btn');
const stepBtn = document.querySelector('.btnStp');
const reloadBtn=document.querySelector('.btnReload')
const startBtn=document.querySelector('.btnStart');
const textLog = document.querySelector('.textlog');
const dataLog = document.querySelector('.datalog');
const stepcount = document.querySelector('steps');
const sizecount = document.querySelector('sizes');
let rows=parseInt(sizeEl.value);
let columns=parseInt(sizeEl.value);
let lastsize=10;
let GenCount=0;
let running=false;
//------GameLogic GLOBAL CONSTANTS
let initialSetUp=[];
let myInterval=0;
clearInterval(myInterval);

initialSetUp=new Array(size*size).fill(0);
console.log(initialSetUp);
console.log(size);

//-----Functions to display info-----
function displaylog(info)
{
    textLog.textContent=info;
}

function displaydatalog(info)
{
    dataLog.textContent=info;
}

function displaysteps(info)
{
    stepcount.textContent=info;
}

function displaysize(info)
{
    sizecount.textContent=info;
}
/*-----------------------GAME LOGIC-----------------*/
/*-----------------------GAME LOGIC-----------------*/



//Setting an initial array

function countfamily(arr_k, k) //takes the array and it's index 2 count living neigboorhood
{
    columns=lastsize;

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

            else if(j==k+1-columns) //third
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

            else if(j==k-1+columns) //sixth
            {
                famcount++;
            }

            else if(j==k+columns) //seventh
            {
                famcount++;
            }

            else if(j==k+1+columns) //seventh
            {
                famcount++;
            }


        }
        
    }

    return famcount;

}

function LifeTurn(arr) //returns the next gen
{
columns=lastsize;
let currentGen=arr;
let nextGen=new Array(columns*columns).fill(0); //Setting a array of zeros
//console.log(nextGen);

for(let l=0; l<columns*columns; l++) //Checking every cell in the moodle order (i)
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


function singleUpdate(j){
initialSetUp[j]=1;
}

function resetLife(){
    initialSetUp=new Array(columns*columns).fill(0);
    displaylog(initialSetUp);

}


/*---------------------GAME LOGIC-----------------*/







//-----------------------UI LOGIC-------------------------------------------------// 
//----------------------UI LOGIC-------------------------------------------------// 


//Populate is only used in the interface logic! remember not no mix with game logic

function setState(cell){
    initialSetUp[cell]=1;
}
//Setting Initial space
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



//Drawing NextGEn
function drawNext(size, texture){
    container.style.setProperty('--size', size)
    for (let i=0; i<size*size; i++) //Adding each pixel in acord of the size
    {
        const div = document.createElement('div');
        div.classList.add('pixel');
        
        if(texture[i]==1){
            div.style.backgroundColor="rgb(255, 255, 255)";
            setState(i);
        }

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
        
        container.appendChild(div);
    }
}

function reset(){
    container.innerHTML='';
    populate(size);
    GenCount=0;
    displaysteps(GenCount);
    displaysize(size);
}

function nextset(err){
    container.innerHTML='';
    drawNext(size, LifeTurn(initialSetUp));
}

function singleStep(){
    lastsize=parseInt(sizeEl.value);
    let buffer=LifeTurn(initialSetUp);
    displaylog(initialSetUp);
    displaydatalog(buffer);
    nextset(); //FOR UI!
    initialSetUp=[];
    initialSetUp=new Array(size).fill(0);
    initialSetUp=buffer;
    GenCount++;
    displaysteps(GenCount);
    displaysize(size);
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
    reset(); //FOR UI!
    resetLife(); //FOR GAME LOGIC!
    lastsize=parseInt(sizeEl.value);
})

randomBtn.addEventListener('click', function(){
    displaylog(initialSetUp);
})

stepBtn.addEventListener('click', function(){
    singleStep();
    
})

reloadBtn.addEventListener('click',function(){
    location.reload();
})

startBtn.addEventListener('click', function(){
    if(running==false){
        running=true;
        
        startBtn.textContent="Pause";
        myInterval=setInterval(singleStep, 1000/speed);

    }

    else if(running==true){
        running=false;
        startBtn.textContent="Start";
        clearInterval(myInterval);
    }

    

        
    
})




/*
sizeEl.addEventListener('keyup', function(){
    size=sizeEl.value;
    lastsize=parseInt(sizeEl.value); 
    columns=lastsize;
    reset();
    resetLife();
    displaysize(size);

})*/

sizeEl.addEventListener('change', function(){
    
    size=sizeEl.value;
    displaysize(size);
    lastsize=parseInt(sizeEl.value); 
    columns=lastsize;
    reset();
    resetLife();;
       

})

sizeEl.addEventListener('mousedown', function(){
    size=sizeEl.value;
    displaysize(size);
    lastsize=parseInt(sizeEl.value); 
    columns=lastsize;
    reset();
    resetLife();
    
})

speedEl.addEventListener('change', function(){
    speed=speedEl.value;
    if(running==true){
        clearInterval(myInterval);
        myInterval=setInterval(singleStep, 1000/speed);       
    }
})



populate(size);

