const pegaBody = document.getElementsByTagName('body')[0];
const salvaTudo = () => {
    localStorage.setItem('coresBckGr', pegaBody.style.backgroundColor);
    localStorage.setItem('fontColors', pegaBody.style.color);
    localStorage.setItem('textSize', pegaBody.style.fontSize);
    localStorage.setItem('lineHeight', pegaBody.style.lineHeight);
    localStorage.setItem('fontType', pegaBody.style.fontFamily);
}
const btnBackColor = (cor) => {
    const pegaPai = document.getElementById('backcolor');
    const bckColor = document.createElement('button');
    bckColor.innerText = cor;
    pegaPai.appendChild(bckColor);
    bckColor.addEventListener('click', () => {
        pegaBody.style.backgroundColor = cor;
        salvaTudo();
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
        salvaTudo();
    });
}
const fontColors = () => {
    textColor('Red'),
    textColor('Green'),
    textColor('White'),
    textColor('Blue'),
    textColor('Yellow')
}
const fontSize = (size) => {
    const pegaPai = document.getElementById('fontsize');
    const fontSizes = document.createElement('button');
    fontSizes.innerText = size;
    pegaPai.appendChild(fontSizes);
    fontSizes.addEventListener('click', () => {
        pegaBody.style.fontSize = size;
        salvaTudo();
    });
}
const textSize = () => {
    fontSize('10px'),
    fontSize('12px'),
    fontSize('15px'),
    fontSize('20px'),
    fontSize('25px')
}
const lineGap = (gap) => {
    const pegaPai = document.getElementById('linegap');
    const gapLine = document.createElement('button');
    gapLine.innerText = gap;
    pegaPai.appendChild(gapLine);
    gapLine.addEventListener('click', () => {
        pegaBody.style.lineHeight = gap;
        salvaTudo();
    });
}
const lineHeight = () => {
    lineGap('15px'),
    lineGap('20px'),
    lineGap('30px'),
    lineGap('50px'),
    lineGap('75px')
}
const fontType = (fonte) => {
    const pegaPai = document.getElementById('fonttype');
    const typeFont = document.createElement('button');
    typeFont.innerText = fonte;
    pegaPai.appendChild(typeFont);
    typeFont.addEventListener('click', () => {
        pegaBody.style.fontFamily = fonte;
        salvaTudo();
    });
}
const fontFamily = () => {
    fontType('Arial'),
    fontType('sans-serif'),
    fontType('fantasy'),
    fontType('monospace'),
    fontType('cursive')
}
const carregaTudo = () => {
    pegaBody.style.backgroundColor = localStorage.getItem('coresBckGr');
    pegaBody.style.color = localStorage.getItem('fontColors');
    pegaBody.style.fontSize = localStorage.getItem('textSize');
    pegaBody.style.lineHeight = localStorage.getItem('lineHeight');
    pegaBody.style.fontFamily = localStorage.getItem('fontType');
}
window.onload(
    coresBckGr(),
    fontColors(),
    textSize(),
    lineHeight(),
    fontFamily(),
    carregaTudo()
    );