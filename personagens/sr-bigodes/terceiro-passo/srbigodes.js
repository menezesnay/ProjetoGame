function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 A alma foi roubada do Sr Bigodes ou 2 A alma foi roubada da 22?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opção 1 A alma foi roubada do Sr Bigodes ou 2 A alma foi roubada da 22?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'lossrbigodes.html';
        } else{
            window.location.href= 'winsrbigodes.html';
        }
    }   proximaFase();
}