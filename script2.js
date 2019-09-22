const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');
const buttonGetReview = document.getElementById('buttonGetReview');
const buttonPostReview = document.getElementById('buttonPostReview');
const buttonDelete = document.getElementById('buttonDelete');


import {
    postreq,
    getreq,
    postrev,
    getrev,
    dropCollection
} from '/functions.js';


buttonDelete.onclick = () => {
    var collectionToDrop = {
        collection: "reviews"
    };
    dropCollection(collectionToDrop);
};

buttonPostReview.onclick = () => {
    var item = {
        finnish: "kiitos",
        french: "merci"
    };
    postrev(item);
};

buttonPost.onclick = () => {

    var item = {
        finnish: "hyvää päivää!",
        french: "bonjour !"
    };

    postreq(item);

};

buttonGetReview.onclick = () => {

    getrev();

}

button.onclick = () => {

    getreq();

};
