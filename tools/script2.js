const btnInit1 = document.getElementById('btnInit1');
const btnInit2 = document.getElementById('btnInit2');
const btnInit3 = document.getElementById('btnInit3');


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
const btnFetchList = document.getElementById('btnFetchList');
const btnAddItemToList = document.getElementById('btnAddItemToList');

const ID_REVIEW = "5d8f5defd89b152ef55052a1";
const ID_MISTAKE = "5d8f5e33d89b152ef55052a2";
const ID_REVIEWEDMISTAKE = "5d8f5e5cd89b152ef55052a3";


import {
    postreq,
    getreq,
    dropCollection,
    addItem,
    getListIds
} from '/tools/functions.js';

import {
    initialData
} from '/initdata/init.js';


var idLists = getListIds();
console.log(idLists);

var test = getreq("item");
console.log(test);


btnInit1.onclick = async function () {
    //Add the initial dataset
    for (var i = 0; i < initialData.length; i++) {

        var result = await postreq(initialData[i], "item");
    }

};


btnInit2.onclick = () => {
    //Create the lists
    postreq({
        title: "learn"
    }, "list");
    postreq({
        title: "review"
    }, "list");
    postreq({
        title: "mistake"
    }, "list");
    postreq({
        title: "lesson"
    }, "list");


    console.log("lists created");

};



btnInit3.onclick = () => {
    const url = "http://learnfinnish.xyz:3000/item";

    fetch(url)
        .then(res => res.json())
        .then(function (res) {
                for (var i = 0; i < res.length; i++) {
                    fetch("http://learnfinnish.xyz:3000/item", {
                            method: 'PUT',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                itemId: res[i]._id,
                                listId: idLists.learn
                            })
                        })
                        .then(console.log("added!"));
                }
            };
        })
};





buttonPrep.onclick = () => {

    const url = "http://learnfinnish.xyz:3000/item";
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

        var result = await postreq(initialData[i], "item");
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
