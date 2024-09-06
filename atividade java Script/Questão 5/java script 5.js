function calcularpeso(peso){
    if(peso <= 5){
        return 10;
    }else if(peso > 5 && peso <= 10){
        return 20;
    }else{
        return 30;
    }
}
console.log(calcularpeso(3));
console.log(calcularpeso(7));
console.log(calcularpeso(12));