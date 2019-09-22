var postreq = (data, place) => {

    const url = "http://learnfinnish.xyz:3000/" + place;

    let fetchData = {
        method = 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, fetchData)
        .then(res => res.json())
        .then(res => console.log(res))

};

var getreq = (place) => {

    const url = "http://learnfinnish.xyz:3000/" + place;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))

};


var dropCollection = (data) => {
    const url = "http://learnfinnish.xyz:3000/drop";
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
        .then(res => console.log(res))
};



export {
    postreq,
    getreq,
    dropCollection
};
