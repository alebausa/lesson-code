// Selección del botón
const hideButton = document.getElementById('hideBtn');
// Selección del div que desaparece
const hidingDiv = document.getElementById('hide-p');

// Función para cambiar visibilidad del botón
hideButton.onclick = function () {
  if (hidingDiv.classList.contains('hide')) {
    hidingDiv.classList.replace('hide', 'show');
  } else if (hidingDiv.classList.contains('show')) {
    hidingDiv.classList.replace('show', 'hide');
  }
}

const foodInput = document.getElementById('food-input');
const foodBtn = document.getElementById('food-button');
const foodList = document.getElementById('food-list');

function addToList() {
  const newItem = document.createElement('li');
  newItem.innerHTML = foodInput.value;
  foodList.appendChild(newItem);
  foodInput.value = "";
}










