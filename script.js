const DELAY_WRONG_ANSWER = 100;
const DELAY_RIGHT_ANSWER = 100;
const NUMBER_OF_SESSIONS = 1;
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const correction = document.getElementById('correction');
const enterButton = document.getElementById('enterButton');
const startbtn = document.getElementById('startbtn');
const addVariantButton = document.getElementById('addVariant');

var notFirstTime = false;
var content = [];
var contentTest = [];
var contentLearn = [];
var contentReview = [];
var contentDone = [];
var counterTest = 0;
var counterLearn = 0;
var counterReview = 0;
var lesson = [];
var goToNext = false;
var userAlternate = "";
var tested = {};
var graphData = {
    test: [],
    learn: [],
    review: [],
    done: []
};
var xaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

Chart.defaults.global.responsive = false;
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xaxis,
        datasets: [
            {
                data: graphData.learn,
                label: "Learn",
                borderColor: "#3399FF",
                backgroundColor: "rgba(51, 153, 255, 0.5)",
                fill: true
            },
            {
                data: graphData.review,
                label: "Review",
                borderColor: "#33CC66",
                backgroundColor: "rgba(51, 204, 102, 0.5)",
                fill: true
            },
            {
                data: graphData.done,
                label: "Done",
                borderColor: "#FF9966",
                backgroundColor: "rgba(255, 153, 102, 0.5)",
                fill: true
            }
    ]
    }
});


import {
    normalise
} from '/module.js';



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START



startbtn.onclick = () => {

    createSession();

};

addVariantButton.onclick = () => {

    var itemToChange = contentLearn[contentLearn.length - 1];
    itemToChange.alternate.push(userAlternate);

    itemToChange.status = "review";
    itemToChange.level = 0;
    contentReview.push(itemToChange);
    contentLearn.pop();

    graphData.test.pop();
    graphData.learn.pop();
    graphData.review.pop();
    graphData.done.pop();
    graphData.test.push(contentTest.length);
    graphData.learn.push(contentLearn.length);
    graphData.review.push(contentReview.length);
    graphData.done.push(contentDone.length);
    myChart.update();

    goToNext = false;
    test();


};

var createSession = () => {

    lesson = [];
    contentDone = [];
    contentLearn = [];
    contentReview = [];
    contentTest = [];
    counterLearn = 0;
    counterReview = 0;
    counterTest = 0;

    if (notFirstTime) {
        console.log("changing the graph");
        for (let i = 0; i <= graphData.test.length; i++) {
            graphData.test.pop();
            graphData.learn.pop();
            graphData.review.pop();
            graphData.done.pop();
            myChart.update();

        }
    }
    notFirstTime = true;

    const url = "http://learnfinnish.xyz:3000/getall";
    fetch(url)
        .then((res) => res.json())
        .then(function (data) {
            content = [...data];


            ////Separating the content into 4 arrays before ordering them

            for (let i = 0; i < content.length; i++) {
                if (content[i].status === "review") {
                    contentReview.push(content[i]);
                } else if (content[i].status === "learn") {
                    contentLearn.push(content[i]);
                } else if (content[i].status === "test") {
                    contentTest.push(content[i]);
                } else {
                    contentDone.push(content[i]);
                }
            }

            contentTest.sort(dynamicSort("order"));
            contentLearn.sort(dynamicSort("order"));
            contentReview.sort(dynamicSort("order"));
            contentDone.sort(dynamicSort("order"));

            lesson = getLesson();

            console.log(lesson);

            graphData.test.push(contentTest.length);
            graphData.learn.push(contentLearn.length);
            graphData.review.push(contentReview.length);
            graphData.done.push(contentDone.length);
            myChart.update();
            test();

        })


};


var test = () => {

    console.log("lesson and length");
    console.log(lesson);
    console.log(lesson.length);
    if (lesson.length > 0) {
        question.innerHTML = lesson[0].french;
        answer.value = "";
        correction.innerHTML = ".";

    } else {

        endOfSession();

    }
    console.log("test");
    console.log(contentTest);
    console.log("review");

    console.log(contentReview);
    console.log("learn");

    console.log(contentLearn);
    console.log("done");

    console.log(contentDone);

};


var getLesson = () => {

    var lessonToBuild = [];
    for (let section = 0; section < NUMBER_OF_SESSIONS; section++) {

        lessonToBuild.push(findNext("test"));
        lessonToBuild.push(findNext("learn"));
        lessonToBuild.push(findNext("learn"));
        lessonToBuild.push(findNext("test"));
        lessonToBuild.push(findNext("learn"));
        lessonToBuild.push(findNext("learn"));
        lessonToBuild.push(findNext("review"));
        lessonToBuild.push(findNext("review"));

    }

    return lessonToBuild;
};


