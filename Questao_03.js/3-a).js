let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2017,
    cor: "amarelo",
    idade: function(){
    console.log("Este carro tem " + (2023 - this.ano) +" anos")

 }
}
console.log(carro.idade())