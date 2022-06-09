function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 Ele morre ou 2 Ele Sobrevive?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opção 1 Ele morre ou 2 Ele Sobrevive?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'segundopassogato.html';
        } else{
            window.location.href= 'terceiropassogato.html';
        }
    }   proximaFase();
}