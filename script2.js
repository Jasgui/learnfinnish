const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');

import {
    postreq,
    getreq
} from '/functions.js';

buttonPost.onclick = function () {

    var product = {
        title: "a new one",
        price: 199
    };

    postreq(product);

};


button.onclick = function () {

    getreq();

};
