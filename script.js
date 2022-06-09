var escolhaPersonagens 

function escolhaPersonagens () {
    escolhaPersonagens = prompt('1 Joe Gardner 2 22 3 Sr Bigodes');
while (true) {
    if (escolhaPersonagens == 1 || escolhaPersonagens == 2 || escolhaPersonagens == 3) {
        break
    } else {
        alert("Opção inválida, digite uma entre 1 e 3!");
        escolhaPersonagens = prompt('1 Joe Gardner 2 22 3 Sr Bigodes');
    }
}
if (escolhaPersonagens == 1) {
    location = ('./personagens/joe-gardner/primeiro-passo/primeiropassojoe.html')
} else if (escolhaPersonagens == 2) {
    location = ('./personagens/22/primeiro-passo/primeiropassovintedois.html')
}
else {
    location = ('./personagens/sr-bigodes/primeiro-passo/primeiropassosrbigodes.html')
}
}   