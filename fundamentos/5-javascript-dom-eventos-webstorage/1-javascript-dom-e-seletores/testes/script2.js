function twoYears () {
    let paragrafo = document.getElementsByTagName('p')[1]
    paragrafo.innerHTML = '<strong>Respect Developer DP</strong>'
};
twoYears();

function changeYellowCollor () {
    let quadamar = document.getElementsByClassName('main-content')[0];
    quadamar.style.background = 'rgb(76,164,109)'
};
changeYellowCollor();

function changeRedCollor () {
    let quadver = document.getElementsByClassName('center-content')[0];
    quadver.style.background = 'white'
};
changeRedCollor();

function textCorrect () {
    let correcTxt = document.getElementsByTagName('h1')[0];
    correcTxt.innerText = 'Desafio - JavaScript'
};
textCorrect();

function toUpCase () {
    let uppperCase = document.getElementsByTagName('p')[0];
    uppperCase.innerHTML = uppperCase.innerHTML.toUpperCase()
};
toUpCase();

function showLog () {
    let logShow = document.getElementsByTagName('p');
    for (let index = 0; index < logShow.length; index += 1) {
        console.log(logShow[index].innerHTML);
    }
};
showLog();