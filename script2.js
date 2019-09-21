const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');

import {
    postreq
} from '/functions.js';

buttonPost.onclick = function () {

    var product = {
        title: "a new one",
        price: 199
    };

    postreq(product);

};


button.onclick = function () {

    const url = "http://learnfinnish.xyz:3000/product";

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))


};
