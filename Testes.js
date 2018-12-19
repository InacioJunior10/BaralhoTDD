//#region Testes
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

function testeAntesMeioDia(){
    var h = new FakeHora(11);
    
    if (h.getHora().toString() < 12){
        console.log("Sucesso - testeAntesMeioDia");
    }else{
        console.log("Erro - testeAntesMeioDia");
    }
}

function testeDepoisMeioDia(){
    var h = new FakeHora(13);
    
    if (h.getHora().toString() > 12){
        console.log("Sucesso - testeDepoisMeioDia");
    }else{
        console.log("Erro - testeDepoisMeioDia");
    }
}

function testeBaralhoViciadoAntesMeioDia(){
    var viciado = new BaralhoViciado(11);

    if (viciado.cartas.toString() == "CA,C2,C3,C4,C5,C6,C7,C8,C9,C10,CJ,CQ,CK,EA,E2,E3,E4,E5,E6,E7,E8,E9,E10,EJ,EQ,EK,OA,O2,O3,O4,O5,O6,O7,O8,O9,O10,OJ,OQ,OK,PA,P2,P3,P4,P5,P6,P7,P8,P9,P10,PJ,PQ,PK"){
        console.log("Sucesso - testeBaralhoViciadoAntesMeioDia");
    }else{
        console.log("Erro - testeBaralhoViciadoAntesMeioDia");
    }
}

function testeBaralhoViciadoDepoisMeioDia(){
    var baralho = new BaralhoViciado(11);
    var viciado = new BaralhoViciado(13);

    if (baralho.cartas.toString() != viciado.cartas.toString()){
        console.log("Sucesso - testeBaralhoViciadoDepoisMeioDia");
    }else{
        console.log("Erro - testeBaralhoViciadoDepoisMeioDia");
    }
}

function testeDarCarta(){
    var baralho = new Baralho();
    var totalAntes = baralho.cartas.length;

    var jogador = new Jogador();
    var carta = jogador.darCarta(baralho);

    var totalDepois = baralho.cartas.length;

    if (totalDepois == (totalAntes -1)){
        console.log("Sucesso - testeDarCarta");
    }else{
        console.log("Erro - testeDarCarta");
    }    

    if (carta == "CA"){
        console.log("Sucesso - testeDarCarta - Primeira Carta");
    }else{
        console.log("Erro - testeDarCarta - Primeira Carta");
    }
}
//#endregion

//#region Chamadas dos Testes
testeMontarBaralho();
testeOrdenar();
testeEmbaralhar();
testeAntesMeioDia();
testeDepoisMeioDia();
testeBaralhoViciadoAntesMeioDia();
testeBaralhoViciadoDepoisMeioDia();
testeDarCarta();
//#endregion