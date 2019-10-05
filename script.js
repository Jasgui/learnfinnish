const DELAY_WRONG_ANSWER = 10;
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const correction = document.getElementById('correction');
const enterButton = document.getElementById('enterButton');
const startbtn = document.getElementById('startbtn');

var content = [];
var contentTest = [];
var contentLearn = [];
var contentReview = [];
var counterTest = 0;
var counterLearn = 0;
var counterReview = 0;


//import {
//    normalise,
//    updateScore,
//    removeItem,
//    getListIds,
//    addItem
//} from '/module.js';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START



startbtn.onclick = () => {

    const url = "http://learnfinnish.xyz:3000/getall";
    fetch(url)
        .then((res) => res.json())
        .then(function (data) {
            content = [...data];


            ////Separating the content into 3 arrays before ordering them

            for (let i = 0; i < content.length; i++) {
                if (content[i].status === "review") {
                    contentReview.push(content[i]);
                } else if (content[i].status === "learn") {
                    contentLearn.push(content[i]);
                } else {
                    contentTest.push(content[i]);
                }
            }

            contentTest.sort(dynamicSort("order"));
            contentLearn.sort(dynamicSort("order"));
            contentReview.sort(dynamicSort("order"));

            var lesson = getLesson();

            console.log(lesson);

        })

}


var getLesson = () => {

    var lesson = [];
    for (let section = 0; section < 3; section++) {

        lesson.push(findNext("test"));
        lesson.push(findNext("test"));
        lesson.push(findNext("learn"));
        lesson.push(findNext("test"));
        lesson.push(findNext("test"));
        lesson.push(findNext("learn"));
        lesson.push(findNext("review"));

    }

    return lesson;
};


var findNext = (status) => {

    if (status === "learn") {
        if (contentLearn.length > 0 && counterLearn <= contentLearn.length) {
            var result = contentLearn[counterLearn];
            counterLearn++;
        } else if (counterTest <= contentTest.length) {
            var result = contentTest[counterTest];
            counterTest++;
        } else {
            console.log("no more items available");
        }
    } else if (status === "review") {
        if (contentReview.length > 0 && counterReview <= contentReview.length) {
            var result = contentReview[counterReview];
            counterReview++;
        } else if (counterTest <= contentTest.length) {
            var result = contentTest[counterTest];
            counterTest++;
        } else {
            console.log("no more items available");
        }
    } else {
        if (contentTest.length > 0 && counterTest <= contentTest.length) {
            var result = contentTest[counterTest];
            counterTest++;
        } else {
            console.log("no more items available");
        }
    }

    return result;

};

var dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END


//
//var test = (content) => {
//
//
//    question.innerHTML = content.french;
//    answer.value = "";
//    correction.innerHTML = "";
//
//};
//
//
//var endOfSession = () => {
//    console.log("End of session");
//    console.log("remove from Learn");
//    console.log(EOSRemoveFromLearn);
//    console.log("remove from Review");
//    console.log(EOSRemoveFromReview);
//    console.log("remove from Mistake");
//    console.log(EOSRemoveFromMistake);
//    console.log("add to Review");
//    console.log(EOSAddToReview);
//    console.log("add to Mistake");
//    console.log(EOSAddToMistake);
//
//    for (let i = 0; i < lessonContent.length; i++) {
//        updateScore(lessonContent[i]._id, lessonContent[i].score);
//    }
//
//    for (let i = 0; i < EOSRemoveFromLearn.length; i++) {
//        removeItem(EOSRemoveFromLearn[i]._id, idList.learn);
//    }
//
//    for (let i = 0; i < EOSRemoveFromReview.length; i++) {
//        removeItem(EOSRemoveFromReview[i]._id, idList.review);
//    }
//
//    for (let i = 0; i < EOSRemoveFromMistake.length; i++) {
//        removeItem(EOSRemoveFromMistake[i]._id, idList.mistake);
//    }
//
//    for (let i = 0; i < EOSAddToReview.length; i++) {
//        addItem(EOSAddToReview[i]._id, idList.review);
//    }
//
//    for (let i = 0; i < EOSAddToMistake.length; i++) {
//        addItem(EOSAddToMistake[i]._id, idList.mistake);
//    }
//
//
//
//
//}
//
//enterButton.onclick = () => {
//    if (normalise(answer.value) === normalise(lessonContent[counter].finnish)) {
//        correction.innerHTML = "yes!";
//
//        if (lessonContent[counter].score === 0) {
//            lessonContent[counter].score = 4;
//            EOSRemoveFromLearn.push(lessonContent[counter]);
//            EOSAddToReview.push(lessonContent[counter]);
//        } else if (lessonContent[counter].score === 4) {
//            EOSRemoveFromReview.push(lessonContent[counter]);
//            EOSAddToReview.push(lessonContent[counter]);
//        } else if (lessonContent[counter].score === 1) {
//            lessonContent[counter].score = 4;
//            EOSRemoveFromMistake.push(lessonContent[counter]);
//            EOSAddToReview.push(lessonContent[counter]);
//        } else {
//            lessonContent[counter].score--;
//            EOSRemoveFromMistake.push(lessonContent[counter]);
//            EOSAddToMistake.push(lessonContent[counter]);
//        }
//
//        counter++;
//        if (counter >= lessonContent.length) {
//            endOfSession();
//        } else {
//            test(lessonContent[counter]);
//        }
//
//    } else {
//
//        correction.innerHTML = lessonContent[counter].finnish;
//
//        if (lessonContent[counter].score === 0) {
//            lessonContent[counter].score = 3;
//            EOSRemoveFromLearn.push(lessonContent[counter]);
//            EOSAddToMistake.push(lessonContent[counter]);
//        } else if (lessonContent[counter].score === 4) {
//            lessonContent[counter].score = 3;
//            EOSRemoveFromReview.push(lessonContent[counter]);
//            EOSAddToMistake.push(lessonContent[counter]);
//        } else {
//            EOSRemoveFromMistake.push(lessonContent[counter]);
//            EOSAddToMistake.push(lessonContent[counter]);
//        }
//
//        counter++;
//        if (counter >= lessonContent.length) {
//            endOfSession();
//        } else {
//            setTimeout(function () {
//                test(lessonContent[counter])
//            }, DELAY_WRONG_ANSWER);
//        }
//
//    }
//
//}
//
//
//
//
//answer.addEventListener("keyup", function (event) {
//    if (event.keyCode === 13) {
//        event.preventDefault();
//        enterButton.click();
//    }
//});
