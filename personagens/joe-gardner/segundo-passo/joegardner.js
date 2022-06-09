function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 Caiu no Metrô ou 2 Caiu no bueiro?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opcao 1 Caiu no Metrô ou 2 Caiu no bueiro?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'lossjoe.html';
        } else{
            window.location.href= 'terceiropassojoe.html';
        }
    }   proximaFase();
}