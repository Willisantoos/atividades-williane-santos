let precos = [200,450,800,1200,670]
let novosPrecos = []

precos.forEach(precoAtual => {
    let desconsto = precoAtual * 0.10
    novosPrecos.push(precoAtual - desconsto)
});