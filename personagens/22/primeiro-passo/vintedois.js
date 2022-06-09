function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 Sr Bigodes ou 2 John Gardner?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opcao 1 Sr Bigodes ou 2 John Gardner?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'lossvintedois.html';
        } else{
            window.location.href= 'segundopassovintedois.html';
        }
    }   proximaFase();
}