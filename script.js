var listaJogador = document.querySelectorAll('.jogador')
var cardjogadores = document.querySelectorAll('.card-player')

listaJogador.forEach(jogador => {
    jogador.addEventListener('click', () => {
        var cardPlayerOpen = document.querySelector('.open')
        cardPlayerOpen.classList.remove('open')

        var idPlayerSelected = jogador.attributes.id.value

        var idCardPlayerAbrir = 'card-' + idPlayerSelected

        var cardPlayerAbrir = document.getElementById(idCardPlayerAbrir)
        cardPlayerAbrir.classList.add('open')

        var playerAtivoLista = document.querySelector('.ativo')
        playerAtivoLista.classList.remove('ativo')

        var playerSelectedLista = document.getElementById(idPlayerSelected)
        playerSelectedLista.classList.add('ativo')
    })
})