var postreq = (data) => {

    const url = "http://learnfinnish.xyz:3000/product";

    let fetchData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, fetchData)
        .then(res => res.json())
        .then(res => console.log(res));
};

var getreq = () => {

    const url = "http://learnfinnish.xyz:3000/product";
    fetch(url)
        .then((res) => res.json())
        .then((data) =>
            return data)

};




export {
    postreq,
    getreq
};
