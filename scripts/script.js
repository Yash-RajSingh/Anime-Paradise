const container = document.getElementById('container');

//FOR TOP RANLED ANIME DATABASE
const get = async () => {
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
    const data = await req.json()
    // console.log(data.top);
    const list = data.top;
    console.log(list);
    for(var i in list){
        console.log(list[i].title,list[i].rank,list[i].image_url)
        container.innerHTML += `<div class="card">
        <img src="${list[i].image_url}" class="aimg">
        <h2>${list[i].title}</h2>
        Rank - ${list[i].rank}<br>
        <a href="${list[i].url}">Read more</a>
        </div>`
    }
}
// get()


//For anime news
const get2 = async () => {
    const req = await fetch("https://api.jikan.moe/v3/anime/1/news")
    const data = await req.json()
    const list = data.articles;
    console.log(list);
    for(var i in list){
        var date = list[i].date
        var readable_date = new Date(date).toDateString();
        container.innerHTML += `<div class="card">
        <img src="${list[i].image_url}" class="aimg">
        <div>
        <h1>${list[i].title}</h1>
        <p>Intro - ${list[i].intro} 
        <a href="${list[i].url}">Read more</a></p>
        Date- ${readable_date} By- ${list[i].author_name}
        </div>
        </div>`
    }
}
// get2()

