const button = document.getElementById('button');
import HttpService from '/http-service';

const http = new HttpService();



button.onclick = function () {

    http.getproducs();
};
