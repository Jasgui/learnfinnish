const button = document.getElementById('button');
const textcheck = document.getElementById('textcheck');
const buttonPost = document.getElementById('buttonPost');

buttonPost.onclick = function () {

    const url = "http://learnfinnish.xyz:3000/product";

    let product = {
        title: "I don't know",
        price: 39.99
    };


    let fetchData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    };

    fetch(url, fetchData)
        .then(res => res.json())
        .then(res => console.log(res));
};


button.onclick = function () {

    const url = "http://learnfinnish.xyz:3000/product";

    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))


};
