"use strict";
let numero = 10;
let segundonumero = 2;
let terceironumero = 10;
console.log((numero / segundonumero) + terceironumero);
let idaden = 20;
let texton = "Minha idade é: " + idaden;
console.log(texton);
let idade = 16;
let texto = "Minha idade é: ";
console.log(texto + idade);
let verdadeiro = false;
console.log(verdadeiro);
let arr = [1, 2, 3, 5, 6, 10, 50, 60];
console.log(arr);
console.log("tamanho do array" + arr.length);
console.log("acessando a posição do array" + arr[5]);
console.log(arr.indexOf(60));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log('Exibindo meu texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro Texto";
}
console.log(exibirOutroTexto());
function retornaN() {
    return 10;
}
console.log(retornaN());
function retornaT() {
    return "retornar string";
}
console.log(retornaT());
function soma(a, b) {
    return a + b;
}
console.log("o valor da soma é:" + soma(50, 100));
/*exercicio 1*/
function multiplicação(a, b) {
    return a * b;
}
console.log("o valor da multiplicação é:" + multiplicação(5, 5));
/*exercicio 2*/
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("o valor da formula é:" + formula(10, 10, 2));
/*exercicio 3*/
function string(a, b) {
    return ("O resultado da multiplicação é:" + (a * b));
}
console.log(string(10, 5));
