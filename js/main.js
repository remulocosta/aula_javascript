/*

var nome = "Remulo Costa";
var idade = 38;
var idade2 = "10";
var n1 = 23;
var n2 = 5;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome +" "+ idade + " anos");
//alert(idade + idade2);
console.log("Bem vindo " + nome +" "+ idade + " anos");
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(idade + idade2);
console.log(idade + n1);
console.log(n1 * n2);


var lista = ["macã", "pêra", "laranja", "manga"];
console.log(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(lista.join(" | "));

var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"},
              {nome: "uva", cor: "roxa"},
              {nome: "laranja", cor: "laranja"}];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

var user_idade = prompt("Qual a sua idade");

if (user_idade >= 18) {
  alert("maior de idade");
  console.log("maior de idade");
}else{
  alert("menor de idade");
  console.log("menor de idade");
}

var countW = 0;
console.log("Repetição While");
while (countW <= 5 ){
  console.log(countW);
  //count = count + 1;
  countW ++;
}

var countF;
console.log("Repetição For");
for(countF=0; countF <= 5; countF ++) {
  console.log(countF);
}

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay()+1);
console.log(d.getMonth()+1);
console.log(d.getFullYear());


function soma(n1, n2){
  return n1 + n2;
}
console.log(soma(5, 10));


function setReplace(frase, nome, new_name){
 return frase.replace(nome, new_name);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

var validar = 0;

function validaIdade(idade){
  var validar;
  //validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var valIdade = prompt("Qual a sua idade", 0);
console.log(validaIdade(valIdade));
console.log(validar);

*/

function clicou(){
  //alert("Obrigado por clicar");
  console.log(document.getElementById("agradecimento"));
  //var agradText = document.getElementById("agradecimento");
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //agradText.innerHTML = "<b>Obrigado por clicar</b>";
  //console.log(agradText);
}

function redirecionar() {
  window.open("http://www.uol.com.br");
  window.location.href = "http://www.uol.com.br";
}

function trocarTexto(elemento) {
  //document.getElementById("trocatexto").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltarTexto(elemento) {
  //document.getElementById("trocatexto").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("Página Carregada");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}