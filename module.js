var test = (phrase) => {
    question.innerHTML = phrase.french;
    answer.value = "";
    correction.innerHTML = "";

}


var normalise = (text) => {
    var textNorm = text.toLowerCase();
    textNorm = textNorm.replace(/[.,\?\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    textNorm = textNorm.replace(/\s{2,}/g, " ");
    return textNorm;
}


export {
    test,
    normalise
};
