document.addEventListener('DOMContentLoaded',()=> {
    const paragrafo= document.getElementById('meuTexto');
    paragrafo.addEventListener('click',()=> {
        paragrafo.textContent= 'O texto foi alterado!';
    });
});