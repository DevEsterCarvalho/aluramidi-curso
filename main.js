function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert ('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 
//listaDeTeclas[0].onclick = tocaSomPom **para acessar individualmente 

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) { //quando a tecla estiver pressionada
        console.log(event.code)
        if (event.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
            }   
        }
    

    tecla.onkeyup = function() { //quando a tecla for soltada
        tecla.classList.remove('ativa');
    }

}

document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function(event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')) {
            elementoClicado.classList.remove('ativa');
        } else {
            elementoClicado.classList.add('ativa');
        }
    });
});
