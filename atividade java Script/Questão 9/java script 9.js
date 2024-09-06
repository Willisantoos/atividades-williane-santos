const array=[1,2,3,4,1,2,1,5];
        const valorparacontar=1;
        let contador=0;
        array.forEach(item=>{
            if(item === valorparacontar){
                contador++;
            }
        });
        console.log("o valor ${valorparacontar}aparece ${contador}vezes no array.");