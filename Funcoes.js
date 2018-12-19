var naipes = ["C", "E", "O", "P"];
var numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var Baralho = function(){
    this.cartas = [];

    this.montarBaralho = function(){
        naipes.forEach(naipe => {
            numeros.forEach(numero => {
                this.cartas.push(naipe + numero);
            });
        });    
    };

    this.montarBaralho();
};

function embaralhar(baralho){
    var embaralhado = new Baralho();
    embaralhado.cartas = [];
    var index;

    while (baralho.cartas.length > 0) {
        index = Math.floor(Math.random() * baralho.cartas.length - 1)
        embaralhado.cartas.push(baralho.cartas.splice(index, 1));
    }

    return embaralhado;
}