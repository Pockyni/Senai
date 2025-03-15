let valorDaCompra = 800

//se o total da compra for 1000 o cliente recebera 30% de desconto
// coloquei o && : and porém podemos executar exemplo else if (valorDaCompra >= 500)
//else if são cenarios de casos e condições

if ( valorDaCompra == 1000 ){
return console.log ('Recebeu 30% de desconto')
}
//compra entre 500 e 1000 recebe 20%
else if ( valorDaCompra >= 500 && valorDaCompra <= 1000 ){
return console.log ('Recebeu 20% de desconto')
}
//compra entre 200 e 500 recebe 10%
else if ( valorDaCompra >= 200 && valorDaCompra <= 500 ){
return console.log ('Recebeu 10% de desconto')
}
//compra abaixo de 200 não recebe desconto
else {
return console.log ('Não recebeu desconto')
}