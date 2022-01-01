const container1 = document.getElementById('container-main1');
const container2 = document.getElementById('container-main2');
const container3 = document.getElementById('container-main3');
const container4 = document.getElementById('container-main4');
const container5 = document.getElementById('container-main5');
const container6 = document.getElementById('container-main6');

console.log(screen.width);
//---------2-----------------
//FOR TOP RANKED ANIME DATABASE
const get = async () => {
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
    const data = await req.json()
    const list = data.top;
    // console.log("top anime - ",list);
    for(var i=0; i<5;i++){
        console.log(list[i]);
        var current = list[i];
        container2.innerHTML += `
        <div class="card">
            <img src="${current.image_url}" class="card-image">
            <b>${current.title}</b>
            rank - ${current.rank}
            <a href="${current.url}">open</a>
        </div>
        `
    }
}
get()

//UPCOMING ANIME
const get2 = async () =>{
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.top;
    // console.log("Upcomning anime - ", list)
    for(var i=0; i<5;i++){
        console.log(list[i])
        var title = list[i].title;
        var img = list[i].image_url;
        var rank = list[i].rank;
        var link = list[i].url;
        container3.innerHTML += `<div class="card">
        <img src="${img}" class="card-image">
        <h4>${title}</h4><br>
        Rank- ${rank}
        <a href="${link}">Read more</a>
        </div>`
    }
}
get2()

//TOP RATED MANGA

const get3 = async () =>{
    const req = await fetch("https://api.jikan.moe/v3/top/manga", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.top;
    console.log("top manga - ",list);
    for(var i=0; i<5;i++){
        console.log(list[i]);
        var current = list[i];
        container5.innerHTML += `
        <div class="card">
            <img src="${current.image_url}" class="card-image">
            <h4>${current.title}</h4>
            rank - ${current.rank}
            <a href="${current.url}">open</a>
        </div>
        `
    }
}
get3()

//TRENDING MANGA
const get4 = async () =>{
    const req = await fetch("https://kitsu.io/api/edge/trending/manga", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.data;
    for(var i in list){
        var img = data.data[i].attributes.posterImage.original;
        container.innerHTML += `<div class="card">
        <img src="${img}" class="aimg">
        </div>`;
    }
}
// get4();

//TRENDING ANIME
const get5 = async () =>{
    const req = await fetch("https://kitsu.io/api/edge/trending/anime", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.data;
    for(var i in list){
        var img = data.data[i].attributes.posterImage.medium;
        console.log(data.data[i].attributes.posterImage)
        container.innerHTML += `<div class="card">
        <img src="${img}" class="card-img">
        </div>`;
    }
}
// get5();