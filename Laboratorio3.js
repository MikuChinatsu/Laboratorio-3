function showScore() {
  const elementValue = document.querySelector("#score").value;

  alert(`Has valorado con ${elementValue} puntos.`)
}

function showAccount() {
  const country = document.querySelector("#country").value;
  const iban = document.querySelector("#iban").value;
  const entity = document.querySelector("#entity").value;
  const branch = document.querySelector("#branch").value;
  const dc = document.querySelector("#dc").value;
  const account = document.querySelector("#account").value;

  alert(`Le informamos que su cuenta bancaria es: ${country}${iban}-${entity}-${branch}-${dc}-${account}.`)
}

function showCurrentDay() {
  const date = new Date(document.querySelector("#date").value);
  const formattedDate = date.toLocaleString('es-es', {  weekday: 'long' });

  alert(`La fecha seleccionada en el elemento de fecha es un ${formattedDate}.`)
}