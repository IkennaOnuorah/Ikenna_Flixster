//API Key and API URL
const APIKEY = "d40d5e3c1a513298a52115d1daef06e6";
const APIURL = "https://www.themoviedb.org/t/p/w500";
let page = 1;
let searchedMovie = false;
let search_input;
//now playing
//const APIplaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d40d5e3c1a513298a52115d1daef06e6&language=en-US&page=1 ';
let APIplaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}$language=en-US&page=${page}`
//for searching
// APIsearch = 'https://api.themoviedb.org/3/search/movie?api_key=d40d5e3c1a513298a52115d1daef06e6&language=en-US&query=morbius&page=1&include_adult=false ';

//error message if nothing is found based on movie search word
const generateError = (err) => {
    document.lastChild.innerHTML += `
        <span style="color: red;">${err} not found</span>`;
}

//function waits until it is called to the console log
async function getMovies(){
    const resp = await fetch(APIplaying);
    const respData = await resp.json();
    console.log(respData);
    
    respData.results.forEach((movie) => {
        const img = document.createElement('img');
        img.src = APIURL + movie.poster_path

        document.body.appendChild(img);
    });
   return respData;
}

getMovies();


async function getData(search_input){

}
function getSearchResult() {
    var search = document.getElementById("search_input").value;
    jQuery.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}$language=en-US&query=morbius&=${page}&include_adult=false` + search + "=json", function(result) {
      jQuery.each(result, function(i, field) {
        jQuery("div").append(field + " ");
      });

    });
}

async function searchmovies(){
    const resp = await fetch(APIsearch);
    const respData = await resp.json();
    console.log(respData);

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search_input}searchkey&page=${page}`;
    
    respData.results.for((movie) => {
        const img = document.createElement('img');
        img.src = APIURL + movie.poster_path

        document.body.appendChild(img);
    });



    return respData;
}
