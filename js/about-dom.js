const hideButton = document.getElementById('hideBtn');
const hidingDiv = document.getElementById('hide-p');
console.log(hideButton)

hideButton.onclick = function () {
  if (hidingDiv.classList.contains('hide')) {
    hidingDiv.classList.replace('hide', 'show');
  } else if (hidingDiv.classList.contains('show')) {
    hidingDiv.classList.replace('show', 'hide');
  }
}

// function printConsole() {
//   console.log('Hello!');
// }
