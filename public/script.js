const btnModal = document.querySelector('[data-countdown="btn-modal"]');
const modal = document.querySelector('[data-countdown="modal-container"]');

function openModal() {
  modal.classList.add("show");
  closeModal();
}
function closeModal() {
  modal.addEventListener("click", handleClick);
  function handleClick(event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  }
}
btnModal.addEventListener("click", openModal);

const form = document.querySelector('[data-countdown="form"]');

function countdown(event) {
  event.preventDefault();
  modal.classList.remove("show");
  try {
    let date = form.elements[0].value;
    checkValue(date);
    let dateBr = formatCurrency(date);
    dateBr = new Date(dateBr);
    let currentDate = dateUser();
    currentDate = new Date(currentDate);
    dataScreen(dateBr,currentDate);
  } catch (error) {
    alert(error.message);
  }
}

form.addEventListener("submit", countdown);
// verificar se o valor esta em branco
function checkValue(date) {
  if (date.length == " ") {
    throw new Error("Selecione uma data");
  }
}
// colocar o valor para data br
function formatCurrency(date) {
  const splittedDate = date.split("-");
  const month = months(splittedDate[1])
  return `${month} ${splittedDate[2]} ${splittedDate[0]}`;
}
// pegar a data atual do usuario
function dateUser() {
    const now = new Date();
    const month = months(`0${now.getMonth() + 1}`)
    return `${now.getDate()} ${month} ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}
// função que vai pegar os meses em numeros e retornar uma string com o nome
function months(value) {
    let mes;
    switch(value) {
      case '01':
          mes = 'January';
          break;
          case '02':
          mes = 'February';
          break;
          case '03':
          mes = 'March';
          break;
          case '04':
          mes = 'April';
          break;
          case '05':
          mes = 'May';
          break;
          case '06':
          mes = 'June';
          break;
          case '07':
          mes = 'July';
          break;
          case '08':
          mes = 'August';
          break;
          case '09':
          mes = 'September';
          break;
          case '10':
          mes = 'October';
          break;
          case '11':
          mes = 'November';
          break;
          case '12':
          mes = 'December';
          break;
    default:
        mes = 'date';
        break;
  }
  return mes;
}
// fazer o calculo para dias, horas, minutos, segundos
function transformDay(day){
    return day / (24 * 60 * 60 * 1000);
}
function transformHours(hours) {
    return hours / (60 * 60 * 1000);
}
function transformMinutes(minutes) {
    return minutes / (60 * 1000);
}
function transformSeconds(seconds) {
    return seconds / 1000;
}
// colocar na tela
function dataScreen(dataOne, dateTwo) {
    const spanDays = document.querySelector('[data-countdown="days"]');
    const spanHours = document.querySelector('[data-countdown="hours"]');
    const spanMinutes = document.querySelector('[data-countdown="minutes"]');
    const spanSeconds = document.querySelector('[data-countdown="seconds"]');
    spanDays.innerText = `${Math.round(transformDay(dataOne) - transformDay(dateTwo))}`;
    spanHours.innerText = `${Math.round(transformHours(dataOne) - transformHours(dateTwo))}`;
    spanMinutes.innerText = `${Math.round(transformMinutes(dataOne) - transformMinutes(dateTwo))}`;
    spanSeconds.innerText = `${Math.round(transformSeconds(dataOne) - transformSeconds(dateTwo))}`;
    
}