const numeros = [43,12,88,29,75,5,64];
function exibirnumeros(numeros){
    const listaelementos = document.getElementById('number-list');
    listaelementos.innerHTML ='';
    listnumeros.forEach(numero =>{
        const li = document.createElement('li');
        li.textContent = numero;
        listaelementos.appendChild(li);
    })
}
function ordenarnumeros(numeros){
    numeros.sort((a,b)=>a - b);
    exibirnumeros(numeros);
}
exibirnumeros(numeros);
document.getElementById('sort-button').addEventListener('click',ordenarnumeros);