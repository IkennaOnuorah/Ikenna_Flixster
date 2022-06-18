//API Key and API URL
const APIKEY = "d40d5e3c1a513298a52115d1daef06e6";
const APIURL = 'https://api.themoviedb.org/3/search/movie?api_key=' + APIkey + '&query=' + evt.target.movie.value;
//now playing
const APIURL2 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1 ';
//for searching
const APIURL3 = 'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=morbius&page=1&include_adult=false ';

//function waits until it is called to the console log
async function getMovies(){
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    console.log(respData);
    
    respData.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = IMGPATH +movie.poster_path

        document.body.appendChild(img);
    });



    return respData;
}


getMovies();