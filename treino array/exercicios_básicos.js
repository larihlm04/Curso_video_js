//1
//numeros menores que 50 na array
let numeros = [10, 25, 60, 5, 80, 45]
for (let numero of numeros) {
    if (numero < 50) {
        console.log(numero)
    }
}

//2
//array só com número impares
let numeros = [10, 25, 60, 5, 80, 45]
for (let numero of numeros){
    while(numero % 2 !== 0){
        console.log(numero)
    }
}

//3
//array numeros multiplicados por 5
let numeros = [10, 25, 60, 5, 80, 45]
for (let numero of numeros){
    numero =  numero * 5
    console.log(numero)
}