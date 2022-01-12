const container2 = document.getElementById('container-main2');
const container3 = document.getElementById('container-main3');
const container4 = document.getElementById('container-main4');
const container5 = document.getElementById('container-main5');
const container6 = document.getElementById('container-main6');
const container7 = document.getElementById('container-main7');
const quoteContainer = document.getElementById('quote');
const By = document.getElementById('By');

//---------2-----------------
//FOR TOP RANKED ANIME DATABASE
const topAnime = async () => {
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
    const data = await req.json()
    const list = data.top;
    // console.log("top anime - ",list);
    for(var i=0; i<4;i++){
        var current = list[i];
        container2.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${current.image_url}" class="card-image">
                <h4>${current.title}</h4>
            </div>
            </div>`
    }
}
topAnime()


//UPCOMING ANIME - 3
const upcomningAnime = async () =>{
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.top;
    // console.log("Upcomning anime - ", list)
    for(var i=0; i<4;i++){
        var title = list[i].title;
        var img = list[i].image_url;
        var rank = list[i].rank;
        var link = list[i].url;
        container3.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${img}" class="card-image">
                <h4>${title}</h4>
            </div>
            </div>`
    }
}
upcomningAnime()


//TRENDING ANIME - 4
const trendingAnime = async () =>{
    const req = await fetch("https://api.aniapi.com/v1/anime?year=2021&status=0", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.data.documents;
    for(var i=0; i<4;i++){
        // console.log("ta- ", list[0]);
        container4.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${list[i].cover_image}" class="card-image">
                <h4>${list[i].titles.en}</h4>
            </div>
            </div>
            `
    }
}
trendingAnime();


//TOP RATED MANGA -5
const topManga = async () =>{
    const req = await fetch("https://api.jikan.moe/v3/top/manga", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.top;
    // console.log("top manga - ",list);
    for(var i=0; i<4;i++){
        // console.log("tm",list[0]);
        var current = list[i];
        container5.innerHTML += `
        <div class="card-container">
            <div class="card">
                <a href="${current.url}"><img src="${current.image_url}" class="card-image"></a>
                <h4>${current.title}</h4>
            </div>
            </div>`
    }
}
topManga()


//TRENDING MANGA -6
const trendingManga = async () =>{
    const req = await fetch("https://kitsu.io/api/edge/trending/manga", {
        "method": "GET",
    })
    const data = await req.json();
    // const list = data.data;
    for(var i=0; i<4;i++){
        // console.log("trm- ",data.data[0].attributes);
        var img = data.data[i].attributes.posterImage.original;
        container6.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${img}" class="card-image">
                <h4>${data.data[i].attributes.canonicalTitle}</h4>
            </div>
            </div>`;
        }
}
trendingManga();


//GET QUOTES
const getQuote = async () =>{
    const req = await fetch("https://animechan.vercel.app/api/random");
    const data = await req.json();
    // console.log(data);
    quoteContainer.innerText = `" ${data.quote} "`;
    By.innerHTML = `<p> - ${data.character} <br>from ${data.anime} </p>`;
}
getQuote();

