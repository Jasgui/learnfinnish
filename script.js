const button = document.getElementById('button');
import HttpService from '/services/http-service.js';

const http = new HttpService();



button.onclick = function () {

    console.log("at least the button works");
    http.getproducts();
};
