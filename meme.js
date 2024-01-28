
function fun1helper(x)
{
    const newEl=document.createElement('img');
    switch(x)
    {
        case 1:
            newEl.src="d1.jpg";
            break;
        case 2:
            newEl.src="d2.jpg";
            break;
        case 3:
            newEl.src="d3.jpg";
            break;
    }
    newEl.classList.add('memee');
    document.body.appendChild(newEl);
}
function fun1 () // to create a random number
{
    const x= Math.floor(Math.random()* 3)+1;    // math.random gives floating points from 0 to 1 that can
                                                // never be 1 so we floor it to make it an integer
                                                // also *3 makes the range upto 3 and +1 makes sure it doesn't start from 0
                                                // but from 1
    fun1helper(x);
    disableshit();
}
// disable


function fun2 () // to create a random number
{
    
    // const joke=document.createElement('p');
    // let newtext="";
    const x= Math.floor(Math.random()* 3)+1; 
   
    switch(x)
    {
        case 1:
            document.querySelector('.smol').innerHTML=
            `
             <p> 
               Why don't scientists trust atoms?
               Because they make up everything!  aha hahaha 
             </p>
            `
            break;
        case 2:
            document.querySelector('.smol').innerHTML=
            `
             <p> 
             Why don't skeletons fight each other? because they don't have the guts!
             </p>
            `
            break;
        case 3:
            document.querySelector('.smol').innerHTML=
            `
             <p> 
             Why was the math book sad?Because it had too many problems!
             </p>
            `
            break;
    }
    
    
}

function fun4()
{
    document.querySelector(".wis").innerHTML=
    `
    <p class="yo"> I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? </p>
    `
}

function fun5()
{
    document.querySelector(".answer").innerHTML=
    `
    <p class="yo2"> The answer is "Sound!!" </p>
    `
}

