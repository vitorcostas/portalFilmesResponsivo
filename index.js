const API_KEY = '75f99ecd3434b913c980be8ce7483e9e'
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500'

function mostraFilmes(){    
    let tela_query = document.getElementById('tela_query');
    let texto = '';
    let query = document.getElementById('txtPesquisa').value;
    let titulo = '';
    if (query == '')
        titulo = ` <h2>Populares</h2> ` 
    else
        titulo = ` <h2>Resultados para: "${query}"</h2> ` 

    let titulo_query = document.getElementById('titulo_query');
    
    titulo_query.innerHTML = titulo;      
    //Montar texto HTML das noticias
    // let dados = JSON.parse(evt.target.responseText);
    let dados = JSON.parse(this.responseText);
    for (let i = 0; i < 6; i++){
        let filme = dados.results[i];
        let title = filme.original_title;
        for (let j = 0; j < title.length; j++){
            if (title[j] == ' ')
                title[j] = '+';
        }        
        texto += 
                `
                <div class="card col-sm-12 col-md-6 col-lg-4" >
                    <img src="${IMG_PREFIX + filme.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${filme.original_title}</h5>
                        <p><strong>Release date: ${filme.release_date}</strong></p>
                        <p class="card-text">${filme.overview}</p>
                        <a href="https://www.imdb.com/find?q=${title}&ref_=nv_sr_sm" class="btn btn-primary">See more</a>
                    </div>
                </div>
                `
    }
    tela_query.innerHTML = texto;
}


function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);
    xhr.onload = mostraFilmes;
    xhr.send();
}
function pesquisaFilmes(){
    let query = document.getElementById('txtPesquisa').value;
    console.log(query);
    let xhr = new XMLHttpRequest();
    xhr.open('GET',  'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query);
    xhr.onload = mostraFilmes;
    xhr.send();
}
https://www.imdb.com/find?q=sex+and+the+city&ref_=nv_sr_sm
document.getElementById('btn_pesquisa').addEventListener('click', pesquisaFilmes);

