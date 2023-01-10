const BtnSub = document.getElementById("butaozinsub");



const alertaDaGalera = () => {
  const cxtxt = document.getElementsByClassName("cmptxt");
  const inputvalue = cxtxt[index].value.length;
  for (let index = 0; index < cxtxt.length; index += 1) {
    if (
      inputvalue > cxtxt[index].style.maxLength &&
      inputvalue < cxtxt[index].style.minLength
    ) {
      window.alert("Dados inválidos");
    } else {
      window.alert(
        "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
      );
    }
  }
};

BtnSub.addEventListener("click", (event) => {
    // event.preventDefault();
    alertaDaGalera();
  });