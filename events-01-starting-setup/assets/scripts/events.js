const button = document.querySelector('button');


const onclickHandler = () => { 
    alert('This button was clcked');
}

const anotherOnclickHandler = function () {
    console.log('Was clicked');
}

button.addEventListener('click', onclickHandler);

setTimeout(()=> {
    button.removeEventListener('click', onclickHandler); // if you add a new anonymous function instead of onclick handler, the function will never be removed. 
    //This is because it would be a different function object from the onclickHandler. 
}, 2000)
button.addEventListener('click', anotherOnclickHandler);
//dblclick - double click
//context menu - right click
// button.onclick = onclickHandler;//This button call comes after initialization because arrow functions can't be hoisted. 
// button.onclick = anotherOnclickHandler;// This overrides the previous onclick. To avoid this use addEventListner - it allows you to have mutltiple event listeners. 



