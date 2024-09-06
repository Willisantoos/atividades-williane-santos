function verificar_numero(numero){
if (numero > 0){
   return "o numero é positivo"
}else if (numero < 0){
   return "o numero é negativo"
}else{
   return "o numero é zero"
}
}
numero = float(input("digite um numero:"))
   console.log(verificar_numero(numero))