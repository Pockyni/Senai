// let nota = 10

// //se você tirar 10 você vai imprimir exelente !]
// if (nota == 10 ){
//     return console.log ('Exelente !')

// //se for menos que  7 esta de recuperação
// } else if (nota >= 7 ) {
// return console.log('Aprovado')
// }

// //se for menos que 6 recuperação
// else if  (nota >= 4 ) {
//     return console.log ('Recuperação')
// }
//  //se for menos que 5 reprovado
// else {
//     return console.log ('Reprovado')
// }

let nota = 9

 switch (nota) {
    case 10: return console.log ('Exelente !')
    case nota >= 7: return console.log ('Aprovado !')
    case nota >= 4: return console.log ('Recuperação !')

    default: return console.log('Reprovado !')

      // o break fica sombriado quando não quer o retorno
 }
