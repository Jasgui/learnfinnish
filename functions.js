var postreq = (data) => {

    const url = "http://learnfinnish.xyz:3000/all";

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

var postrev = (data) => {

    const url = "http://learnfinnish.xyz:3000/review";

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

    const url = "http://learnfinnish.xyz:3000/all";
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))

};

var getrev = () => {
    const url = "http://learnfinnish.xyz:3000/review";
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))
};



export {
    postreq,
    getreq,
    getrev,
    postrev
};
