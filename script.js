function play(escolhaUsuario) {
    var escolhas = ['pedra', 'papel', 'tesoura'];
    var EscolhaPC = escolhas[Math.floor(Math.random() * escolhas.length)];

    var result = '';

    if (escolhaUsuario === EscolhaPC) {
        result = 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && EscolhaPC === 'tesoura') ||
        (escolhaUsuario === 'papel' && EscolhaPC === 'pedra') ||
        (escolhaUsuario === 'tesoura' && EscolhaPC === 'papel')
    ) {
        result = 'Você venceu!';
    } else {
        result = 'Você perdeu!';
    }

    document.getElementById('resultado').innerText = `Você escolheu ${escolhaUsuario} e o computador escolheu ${EscolhaPC}. Resultado: ${result}`;
}
