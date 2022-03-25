let array = []

function salvar (){
    let nome = document.querySelector('#box-nome').value 
    let sIdade = document.querySelector('#box-idade').value
    let idade = parseInt(sIdade)
    let pessoa = {
        nome,
        idade
    }

    array.push(pessoa)
    console.log(array)
}