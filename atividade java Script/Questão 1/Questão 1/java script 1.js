function verificaridade(){
    let idade = document.getElementById("idade").value ;
    let mensagem = document.getElementById("mensagem").value ;
    if (idade >= 18){
        mensagem.textContent="você é maior de idade.";
    }else{
        mensagem.textContent="você é menor de idade.";
    }
}