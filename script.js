const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const pendientes = document.querySelector('.contador-pendientes');
const completadas = document.querySelector('.contador-completadas');

function actualizarContadores() {
    const items = document.querySelectorAll('.list-item');
    const completadasCount = document.querySelectorAll('.checked').length;

    if (pendientes) {
        pendientes.innerHTML = items.length - completadasCount;
    }

    if (completadas) {
        completadas.innerHTML = completadasCount;
    }

    saveData();
}

inputBox.addEventListener("keypress", function(event) {
    if (inputBox.value === '' && event.key === "Enter") {
        alert('Introduce el nombre de la tarea');
    } else if (event.key === "Enter") {
        let li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        span.addEventListener("click", function() {
            li.remove();
            actualizarContadores();
        });

        li.appendChild(span);
        listContainer.appendChild(li);

        actualizarContadores();
        saveData();
    }
});

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        actualizarContadores();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        actualizarContadores();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
