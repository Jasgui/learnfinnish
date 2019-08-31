const button = document.getElementById('button');

button.onclick = function () {

    fetch('https://learnfinnish.xyz:3000/product')
        .then(function (res) {
            return res.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
};
