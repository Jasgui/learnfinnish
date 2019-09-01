const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
//import HttpService from './services/http-service.js';

//const http = new HttpService();



button.onclick = function () {

    console.log("at least the button works");
    //http.getproducts();
    fetch('http://learnfinnish.xyz:3000/product').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        textcheck.text = data;
    }).catch(function () {
        console.log("Booo");
    });


};
