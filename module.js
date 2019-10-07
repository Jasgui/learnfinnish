var normalise = (text) => {
    var textNorm = text.toLowerCase();
    textNorm = textNorm.replace(/[.,\?\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    textNorm = textNorm.replace(/\s{2,}/g, " ");
    textNorm = textNorm.replace(/ä/g, "ä");



    return textNorm;
}

export {
    normalise
};
