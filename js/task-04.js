let counterValue = 0;
const decrementBtn=document.querySelector('button[data-action ="decrement"]');
const incrementBtn=document.querySelector('button[data-action ="increment"]');
 const decrement=()=>{counterValue -=1;
 console.log(counterValue);
 document.querySelector("#value").innerHTML=counterValue;};
 const increment=()=>{counterValue +=1;
 console.log(counterValue);
 document.querySelector("#value").innerHTML=counterValue;};
  

 decrementBtn.addEventListener('click', decrement);
 incrementBtn.addEventListener('click', increment);