// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // // const moreNumbers = Array(5, 2);
// // // console.log(moreNumbers);

// // // const yetMoreNumbers = Array.of(1, 2);
// // // console.log(yetMoreNumbers);

// // const listItems = document.querySelectorAll('li');
// // console.log(listItems);

// // const arrayListItems = Array.from(listItems);
// // console.log(arrayListItems);

// const hobbies = ['cooking', 'cleaning', 'dancing', 'running'];

// hobbies.push('jumping');
// hobbies.unshift('coding');

// console.log(hobbies);

// hobbies.pop()

// console.log(hobbies)

// hobbies.shift();

// console.log(hobbies);

// hobbies.splice(2, 0, 'Sangria');

// console.log(hobbies);

const testScores = [2.5, 5, 10, 15, 3.5];

newTestScores = testScores;

testScores.push(1000);


oldTestScores = testScores.slice();

testScores.push(999);

const conc = testScores.concat([55, 66]);

console.log(conc.indexOf(55));

const personData = [{name: 'Max'}, {name: 'Manuel'}];

console.log(personData.indexOf({name: 'Max'}));

const manuel = personData.find((person, index, persons) => {
    return person.name === 'Manuel';
})

console.log(manuel);

const maxIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Max';
});

console.log(maxIndex);
