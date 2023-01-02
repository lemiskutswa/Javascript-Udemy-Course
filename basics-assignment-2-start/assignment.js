const task3Element = document.getElementById('task-3');

function outputAlert() {
    alert('hello world!');
}

function outputName(name) {
    alert('Hello ' + name);
}

outputName('John');

task3Element.addEventListener('click', outputAlert);

function threeStrings(name, verb, noun) {
    const result = name + verb + noun;
    return result;
}

const combinedStrings = threeStrings('John ', 'is ', 'coming');
alert(combinedStrings);