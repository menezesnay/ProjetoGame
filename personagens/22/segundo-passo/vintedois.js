function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 John Gardner ou 2 Sr Bigodes?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisão: opcao 1 John Gardner ou 2 Sr Bigodes?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'lossvintedois.html';
        } else{
            window.location.href= 'terceiropassovintedois.html';
        }
    }   proximaFase();
}