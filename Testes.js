function testeMontarBaralho(){
    var baralho = new Baralho();

    if (baralho.cartas.length == 52){
        console.log("Sucesso - testeMontarBaralho");
    }else{
        console.log("Erro - testeMontarBaralho");
    }
}

function testeOrdenar(){
    var baralho = new Baralho();

    if (baralho.cartas.toString() == "CA,C2,C3,C4,C5,C6,C7,C8,C9,C10,CJ,CQ,CK,EA,E2,E3,E4,E5,E6,E7,E8,E9,E10,EJ,EQ,EK,OA,O2,O3,O4,O5,O6,O7,O8,O9,O10,OJ,OQ,OK,PA,P2,P3,P4,P5,P6,P7,P8,P9,P10,PJ,PQ,PK"){
        console.log("Sucesso - testeOrdenar");
    }else{
        console.log("Erro - testeOrdenar");
    }
}

function testeEmbaralhar(){
    var baralho = new Baralho();
    var baralho2 = new Baralho();

    baralho = embaralhar(baralho);
    if (baralho.cartas.toString() != baralho2.cartas.toString()){
        console.log("Sucesso - testeEmbaralhar");
    }else{
        console.log("Erro - testeEmbaralhar");
    }
}

testeMontarBaralho();
testeOrdenar();
testeEmbaralhar();