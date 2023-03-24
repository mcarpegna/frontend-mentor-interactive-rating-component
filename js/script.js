document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    selectRating();
    submitRating();
}

// Al seleccionar un número queda guardado en una variable para volcarlo en el mensaje de saludo.
let value; // La declaro global, para poder usarla fuera de la función

function selectRating() {
    let selectionNodelist = document.querySelectorAll('.selection');

    for (let i = 0; i < selectionNodelist.length; i++) {
        let currentValue = i;
        if (selectionNodelist[i]) { // validación para asegurarse de que el nodo existe
            selectionNodelist[i].addEventListener('click', function (event) {
                value = currentValue + 1;
            });
        }
    }
}

// Al hacer clic en el botón submit, te lleva a la página "salute" y actualiza el mensaje.
function submitRating() {
    let submit = document.querySelector('.submit');
    if (submit) { // validación para asegurarse que submit como nodo aún
        submit.addEventListener('click', function (event) {
            localStorage.setItem('ratingValue', value); // coloco la variable en localStorage como ratingValue
            window.location.href = 'salute.html';
        });
    }
}

// Se agrega el valor elegido dentro del texto del mensaje al usuario
document.addEventListener('DOMContentLoaded', function () {
    let ratingValue = localStorage.getItem('ratingValue'); // tomo el valor de la variable value que guarde anteriormente
    if (ratingValue) { // validación para asegurarse que ratingValue existe como nodo aún
        document.querySelector('.value').textContent = ratingValue;
        localStorage.clear();
    }

    // Para que la hacer click en cualquier parte te devuelva a la página principal
    let back = document.querySelector('.go_back');
    if(back) { // validación para asegurarse que back existe como nodo aún
        back.addEventListener('click', function () {
            window.location.href = 'index.html';
        });  
    }  
});