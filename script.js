const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');








button.onclick = function () {

    console.log("at least the button works");
    fetch('http://learnfinnish.xyz:3000/product').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        textcheck.innerHTML = data;
    }).catch(function () {
        console.log("Booo");
    });


};
