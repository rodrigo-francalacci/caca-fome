//MIDIA PAINEL ADM

const url = "https://opensheet.elk.sh/18LO1iqvPN3iIn2j-H3LLdIkGLp8DlETbTkxb1pJ8m6A/blog-posts-table";
const tag = document.querySelector("#midia-blog");



//tag.innerHTML = "<p>Loading...</p>";
var itemInnerHtml = "";



fetch(
    url
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((row) => {
        tag.innerHTML = tag.innerHTML +  '<div class="midia-item"><div class="midia-item-left"><img src="' + row.IMGURL + '"></div><div class="midia-item-right"><p>' + row.TEXTO + '</p><div class="midia-item-bot"><a class="top-menu-nav-a" href="' + row.LINK + '">Ver mais</a></div></div></div>';
        
      });
    });

 
    



