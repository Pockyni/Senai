
// 
let compra = 400.00
let compraMinima = 500.00
let desconto = 20/100 || 0.20

let elegivel = compraMinima < compra 
console.log(elegivel )

if (compraMinima < compra) {
    return console.log('Você é elegivel ao desconto:', compra * desconto)
}
else{
    return console.log('Para ganhar desconto gaste mais:', compraMinima - compra )
}


