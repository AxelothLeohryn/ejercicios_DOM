document.getElementById('escondeMuestra').addEventListener('click', function() {
    let parrafo = document.querySelector('.hide');
    if (parrafo.innerHTML === '') {
        parrafo.innerHTML = 'Este texto es visible';
    } else {
        parrafo.innerHTML = '';
    }
});

document.getElementById('image').addEventListener('mouseover', function() {
    document.getElementById('titulo').innerHTML = 'Foto de Paisaje';

});
document.getElementById('image').addEventListener('mouseout', function() {
    document.getElementById('titulo').innerHTML = '';
});
const lista = document.querySelector('ul');
var valoresLista = ['Pasear', 'Running', 'Sprinting'];
for (let i = 0; i < 3; i++) {
    lista.appendChild(document.createElement('li'));
    document.querySelectorAll('li')[i].innerHTML = valoresLista[i];
}
/*const lista1 = document.querySelectorAll('li').innerHTML;
for (let i = 0; i < lista1.length; i++) {
    lista1[i] = valoresLista[i];
}*/