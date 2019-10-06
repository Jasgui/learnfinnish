const btnInit1 = document.getElementById('btnInit1');
//const btnInit2 = document.getElementById('btnInit2');
//const btnInit3 = document.getElementById('btnInit3');

const ID_REVIEW = "5d8f5defd89b152ef55052a1";
const ID_MISTAKE = "5d8f5e33d89b152ef55052a2";
const ID_REVIEWEDMISTAKE = "5d8f5e5cd89b152ef55052a3";


import {
    postreq
} from '/tools/functions.js';

import {
    initialData
} from '/initdata/init.js';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START

btnInit1.onclick = function () {
    //Add the initial dataset
    postreq(initialData, "addall");
};









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END
