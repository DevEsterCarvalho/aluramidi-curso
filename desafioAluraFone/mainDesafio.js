//Escreva o código em JavaScript capaz de selecionar o elemento HTML input do tipo telefone
const inputTel = document.querySelector('input[type=tel]')

const listaNumerosFone = document.querySelectorAll('input[type=button]')
console.log(listaNumerosFone)

for (let contador = 0; contador < listaNumerosFone.length; contador ++) {
    const numero = listaNumerosFone[contador];
    numero.onclick = function() {
        inputTel.value = inputTel.value + numero.valeu
    }
}