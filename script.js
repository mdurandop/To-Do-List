const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

inputBox.addEventListener("keypress", function(event) {
    if (inputBox.value === '' && event.key === "Enter") {
        alert('Introduce el nombre de la tarea');
    } else if (event.key === "Enter") {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
});
