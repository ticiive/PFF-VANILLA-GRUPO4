document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.principal');
    const botaoEsquerdo = document.querySelector('.botao.esquerda');
    const botaoDireito = document.querySelector('.botao.direita');
    let indiceAtual = 0; 
    function mostrarCard(indice) {
        cards.forEach((card, i) => {
            card.classList.remove('ativo');
            if (i === indice) {
                card.classList.add('ativo');
            }
        });
    }
    mostrarCard(indiceAtual);
    botaoDireito.addEventListener('click', () => {
        indiceAtual++;
        if (indiceAtual >= cards.length) {
            indiceAtual = 0;
        }
        mostrarCard(indiceAtual);
    });

    botaoEsquerdo.addEventListener('click', () => {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = cards.length - 1;
        }
        mostrarCard(indiceAtual);
    });
});