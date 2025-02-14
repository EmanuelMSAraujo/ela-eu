// Script da contagem regressiva
const eventDate = new Date("2023-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown-timer").innerHTML = "O evento começou!";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Script do carrossel de imagens
let indiceAtual = 0;
const imagens = document.querySelectorAll(".carrossel-img");

function mostrarImagem(indice) {
    // Oculta todas as imagens
    imagens.forEach((img) => img.classList.remove("ativa"));
    // Mostra a imagem atual
    imagens[indice].classList.add("ativa");
}

function mudarImagem(direcao) {
    indiceAtual += direcao;
    // Verifica se o índice ultrapassou o número de imagens
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0; // Volta para a primeira imagem
    } else if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1; // Vai para a última imagem
    }
    mostrarImagem(indiceAtual);
}

// Mostra a primeira imagem ao carregar a página
mostrarImagem(indiceAtual);
