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
