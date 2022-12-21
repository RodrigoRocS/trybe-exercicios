const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];


const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

// Escreva seu código abaixo.

const createDays = () => {
  const ulDays = document.getElementById("days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const criarLi = document.createElement("li");
    criarLi.innerHTML = decemberDaysList[index];
    criarLi.className = "day";
    ulDays.appendChild(criarLi);
    if (
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25 ||
      decemberDaysList[index] === 31
    ) {
      criarLi.classList.add("holiday");
    }
  }
  sextaCheira();
};
const sextaCheira = () => {
  const daysTot = document.querySelectorAll(".day");
  for (let index = 5; index < daysTot.length; index += 7) {
    daysTot[index].classList.add("friday");
  }
};

const holiBtn = (Feriados, id, funcao) => {
  const paiBotao = document.querySelector(".buttons-container");
  const botao = document.createElement("button");
  botao.id = id;
  botao.innerText = Feriados;
  paiBotao.appendChild(botao);
  botao.addEventListener("click", funcao);
};

const changeColorHoli = () => {
  const botaoHoli = document.getElementsByClassName("holiday");
  for (let index = 0; index < botaoHoli.length; index += 1) {
    if (botaoHoli[index].style.backgroundColor !== "rgb(250, 12, 224)") {
        botaoHoli[index].style.backgroundColor = "rgb(250, 12, 224)";
    } else {
        botaoHoli[index].style.backgroundColor = "rgb(238,238,238)";
    }
  }
};

const mudarArraySext = (param) => {
  const pegaClassSext = document.getElementsByClassName('friday')
  const pegaSextaBtn = document.getElementById('btn-friday');
  pegaSextaBtn.addEventListener('click', () => {
    for (let index = 0; index < pegaClassSext.length; index += 1) {
      if (pegaClassSext[index].innerText === 'Sexta-Cheira!') {
        pegaClassSext[index].innerText = param[index];
      } else {
        pegaClassSext[index].innerText = 'Sexta-Cheira!';
      }
    }
  })
}
const sextas = ["4", "11", "18", "25"];

const zoomDias = () => {
  const todesDias = document.getElementsByClassName('day');
  for (let index = 0; index < todesDias.length; index += 1) {
    todesDias[index].addEventListener('mouseover', () => {
      todesDias[index].style.fontSize = '30px';
    })
    todesDias[index].addEventListener('mouseout', () => {
      todesDias[index].style.fontSize = '20px'
    })
  }
}

const tarefaPerson = (tarefa) => {
  const paiTasks = document.querySelector('.my-tasks')
  const criaSpanTarefa = document.createElement('span');
  criaSpanTarefa.innerText = tarefa;
  paiTasks.appendChild(criaSpanTarefa);
}

const colorLegend = (cor) => {
  const paiTasks = document.querySelector('.my-tasks')
  const criaDiv = document.createElement('div');
  criaDiv.className = 'task';
  criaDiv.style.backgroundColor = cor;
  paiTasks.appendChild(criaDiv);
}

const selectTask = () => {
  const taskSelec = document.getElementsByClassName('task selected');
  const pegaDiv = document.querySelector('.task');
  pegaDiv.addEventListener('click', (event) => {
    if (taskSelec.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}

window.onload = () => {
  createDaysOfTheWeek();
  createDays();
  holiBtn("Feriados in my mind", 'btn-holiday', changeColorHoli);
  holiBtn('Sexta-feira', 'btn-friday');
  mudarArraySext(sextas);
  zoomDias();
  tarefaPerson('Cozinhar');
  colorLegend('rgb(210, 29, 134)');
  selectTask();
};
