const question = document.getElementById('question');
const answer = document.getElementById('answer');
const correction = document.getElementById('correction');
const enterButton = document.getElementById('enterButton');
const startbtn = document.getElementById('startbtn');

var lessonContent = [];
var counter = 0;
var EOSRemoveFromLearn = [];
var EOSRemoveFromReview = [];
var EOSRemoveFromMistake = [];
var EOSAddToReview = [];
var EOSAddToMistake = [];


import {
    normalise
} from '/module.js';

startbtn.onclick = () => {


    const url = "http://learnfinnish.xyz:3000/lesson";
    fetch(url)
        .then((res) => res.json())
        .then(function (data) {
            lessonContent = [...data];
            counter = 0;
            test(lessonContent[counter]);

        })

}


var test = (content) => {

    question.innerHTML = content.french;
    answer.value = "";
    correction.innerHTML = "";

};


var endOfSession = () => {
    console.log("End of session");
    console.log(EOSRemoveFromLearn);
    console.log(EOSRemoveFromReview);
    console.log(EOSRemoveFromMistake);
    console.log(EOSAddToReview);
    console.log(EOSAddToMistake);
}

enterButton.onclick = () => {
    if (normalise(answer.value) === normalise(lessonContent[counter].finnish)) {
        correction.innerHTML = "yes!";

        if (lessonContent[counter].score === 0) {
            lessonContent[counter].score = 4;
            EOSRemoveFromLearn.push(lessonContent[counter]);
            EOSAddToReview.push(lessonContent[counter]);
        } else if (lessonContent[counter].score === 4) {
            EOSRemoveFromReview.push(lessonContent[counter]);
            EOSAddToReview.push(lessonContent[counter]);
        } else if (lessonContent[counter].score === 1) {
            lessonContent[counter].score = 4;
            EOSRemoveFromMistake.push(lessonContent[counter]);
            EOSAddToReview.push(lessonContent[counter]);
        } else {
            lessonContent[counter].score--;
            EOSRemoveFromMistake.push(lessonContent[counter]);
            EOSAddToMistake.push(lessonContent[counter]);
        }

        counter++;
        if (counter > lessonContent.length) {
            endOfSession();
        } else {
            test(lessonContent[counter]);
        }

    } else {

        correction.innerHTML = lessonContent[counter].finnish;

        if (lessonContent[counter].score === 0) {
            lessonContent[counter].score = 3;
            EOSRemoveFromLearn.push(lessonContent[counter]);
            EOSAddToMistake.push(lessonContent[counter]);
        } else if (lessonContent[counter].score === 4) {
            lessonContent[counter].score = 3;
            EOSRemoveFromReview.push(lessonContent[counter]);
            EOSAddToMistake.push(lessonContent[counter]);
        } else {
            EOSRemoveFromMistake.push(lessonContent[counter]);
            EOSAddToMistake.push(lessonContent[counter]);
        }

        counter++;
        if (counter > lessonContent.length) {
            endOfSession();
        } else {
            setTimeout(function () {
                test(lessonContent[counter])
            }, 5000);
        }

    }

}




answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        enterButton.click();
    }
});
