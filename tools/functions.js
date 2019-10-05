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




var addItem = (itemId, listId) => {

    const url = "http://learnfinnish.xyz:3000/list/additem";

    let data = {
        itemId: itemId,
        listId: listId
    };

    let fetchData = {
        method: 'PUT',
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

    var bodydata = {
        collection: data
    };
    const url = "http://learnfinnish.xyz:3000/drop";
    let fetchData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodydata)
    };
    fetch(url, fetchData)
        .then(res => res.json())
        .then(res => console.log(res))
};

var getListIds = () => {

    var idList = {
        learn: "",
        review: "",
        mistake: ""
    };
    const url = "http://learnfinnish.xyz:3000/list";
    fetch(url)
        .then(res => res.json())
        .then(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].title === "learn") {
                    idList.learn = res[i]._id;
                } else if (res[i].title === "review") {
                    idList.review = res[i]._id;
                } else if (res[i].title === "mistake") {
                    idList.mistake = res[i]._id;

                } else {
                    console.log("not found");
                }
            }
        })
    return idList;
    console.log(idList);

};


export {
    postreq,
    getreq,
    dropCollection,
    addItem,
    getListIds
};
