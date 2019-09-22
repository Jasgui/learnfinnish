const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');
const buttonGetReview = document.getElementById('buttonGetReview');
const buttonPostReview = document.getElementById('buttonPostReview');
const buttonDelete = document.getElementById('buttonDelete');
const buttonInit = document.getElementById('buttonInit');
const buttonPrep = document.getElementById('buttonPrep');
const buttonStart = document.getElementById('buttonStart');
const buttonCheck = document.getElementById('buttonCheck');

var loc_all = [];
var loc_news = [];
var loc_reviews = [];
var loc_mistakes = [];
var loc_reviewedMistakes = [];
var loc_done = [];

const URL_NEW = "http://learnfinnish.xyz:3000/new";
const URL_REVIEW = "http://learnfinnish.xyz:3000/review";
const URL_DONE = "http://learnfinnish.xyz:3000/done";
const URL_MISTAKE = "http://learnfinnish.xyz:3000/mistake";
const URL_REVIEWEDMISTAKE = "http://learnfinnish.xyz:3000/reviewedmistake";



import {
    postreq,
    getreq,
    dropCollection
} from '/functions.js';

import {
    initialData
} from '/initdata/init.js';

buttonCheck.onclick = () => {
    console.log(loc_news);
    console.log(loc_done);
    console.log(loc_mistakes);
    console.log(loc_reviewedMistakes);
    console.log(loc_reviews);

}


buttonPrep.onclick = () => {

    const url = "http://learnfinnish.xyz:3000/all";
    fetch(url)
        .then(res => res.json())
        .then(async function (data) {

            for (var i = 0; i < data.length; i++) {

                var result = await postreq(data[i], "new");

            }
        })

};


buttonStart.onclick = () => {

    fetch(URL_NEW)
        .then(res => res.json())
        .then(data => loc_news = [...data])
        .then(function () {
            console.log("new copied to local and new_old");
            localStorage.setItem('new', JSON.stringify(loc_news));
        })

    fetch(URL_MISTAKE)
        .then(res => res.json())
        .then(data => loc_mistakes = [...data])
        .then(function () {
            console.log("mistake copied to local and mistake_old");
            localStorage.setItem('mistake', JSON.stringify(loc_mistakes));

        })

    fetch(URL_DONE)
        .then(res => res.json())
        .then(data => loc_done = [...data])
        .then(function () {
            console.log("done copied to local and done_old");
            localStorage.setItem('done', JSON.stringify(loc_done));

        })

    fetch(URL_REVIEW)
        .then(res => res.json())
        .then(data => loc_reviews = [...data])
        .then(function () {
            console.log("review copied to local and review_old");
            localStorage.setItem('review', JSON.stringify(loc_reviews));

        })


    fetch(URL_REVIEWEDMISTAKE)
        .then(res => res.json())
        .then(data => loc_reviewedMistakes = [...data])
        .then(function () {
            console.log("reviewedmistake copied to local and reviewedmistake_old");
            localStorage.setItem('reviewedmistake', JSON.stringify(loc_reviewedMistakes));

        })



};

buttonInit.onclick = async function () {

    for (var i = 0; i < initialData.length; i++) {

        var result = await postreq(initialData[i], "all");
    }

};

buttonDelete.onclick = () => {
    var collectionToDrop = {
        collection: "allitems"
    };
    dropCollection(collectionToDrop);
};

buttonPostReview.onclick = () => {
    var item = {
        finnish: "kiitos",
        french: "merci"
    };
    postreq(item, "review");
};

buttonPost.onclick = () => {

    var item = {
        finnish: "hyvää päivää!",
        french: "bonjour !"
    };

    postreq(item, "all");

};

buttonGetReview.onclick = () => {

    getreq("review");

}

button.onclick = () => {

    getreq("all");

};
