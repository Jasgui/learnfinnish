///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START



function postreq(data, place, ) {


    const url = "http://learnfinnish.xyz:3000/" + place;

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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END




export {
    postreq,
};
