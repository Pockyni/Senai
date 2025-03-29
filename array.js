const fruits = ['maça', 'uva', 'laranja'] //typeScript e Number 
console.log(fruits)
console.table(fruits) //tabelinha mostra os indices e valores. maça e o 0, uva 1, laranja 2.
console.log(fruits.length) //metodos são funções sobre um tipo string, tipo array, tipo objeto, tipo number, etc...
//O length conta itens. length começa com 1 e index começa com 0. DECORAR !!!

//indice dos itens
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

//array de números de 0 a 10 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const fullName = 'Maria Jose dos Santo Oliveira' //variavel string 
let arrayName = fullName.split(' ') //split significa dividir, separar
console.log(arrayName) //contagem dos numero de carcteres e o espaço e um caractere.
console.log(arrayName[0]) //puxa o primeiro nome 
console.log(arrayName.length)//quantidade de itens
console.log(arrayName[arrayName.length - 1])//ultimo nome

//primeiro e ultimo nome
console.log('Olá Maria', (arrayName[4]))
console.log('Olá', [arrayName[0]], [arrayName[4]])

//crie uma função o nome completo. e retorne Olá primeiro e ultimo nome. 


function handleSaudacao (fullName) {
    let arrayName = fullName.split(' ')
    let firstName = arrayName[0]
    let lastName = arrayName [arrayName.length -1]

    return`Bem Vindo, ${firstName}, ${lastName}`

}
console.log(handleSaudacao('Robson Silva Lima Oliveira'))