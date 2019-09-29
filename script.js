const DELAY_WRONG_ANSWER = 10;
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
    normalise,
    updateScore,
    removeItem,
    getListIds,
    addItem
} from '/module.js';



var idList = {
    learn: "",
    review: "",
    mistake: ""
};
const url = "http://learnfinnish.xyz:3000/list";
fetch(url)
    .then(res => res.json())
    .then(function (res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i].title === "learn") {
                idList.learn = res[i]._id;
            } else if (res[i].title === "review") {
                idList.review = res[i]._id;
            } else if (res[i].title === "mistake") {
                idList.mistake = res[i]._id;

            } else {
                console.log("not found");
            }
        }
    })
console.log(idList);





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

    for (let i = 0; i < lessonContent.length; i++) {
        updateScore(lessonContent[i]._id, lessonContent[i].score);
    }

    for (let i = 0; i < EOSRemoveFromLearn.length; i++) {
        removeItem(EOSRemoveFromLearn[i]._id, idLists.learn);
    }

    for (let i = 0; i < EOSRemoveFromReview.length; i++) {
        removeItem(EOSRemoveFromReview[i]._id, idLists.review);
    }

    for (let i = 0; i < EOSRemoveFromMistake.length; i++) {
        removeItem(EOSRemoveFromMistake[i]._id, idLists.mistake);
    }

    for (let i = 0; i < EOSAddToReview.length; i++) {
        addItem(EOSAddToReview[i]._id, idLists.review);
    }

    for (let i = 0; i < EOSAddToMistake.length; i++) {
        addItem(EOSAddToMistake[i]._id, idLists.mistake);
    }




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
        if (counter >= lessonContent.length) {
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
        if (counter >= lessonContent.length) {
            endOfSession();
        } else {
            setTimeout(function () {
                test(lessonContent[counter])
            }, DELAY_WRONG_ANSWER);
        }

    }

}




answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        enterButton.click();
    }
});
