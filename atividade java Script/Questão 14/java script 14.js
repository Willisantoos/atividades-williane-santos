document.addEventListener('keydown',function(event){
    const displayElement=document.getElementById('keyDisplay');
    displayElement.textContent='Tecla pressiona:${event.key}';
});