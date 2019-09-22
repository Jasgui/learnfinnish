const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');

import {
    postreq,
    getreq
} from '/functions.js';

buttonPost.onclick = function () {

    var item = {
        finnish: "hyvää päivää!",
        french: "bonjour !"
    };

    postreq(item);

};


button.onclick = function () {

    getreq();

};
