function tocaSom (idELementoAudio) {
    document.querySelector(idELementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 
//listaDeTeclas[0].onclick = tocaSomPom **para acessar individualmente 

for (let contador= 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio)
    }
}