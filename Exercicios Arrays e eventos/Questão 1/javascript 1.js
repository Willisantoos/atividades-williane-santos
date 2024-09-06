const pessoas=[
    {nome:"João",idade:21},
    {nome:"Pedro",idade:24},
    {nome:"Tiago",idade:26},
    {nome:"Maria",idade:18},
    {nome:"Luiza",idade:20},
]
function renderlista(pessoas){
    const listaResutados = document.getElementById('results-list');
    listaResutados.innerHTML = '';
    pessoas.forEach(pessoas =>{
        const item = document.createElement('li');
        item.textContent = '${pessoas.nome} -${pessoas.idade} anos';
        listaResutados.appendChild(item);
    });
    function filtrar(){
        const valorfiltro = document.getElementById('filter-input').value.tolowerCase();
        const pessoasfiltradas = pessoas.filter(pessoa =>{
            const nome = pessoa.nome.tolowerCase();
            const idade = pessoa.idade.toString();
            return nome.includes(valorfiltro)|| idade === valorfiltro;
        });
        renderlista(pessoasfiltradas);
    }
}
document.getElementById('filter-button').addEventListener('click',filtrarpessoas);
renderlista(pessoas);