var findNext = (status) => {

    if (status === "learn") {
        if (contentLearn.length > 0 && counterLearn <= contentLearn.length - 1) {
            var result = contentLearn[counterLearn];
            counterLearn++;
        } else if (counterTest <= contentTest.length) {
            var result = contentTest[counterTest];
            counterTest++;
        } else {
            console.log("no more items available");
        }
    } else if (status === "review") {
        if (contentReview.length > 0 && counterReview <= contentReview.length - 1) {
            var result = contentReview[counterReview];
            counterReview++;
        } else if (contentLearn.length > 0 && counterLearn <= contentLearn.length - 1) {
            var result = contentLearn[counterLearn];
            counterLearn++;
        } else if (counterTest <= contentTest.length) {
            var result = contentTest[counterTest];
            counterTest++;
        } else {
            console.log("no more items available");
        }
    } else {
        if (contentTest.length > 0 && counterTest <= contentTest.length - 1) {
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




answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (goToNext) {
            goToNext = false;
            test();
        } else {

            event.preventDefault();
            enterButton.click();
        }
    }
});


enterButton.onclick = () => {

    tested = lesson[0];

    var testAlternate = false;
    for (let x = 0; x < tested.alternate.length; x++) {
        if (normalise(answer.value) === normalise(tested.alternate[x])) {
            testAlternate = true;
        }
    }

    if (normalise(answer.value) === normalise(tested.finnish) || testAlternate) {
        correction.innerHTML = "yes!";

        if (tested.status === "test") {
            tested.status = "review";
            tested.level = 0;
            contentReview.push(tested);
            contentTest.shift();
            lesson.shift();
        } else if (tested.status === "review") {
            if (tested.level >= 5) {
                tested.status = "done";
                tested.level = 0;
                contentDone.push(tested);
                contentReview.shift();
                lesson.shift();
            } else {
                tested.level++;
                contentReview.push(tested);
                contentReview.shift();
                lesson.shift();
            }
        } else if (tested.status === "learn") {
            if (tested.level >= 3) {
                tested.status = "review";
                tested.level = 0;
                contentReview.push(tested);
                contentLearn.shift();
                lesson.shift();
            } else {
                tested.level++;
                contentLearn.push(tested);
                contentLearn.shift();
                lesson.shift();
            }
        }

        graphData.test.push(contentTest.length);
        graphData.learn.push(contentLearn.length);
        graphData.review.push(contentReview.length);
        graphData.done.push(contentDone.length);
        myChart.update();

        setTimeout(function () {
            test()
        }, DELAY_RIGHT_ANSWER);

    } else {
        correction.innerHTML = lesson[0].finnish;

        if (tested.status === "test") {
            tested.status = "learn";
            tested.level = 0;
            contentLearn.push(tested);
            contentTest.shift();
            lesson.shift();
        } else if (tested.status === "review") {
            tested.status = "learn";
            tested.level = 0;
            contentLearn.push(tested);
            contentReview.shift();
            lesson.shift();
        } else if (tested.status === "learn") {
            contentLearn.push(tested);
            contentLearn.shift();
            lesson.shift();
        }

        graphData.test.push(contentTest.length);
        graphData.learn.push(contentLearn.length);
        graphData.review.push(contentReview.length);
        graphData.done.push(contentDone.length);
        myChart.update();
        userAlternate = answer.value;
        goToNext = true;

    }


};

var endOfSession = () => {

    ///Correct value of order in every separate array
    correctOrder(contentTest);
    correctOrder(contentLearn);
    correctOrder(contentReview);
    correctOrder(contentDone);

    ///Merge all arrays into a master one
    var masterContent = [];
    contentTest.forEach(item => masterContent.push(item));
    contentReview.forEach(item => masterContent.push(item));
    contentLearn.forEach(item => masterContent.push(item));
    contentDone.forEach(item => masterContent.push(item));

    console.log("final list before saving");
    console.log(masterContent);

    const url = "http://learnfinnish.xyz:3000/updateAll";

    let fetchData = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(masterContent)
    };



    fetch(url, fetchData)
        .then(res => res.text())
        .then(res => console.log(res))



};

var correctOrder = (data) => {

    for (let i = 0; i < data.length; i++) {
        data[i].order = i;
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END
