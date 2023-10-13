const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

//     if (randomNumber > 0.7) {
//         alert('Yeah booyyy!');
//     } else {
//         alert('Not great!');
//     }


const testScores = [98, 97, 96, 95, 94];

// for(let i = 0; i < testScores.length; i++) {
//     console.log(testScores[i]);
// }

// for (testScore of testScores) {
//     console.log(testScore);
// }

// testScores.reverse().forEach((testScore)=> {
//     console.log(testScore);
// })  

// for (let i= testScores[4]; i>testScores.length; i--) {
//     console.log(testScores[i]);
// }

const randomNumber2 = Math.random();

if (randomNumber2 && randomNumber > 0.7 || randomNumber || randomNumber2 <= 2) {
    alert('This is awesome');
}