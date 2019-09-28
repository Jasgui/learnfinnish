const question = document.getElementById('question');
const answer = document.getElementById('answer');
const correction = document.getElementById('correction');
const enterButton = document.getElementById('enterButton');
const startbtn = document.getElementById('startbtn');

import {
    test,
    normalise
} from '/module.js';

startbtn.onclick = () => {


    const url = "http://learnfinnish.xyz:3000/lesson";
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))

}







enterButton.onclick = () => {
    if (normalise(answer.value) === normalise(phrases[counter].value)) {
        correction.innerHTML = "yes!";
        reviews.push(phrases[counter]);
        counter++;
        test(phrases[counter]);
    } else {
        correction.innerHTML = phrases[counter].value;
        mistakes.push(phrases[counter]);
        counter++;
        setTimeout(function () {
            test(phrases[counter])
        }, 5000);
    }
    console.log(mistakes);
    console.log(reviews);
}

endButton.onclick = () => {
    localStorage.setItem('data', JSON.stringify(reviews));
}



answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        enterButton.click();
    }
});
