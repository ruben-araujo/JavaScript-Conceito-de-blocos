// temos alguns tipos de escopo que podemos utilizar e nessa aula estou vendo 
// escopo global e escopo de bloco que se caracteriza por serem executados em diferentes partes do código. VAMOS PARA ALGUNS EXEMPLOS: 


var globalVar = "Eu sou global";
function testeFunction() {
    console.log (globalVar);
}
testeFunction(); //imprime: Eu sou global!

// Nesse exemplo temos uma váriavel chamada globalVar que recebe "Eu sou global" Logo após, temos um função que tem o nome de testeFunction que nao é especificado nenhuma propriedade porém, recebe um console.log que recebe nossa váriavel globalVar e imprime o conteúdo armazenado na váriavel.

    //EXEMPLO Nº 2

function testFunction() {
    var localVar = "Eu sou local!";
    console.log(localVar);
}
testFunction(); // imprime: Eu sou local!

console.log (localVar); // ERRO! localVar não está definido .


// Nesse segundo exemplo nós começamos com uma função que recebe o nome de testFunction eu logo após declaramos nossa várivel que recebe o nome de localVar dentro da nossa função e essa váriavel recebe uma string "Eu sou local" e logo depois temos um console.log que recebe nossa váriavel localVar 
//Se usarmos um comando do VS code chamado breakpoint e executarmos esse código veremos que até a linha 19 ele executará nosso código corretamente, logo após ela não será possivel executar o código o console fora da função pois não está definida.

// CONCEITO DE DECLARAÇÃO E INICIALIZAÇÃO 

console.log(myVar);
var myVar = 5;
console.log(myVar);

//Nesse outro conceito nós temos um console.log que recebe uma váriavel que não está definido o valor logo nós chamamos nossa váriavel que recebe o valor 5, perceba que chamamos a váriavel antes de definir o valor dela e logo após temos outro console que recebe nossa váriavel com o valor definido que é 5. Ela irá declarar e inicializar sem o valor definido e iremos definir o valor nas proximas linhas.
