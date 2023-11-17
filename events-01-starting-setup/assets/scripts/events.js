const button = document.querySelector('button');


const onclickHandler = () => { 
    alert('This button was clcked');
}

const anotherOnclickHandler = function () {
    console.log('');
}

button.onclick = onclickHandler;



