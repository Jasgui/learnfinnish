const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');
const buttonGetReview = document.getElementById('buttonGetReview');
const buttonPostReview = document.getElementById('buttonPostReview');
const buttonRename = document.getElementById('buttonRename');


import {
    postreq,
    getreq,
    postrev,
    getrev,
    rename
} from '/functions.js';


buttonRename.onclick = () => {
    rename();
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
