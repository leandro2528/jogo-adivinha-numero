function verificar() {
    let n1 = document.querySelector('#n1').innerHTML;
    let n2 = document.querySelector('#n2').value;

    if(n1 == n2) {
        alert('VOCÊ ACERTOU.');
    } else {
        alert('VOCÊ ERROU!!!');
    }
    resetar();
}

function resetar() {
    document.querySelector('#n2').value = '';
    document.querySelector('#n2').focus();

    let trocarNumero = Math.floor(Math.random() * 100);

    document.querySelector('#n1').innerHTML = trocarNumero;
}


