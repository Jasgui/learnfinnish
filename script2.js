const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');


button.onclick = function () {

    const url = "http://learnfinnish.xyz/product";

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))


};
