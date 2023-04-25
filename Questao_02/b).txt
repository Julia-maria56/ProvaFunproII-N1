function explode (barulho){
    console.log("chamando barulho...")
    barulho();
}
function barulho(){
    console.log("buuuummmmm")
}
explode(barulho)

/*Explic: É criado uma função chamada explode que recebe um parâmetro (barulho), essa função irá mostrar a mensagem "chamando barulho…" e irá mostrar a função barulho() até agora não definida.
Então é criado a função barulho() que irá mostrar na tela a mensagem "buuuummmmm".
E no final é executado a função explode com o parâmetro barulho
*/