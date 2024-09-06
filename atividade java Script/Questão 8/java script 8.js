let numerosinteiros = [1,2,3,4,5]
        let numerosEmString = []
        numerosinteiros.push(elemento => {
            numerosEmString.push(elemento.tostring())
        });
        console.log(numerosEmString.toString());