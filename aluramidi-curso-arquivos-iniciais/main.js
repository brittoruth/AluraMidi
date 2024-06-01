
function tocarSom(tecla) {
    const button = document.querySelector(`#${tecla}`)
    button.play()
}

function init() {
    const listaTeclas = document.querySelectorAll('.tecla')
    for (let i = 0; i < listaTeclas.length; i++) {
        const som = listaTeclas[i].classList[1]
        listaTeclas[i].addEventListener('click', () => {
            tocarSom(`som_${som}`)
        })
    }
}

init()
