function validar() {
    //Validar se os todos os campos foram preenchidos//
    //Se foram prenechidos, mostras o dados preenchidos no quadro abaixo//
    //Se não, os não preenchidos, fica vermelho//

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let idade = document.getElementById("idade").value;
    let pais = document.getElementById("pais").value;
    let cidade = document.getElementById("cidade").value;
    let nasciona;
    let validado = true;
    let green = '#c0f8de';
    let red = '#f8c3c0';
    let saida = "";
    let semdados = 'Você não preencheu o campo: <br>';


    if (nome == "") {
        document.getElementById("nome").style.backgroundColor = red;
        saida += semdados + 'Nome <br>';

    } else {
        document.getElementById("nome").style.backgroundColor = green;
        saida += 'Nome:' + nome + '<br>';
    }

    if (sobrenome == "") {
        document.getElementById("sobrenome").style.backgroundColor = red;
        saida += semdados + 'Sobrenome <br>';

    } else {
        document.getElementById("sobrenome").style.backgroundColor = green;
        saida += 'Sobrenome:' + sobrenome + '<br>';
    }

    if (idade == "") {
        document.getElementById("idade").style.backgroundColor = red;
        saida += semdados + 'Idade <br>';

    } else {
        document.getElementById("idade").style.backgroundColor = green;
        saida += 'Idade:' + idade + '<br>';
    }

    if (pais == "") {
        document.getElementById("pais").style.backgroundColor = red;
        saida += semdados + 'País de Origem <br>';

    } else {
        document.getElementById("pais").style.backgroundColor = green;
        saida += 'País de Origem:' + pais + '<br>';
    }

    if (cidade == "") {
        document.getElementById("cidade").style.backgroundColor = red;
        saida += semdados + 'Cidade <br>';

    } else {
        document.getElementById("cidade").style.backgroundColor = green;
        saida += 'Cidade:' + cidade + '<br>';
    }

    document.getElementById("paragdados").innerHTML = saida;

}


document.getElementById("valida").addEventListener("click", validar);
document.getElementById("loga").addEventListener("click", loguin);
