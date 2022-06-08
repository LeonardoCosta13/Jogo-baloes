// 1 - Criar os balões
// 2 - Estourar os balões
// 3 - Carregar jogo

var total =0;

function criarBalao(){
    // document.createElement vai criar um elemneto na tela
    var balao = document.createElement("div");
    balao.setAttribute("class","balao");
//  Math.random gera um numero aleatorio, Math.floor cria numeros aleatorios inteiros.
       
        var x = Math.floor(Math.random() * 500)
        var y = Math.floor(Math.random() * 400)

        balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
        // <div class="balao" style="left:30px; top:60px"></div>
        balao.setAttribute("onclick","estourar(this)");
        // this referenciando ao atributo balao.

        // para poder mostrar na tela, body para poder criar dentro do corpo do site, 
        document.body.appendChild(balao);
        

}

function estourar(objeto){
// Remover o objeto.
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById("total");
    score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo(){
    //setInterval é um comando que vai acionar uma determinada função em um tempo especifico. 
    setInterval(criarBalao, 1000);
}