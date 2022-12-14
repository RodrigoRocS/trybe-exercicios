
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const createDays = () => {
  const ulDays = document.getElementById("days");
  
  for (let index = 0; index < decemberDaysList.length; index += 1) {
  const criarLi = document.createElement('li');
  criarLi.innerHTML = decemberDaysList[index];
  criarLi.className = 'day';
  ulDays.appendChild(criarLi);
  if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
    criarLi.classList.add('holiday');
  }
  }
}
  const sextaCheira = () => {
    const daysTot = document.querySelectorAll('.day');
    for (let index = 5; index < daysTot.length; index += 7) {
        daysTot[index].classList.add('friday');
    }
  }

  window.onload = () => {
    createDays();
    sextaCheira();
  }

