const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');

buttonPost.onclick = function () {

    const url = "http://learnfinnish.xyz:3000/product";

    let product = {
        title: "I don't know",
        price: 39.99
    };

    var data = new FormData();
    data.append("json", JSON.stringify(product));

    let fetchData = {
        method: 'POST',
        body: data,
        headers: new Headers()
    };

    fetch(url, fetchData)
        .then((res) => console.log(res))

};


button.onclick = function () {

    const url = "http://learnfinnish.xyz:3000/product";

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))


};
