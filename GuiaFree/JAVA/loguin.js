//Validar se os dois imput foram preenchidos(Usuário e senha)//
//Se foram prenechidos, abre a tela inicial//
//Se não, o imput que não foi preenchidos, fica vermelho//

let botaovalidar = document.querySelector("#loga");
let red = '#f8c3c0';

botaovalidar.addEventListener("click", function (event) {

    let campoUsuario = document.getElementById('user').value;
    let campoSenha = document.getElementById('senha').value;

    if (campoUsuario == "bruno" && campoSenha == "1234")
        window.location.href = "guiafa.html";
    else
        document.getElementById("user").style.backgroundColor = red;
    document.getElementById("senha").style.backgroundColor = red;
    alert("Dados incorretos! Por favor, tente novamente.");
});
