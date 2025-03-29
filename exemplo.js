let fullName = 'Robson Jose Silva'
//método string para fatiar o nome 
let arrayName = fullName.split(' ')
// console.log(arrayName) [ 'Robson', 'Jose', 'Silva' ]

console.table(arrayName) //tabela

let lastName = arrayName[0]
let = [arrayName.length - 1] //conta apartir do 1 

function handleSaudacao(fullName) {
    let arrayName = fullName.split(' ')
    let correctArray = arrayName.filter((name) => name.length > 3)

console.log(correctArray)
    let firstName = correctArray[0]
    let lastName = correctArray [correctArray.length - 1]

    return `Bem Vindo, ${firstName}, ${lastName}`

}
console.log(handleSaudacao('Robson Silva Lima Oliveira'))

//crie array de 1 a 5
//Tipo for...forEach 
const numeros = [1, 2, 3, 4, 5]
numeros.forEach((num) => console.log(num * 10)) //vai disparar...percorre a execução que gostariamos que fosse feito. 
numeros.map((num) => console.log(num * 3)) //Multiplicou por 3 
numeros.map((num) => console.log(num * 10)) //cria um novo array com a caracteristica que eu escolhi  
let newNumeros = numeros.map((num) => num * 10)
console.log(newNumeros)