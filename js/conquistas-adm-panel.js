//CONQUISTAS PAINEL ADM
var data;

    LoadData();
async function LoadData(){
    
    // desenvolvedor ID 16nFRr0z6JcTO6tMVSavrGTbthvWJDDog9md66M7DNqQ
    // caça-fome ID 1_jdR3K3-8_KjGI6zrQei7oli9829t225VMeAyDYA5RI
    let data = await drive('1_jdR3K3-8_KjGI6zrQei7oli9829t225VMeAyDYA5RI');
    console.log(data);
   
    //carrega conquistas parte 1
    var i;
    for (i = 1; i < 8; i++) {
    LoadItem(data[i], data[i].a);
    }
    
    //carrega balanças
    LoadOther(data[10], data[11], data[14].c, data[17]);
        
    
}

//carrega conquistas parte 1
function LoadItem(itemData, n){
    
    var IDrealizado = "item-" + n + "-realizado";
    var IDdescricao = "item-" + n + "-descricao";
    var IDmeta = "item-" + n + "-meta";
    var IDbar = "conquistas-bar-" + n;
    
    document.getElementById(IDrealizado).innerHTML = itemData.e;
    document.getElementById(IDdescricao).innerHTML = itemData.b;
    document.getElementById(IDmeta).innerHTML = itemData.f;
    
    var percentage = (itemData.c/itemData.d)*100 + "%"
    
    document.getElementById(IDbar).style.width = percentage;
    
}

    //carrega balanças
function LoadOther(balanca1, balanca2, resultado, cestometro){

    //load balanca1
document.getElementById("item-7-socorrido").innerHTML = balanca1.c;
document.getElementById("item-7-aberto").innerHTML = balanca1.d;  

    //load balanca2
document.getElementById("item-8-socorrido").innerHTML = balanca2.c;
document.getElementById("item-8-aberto").innerHTML = balanca2.d;
    
    //load resultado
    var resultImg;
    
    switch(parseInt(resultado)) {
  case 1:
    resultImg = "url('http://francalacci.com/release/caca-fome-beta/img/conquistas/resultados-1-ruins.png')";
    break;
  case 2:
    resultImg = "url('http://francalacci.com/release/caca-fome-beta/img/conquistas/resultados-2-regulares.png')";
    break;
  case 3:
    resultImg = "url('http://francalacci.com/release/caca-fome-beta/img/conquistas/resultados-3-bons.png')";
    break;
  case 4:
    resultImg = "url('http://francalacci.com/release/caca-fome-beta/img/conquistas/resultados-4-otimos.png')";
    break;
}

    
document.getElementById('item-9-resultado').style.backgroundImage = resultImg;
    
    
    //load cestometro
document.getElementById("item-10-numero").innerHTML = cestometro.c;
document.getElementById("item-10-unidade").innerHTML = cestometro.d;

    
}

