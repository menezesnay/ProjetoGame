function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 Um gato de estimação ou 2 Um gato de terapia?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opção 1 Um gato de estimação ou 2 Um gato de terapia?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'primeiropassosrbigodes.html';
        } else{
            window.location.href= 'segundopassosrbigodes.html';
        }
    }   proximaFase();
}