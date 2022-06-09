function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 Ele não ganha uma segunda chance ou 2 Ele ganha uma segunda chance?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opcao 1 Ele não ganha uma segunda chance ou 2 Ele ganha uma segunda chance?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'gameoverjoegardner.html';
        } else{
            window.location.href= 'winjoe.html';
        }
    }   proximaFase();
}