//MIDIA PAINEL ADM
var data;

    LoadData();

async function LoadData(){
    
    //desenvolvedor ID 13sHFd7PQLFYH9sQ9OB2Le756NhE5MJkbGRXMJ1617NA
    //caça-fome ID 1STdaRhUgkIwo66BCkwlB9Mk14nHpiBYDE9WheIL6bVI
    
    let data = await drive('13sHFd7PQLFYH9sQ9OB2Le756NhE5MJkbGRXMJ1617NA');
    data = data.reverse();
    console.log(data);
   
    //carrega blog-midia
    var i;
    var midiaItens = "";
    for (i = 0; i < data.length; i++) {
    midiaItens = midiaItens + LoadItemBlog(data[i]);
    }
    
    
    document.getElementById("midia-blog").innerHTML = midiaItens;
}

function LoadItemBlog(dataBlog){
    
var itemInnerHtml ='<div class="midia-item"><div class="midia-item-left"><img src="' + dataBlog.imgurl + '"></div><div class="midia-item-right"><p>' + dataBlog.texto + '</p><div class="midia-item-bot"><a class="top-menu-nav-a" href="' + dataBlog.link + '">Ver mais</a></div></div></div>'

return itemInnerHtml;   
}



