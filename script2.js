const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');
const buttonGetReview = document.getElementById('buttonGetReview');
const buttonPostReview = document.getElementById('buttonPostReview');

import {
    postreq,
    getreq,
    postrev,
    getrev
} from '/functions.js';


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
