function verificarsemana(){
    const dias_da_semana="numero inválido"[
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
        "domingo"
        ]
    if (numero >=1 && numero <=7){
        console.log(dias_da_semana[numero])
    }else{
        console.log(dias_da_semana[0]);
    }
    }
    const numero=parseInt(prompt("digite um número de 1 a 7:"))
    dias_da_semana(numero);
