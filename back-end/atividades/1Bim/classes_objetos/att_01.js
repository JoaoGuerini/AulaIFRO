//1
var nome = "João Pedro Guerini Pasquali";
var idade = 16;
console.log("Olá, meu nome é", nome, "e eu tenho", idade,"anos.");

//------------------------------------------------------------------

//2
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

//------------------------------------------------------------------

//3
console.log(typeof idade === "number");

//------------------------------------------------------------------
0
//4
var peso = 70;
var altura = 1.80;

console.log(Math.ceil(peso / (altura**2)));

//------------------------------------------------------------------
//5
var num_1 = 35;
var num_2 = 10;

console.log("Soma:", num_1, "+" , num_2 , "=", num_1 + num_2,
"\nSubtração:", num_1, "-" , num_2 , "=", num_1 - num_2,
"\nMultiplicação:", num_1, "x" , num_2 , "=", num_1*num_2,
"\nDivisão:", num_1, ":" , num_2 , "=", num_1/num_2);

//------------------------------------------------------------------
//6

var idade_1 = 25;
var idade_2 = 18;

if (idade_1 > idade_2) {
    console.log("A pessoa 1 é mais velha que a pessoa 2");
}
else if (idade_1 == idade_2) {
    console.log("A pessoa 1 e pessoa 2 tem a mesma idade");
}
else {
    console.log("A pessoa 2 é mais velha que a pessoa 1");
}

//------------------------------------------------------------------
//7

var idade_3 = 18;

idade_3 >= 18
    ?console.log("Maior idade")
    :console.log("Menor idade")

//------------------------------------------------------------------
//8

var num = 15;

num % 2 == 0
    ?console.log("Esse número é par")
    :console.log("Esse número é impar")