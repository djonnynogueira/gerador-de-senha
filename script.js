//Refenrenciar aos inputs/button - seleção pelas classes
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

//Caracteres usados para gerar as senhas
let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()çÇabcdefghijklmnopqrstuvwxyz";
//Iniciar senha vazia
let novaSenha = "";

//Mostrar a quantidade de caracteres selecionados
sizePassword.innerHTML = sliderElement.value;
//Monstrando alteração da quantidade de caracteres selecionados
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//Função para gerar as senhas
function generatePassword(){
    let pass = "";
    //Laço de repetição para percorrer o charset e gerar a quantidade de carateres selecionados, aleatoriamente
    for (let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
  //Remover o hide para mostrar a senha gerada
    containerPassword.classList.remove("hide");
   
    password.innerHTML = pass;
    novaSenha = pass;
}
//Função para copiar a senha para a área de transferência
function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);   
}
