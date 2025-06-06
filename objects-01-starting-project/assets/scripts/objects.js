const person = {
    'first name': 'Lemis',
    age: 30,
    hobbies: ['cooking', 'coding'],
    greet: function(){
        alert('Hello world')
    },
    1.5: 'Wantam!'//JS automatically coerces this into a string.
}

const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

person.isStudent = true;
delete person.age;

const keyName = 'first name';

console.log(person[keyName]);
// console.log(person[1.5]);
// console.log(person);