
let i = 0;

setTimeout(()=> {console.log(i)}, 100); 

////assume that the time to execute this function is > 100ms
for(let j=0; j<1000000000; j++){
    i++;
}


// Ans 3: the setTime fucntion will run after the entire code execution i.e "after the loop"

// and the alert will show 100000000