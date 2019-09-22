const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');
const buttonGetReview = document.getElementById('buttonGetReview');
const buttonPostReview = document.getElementById('buttonPostReview');
const buttonDelete = document.getElementById('buttonDelete');
const buttonInit = document.getElementById('buttonInit');


import {
    postreq,
    getreq,
    dropCollection
} from '/functions.js';

import {
    initialData
} from '/initdata/init.js';


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
