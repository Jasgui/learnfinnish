const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');


button.onclick = function () {

    const url = "http://learnfinnish.xyz/product";

    fetch(url)
        .then((res) => res.json())
        .then console.log(res);





    //    
    //    fetch('http://learnfinnish.xyz:3000/product').then(function (response) {
    //        return response.json();
    //    }).then(function (data) {
    //        console.log(data);
    //        textcheck.innerHTML = data;
    //    }).catch(function () {
    //        console.log("Booo");
    //    });


};
