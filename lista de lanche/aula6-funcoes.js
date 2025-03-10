let lanchonete = ["X-tudo", "X-salada", "X-hamburgue", "X-egg", "X-calabresa", "X-beicon", "X-frango"]
let valores = [30, 10, 15, 10, 15, 15, 20]

function mostraLanches() {
    contador = 0;
    while (contador < lanchonete.length){
        let c2 = contador + 1
        console.log (c2 + " - " + lanchonete[contador] + " R$ " + valores[contador])
        contador = contador + 1;
    }
}

function adicionaLanche(novoLanche, novoValor){
    lanchonete.push(novoLanche);
    valores.push(novoValor)
}

function mostraPromo(){
    let valoresAtualizados = valores.map((valor) => valor - (valor*0.15));
    console.log(valoresAtualizados)
    contador = 0;
    while (contador < lanchonete.length){
        let c2 = contador + 1
        console.log (c2 + " - " + lanchonete[contador] + " R$ " + valores[contador])
        contador = contador + 1;
    }
}

mostraLanches();
adicionaLanche("X-especial" , "R$25");
mostraLanches();
mostraPromo();



