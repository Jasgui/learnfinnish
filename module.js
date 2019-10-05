//var test = (phrase) => {
//    question.innerHTML = phrase.french;
//    answer.value = "";
//    correction.innerHTML = "";
//
//}
//
//
//var normalise = (text) => {
//    var textNorm = text.toLowerCase();
//    textNorm = textNorm.replace(/[.,\?\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//    textNorm = textNorm.replace(/\s{2,}/g, " ");
//    return textNorm;
//}
//
//var updateScore = (itemId, newScore) => {
//
//    const url = "http://learnfinnish.xyz:3000/item/updatescore";
//
//    let data = {
//        itemId: itemId,
//        score: newScore
//    };
//
//    let fetchData = {
//        method: 'PUT',
//        headers: {
//            'Accept': 'application/json, text/plain, */*',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(data)
//    };
//
//    fetch(url, fetchData)
//        .then(res => res.text())
//        .then(res => console.log(res))
//};
//
//var removeItem = (itemId, listId) => {
//    let message = "Trying to remove item " + itemId + " from list " + listId;
//    console.log(message);
//    const url = "http://learnfinnish.xyz:3000/list/removeitem";
//
//    let data = {
//        itemId: itemId,
//        listId: listId
//    };
//
//    let fetchData = {
//        method: 'PUT',
//        headers: {
//            'Accept': 'application/json, text/plain, */*',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(data)
//    };
//
//    fetch(url, fetchData)
//        .then(res => res.json())
//        .then(res => console.log(res))
//};
//
//var getListIds = () => {
//
//    var idList = {
//        learn: "",
//        review: "",
//        mistake: ""
//    };
//    const url = "http://learnfinnish.xyz:3000/list";
//    fetch(url)
//        .then(res => res.json())
//        .then(function (res) {
//            for (var i = 0; i < res.length; i++) {
//                if (res[i].title === "learn") {
//                    idList.learn = res[i]._id;
//                } else if (res[i].title === "review") {
//                    idList.review = res[i]._id;
//                } else if (res[i].title === "mistake") {
//                    idList.mistake = res[i]._id;
//
//                } else {
//                    console.log("not found");
//                }
//            }
//        })
//    return idList;
//    console.log(idList);
//
//};
//
//var addItem = (itemId, listId) => {
//
//    const url = "http://learnfinnish.xyz:3000/list/additem";
//
//    let data = {
//        itemId: itemId,
//        listId: listId
//    };
//
//    let fetchData = {
//        method: 'PUT',
//        headers: {
//            'Accept': 'application/json, text/plain, */*',
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(data)
//    };
//
//    fetch(url, fetchData)
//        .then(res => res.json())
//        .then(res => console.log(res))
//};

//
//export {
//    test,
//    normalise,
//    updateScore,
//    removeItem,
//    getListIds,
//    addItem
//};