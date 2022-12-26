const pegaBody = document.getElementsByTagName('body')[0];

const btnBackColor = (cor) => {
    const pegaPai = document.getElementById('backcolor');
    const bckColor = document.createElement('button');
    bckColor.innerText = cor;
    pegaPai.appendChild(bckColor);
    bckColor.addEventListener('click', () => {
        pegaBody.style.backgroundColor = cor;
    });
}
const coresBckGr = () => {
    btnBackColor('Red'),
    btnBackColor('Green'),
    btnBackColor('Blue'),
    btnBackColor('Black'),
    btnBackColor('Yellow')
}
const textColor = (cor) => {
    const pegaPai = document.getElementById('fontcolor');
    const fontColor = document.createElement('button');
    fontColor.innerText = cor;
    pegaPai.appendChild(fontColor);
    fontColor.addEventListener('click', () => {
        pegaBody.style.color = cor;
    });
}
const fontColors = () => {
    textColor('Red'),
    textColor('Green'),
    textColor('White'),
    textColor('Blue'),
    textColor('Yellow')
}

window.onload(
    coresBckGr(),
    fontColors()
    );