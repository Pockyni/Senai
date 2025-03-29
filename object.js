const webSite = { //armazena valores e informações. O que a propriedade e retorna o nome. Qualquer coisa. Tipagem Dinamica.
    name: 'code trouble',
    since: 2024,
    descricao: 'Site de dev para dev'
}

console.log (webSite.name) //Se eu quiser retornar só um objeto o (.) "Ponto" vai ate a propriedade. webSite.name
console.log (webSite.since) //também podemos separar colocar as virgulas.
console.log (webSite.descricao) 


const client = {
    name: 'Nicole', 
    cpf: '43176816847', //4devs site que gera dados ficticios. 
    phone: '55123456789',
    age: 22,
    yearBirthday: 2002
}
console.log(client.phone)

client.phone = '256883838383'

console.log(client.phone) //trocou de numero porém apenas apatir da linha 20. 

client.email='temp@gmail.com' //adicionar email 
console.log(client) //adicionar o email do cliente

// delete client.name //deletar dado
// console.log(client)

//olá e nome do cliente
function saudacao (name) {
    return `Olá, ${name} ! Bem vindo !` // interpolação pra colocar nome e chamar 
}
console.log(saudacao(client.name)) 

function numero (age) {
    return `Sua idade e: ${age} ` //interpolação de idade chamando dentro do objeto
}
console.log(numero(client.age))

function idadeFutura(yearBirthday) { //idade dele em 2025 - 25
    return `Sua idade esse ano sera: ${2025 - yearBirthday}`  
}
console.log(idadeFutura(client.yearBirthday))
//função anonima const henadleCorrectAge = () => {}


    const getNumber = () => console.log('getNumber')
    getNumber( 

    )
    setTimeout(() => {
        // console.log('Estou aqui')
    
    }, 3000) 

    const handleCorrectAge = (name, yearBirthday) => { //constante que recebe o nome 
        let date = new Date
        let result = date.getFullYear () - yearBirthday; // 2025 - TearBirthday porém dessa forma e so chamar o ano 
        return `Olá ${name}, você está com ${result} anos de idade`
    }

    console.log(handleCorrectAge(client.name, client.yearBirthday))

    const product = {
        name: 'Tv Samsung 42',
        category: 'Eletronic',
        price: 1669.99,
        feedback: [ // array - matrix onde coloca varios objetos 
            {
                clientName: 'Maria',
                massage: 'Entrega rápida e funcional'
            },

            {
                clientName: 'Paulo',
                massage: 'Pessimo produto, num compensa'
            }
        ]
    }

//desestruturação
const {price, feedback, } = product //vira uma variavel que tras automatico as variaveis que você quer
console.log(product.price, 'manipulação de objeto simples')
console.log(price, 'manipulação do objeto em desestruturação')