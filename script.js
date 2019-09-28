const question = document.getElementById('question');
const answer = document.getElementById('answer');
const correction = document.getElementById('correction');
const enterButton = document.getElementById('enterButton');
const endButton = document.getElementById('endButton');

import {
    test,
    normalise
} from '/module.js';

var news = [];
var mistakes = [];
var reviews = [];
var counter = 0;
var news_counter = 0;
var mistakes_counter = 0;
var reviews_counter = 0;




var testing = JSON.parse(localStorage.getItem('data'));

test(phrases[counter]);



enterButton.onclick = () => {
    if (normalise(answer.value) === normalise(phrases[counter].value)) {
        correction.innerHTML = "yes!";
        reviews.push(phrases[counter]);
        counter++;
        test(phrases[counter]);
    } else {
        correction.innerHTML = phrases[counter].value;
        mistakes.push(phrases[counter]);
        counter++;
        setTimeout(function () {
            test(phrases[counter])
        }, 5000);
    }
    console.log(mistakes);
    console.log(reviews);
}

endButton.onclick = () => {
    localStorage.setItem('data', JSON.stringify(reviews));
}



answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        enterButton.click();
    }
});
