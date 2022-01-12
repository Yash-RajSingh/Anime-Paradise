//GETTING ALL THE DOM ELEMENTS
const container = document.getElementById('container');
const heading = document.getElementById('heading');
const choice = sessionStorage.getItem("Id");

//GET QUOTES
const getQuote = async () =>{
    const req = await fetch("https://animechan.vercel.app/api/random");
    const data = await req.json();
    // console.log(data);
    quoteContainer.innerText = `" ${data.quote} "`;
    By.innerHTML = `<p> - ${data.character} <br>from ${data.anime} </p>`;
}
getQuote();

// CHOICE 1 - TOP ANIME
const TopAnime = async () => {
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
    const data = await req.json()
    const list = data.top;
    for(var i in list){
        container.innerHTML += `<div class="TPa-card">
            <div>
                <img src="${list[i].image_url}" class="TPa-img">
            </div>
            <div class="TPa-2">
                <h3 align="center">${list[i].title}</h3>
                <p>Popularity rank - ${list[i].rank}<br>
                Episodes- ${list[i].episodes}<br>
                Type - ${list[i].type}<p>
                <a href="${list[i].url}" class="link"> Details....</a>
            </div>
        </div>`
    }
}

// CHOICE 2 - UPCOMING ANIME
const UpAnime = async () =>{
    const req = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.top;
    console.log(list);
    for(var i in list){
        container.innerHTML += `<div class="upanime">
        <div class="upa-1">
            <img src="${list[i].image_url}" class="upa-img">
        </div>
        <div class="upa-2">
            <h3>${list[i].title} </h3>
            <p>Type - ${list[i].type} <br>
            Release date - ${list[i].start_date}</p>
            <a href="${list[i].url}" class="link"> Details....</a>
        </div>    
        </div>`
    }
}

// CHOICE 3 - TRENDING ANIME

/* STATUS - "FINISHED": 0, "RELEASING": 1, "NOT_YET_RELEASED": 2, "CANCELLED": 3 */
const statusCheck = (num) =>{
    if(num == 0){
        var status = "Finished";
    }
    else if(num == 1){
        var status = "Released recently";
    }
    else if(num == 2){
        var status = "To be released";
    }
    else if(num == 3){
        var status = "Cancelled";
    }
    // console.log(status);
    return status;
}

/* FORMAT- "TV": 0, "TV_SHORT": 1, "MOVIE": 2, "SPECIAL": 3, "OVA": 4, "ONA": 5,"MUSIC": 6 */
const formatCheck = (num) => {
    if(num == 0){
        var format = "Show";
    }
    else if(num == 1){
        var format = "TV shorts";
    }
    else if(num == 2){
        var format = "Movie";
    }
    else if(num == 3){
        var format = "Special";
    }
    else if(num == 4){
        var format = "OVA";
    }
    else if(num == 5){
        var format = "ONA";
    }
    else if(num == 6){
        var format = "Music";
    }
    // console.log(format);
    return format;
}

const TrendAnime = async () =>{
    const req = await fetch("https://api.aniapi.com/v1/anime?year=2021&status=0")
    const data = await req.json();
    const list = data.data.documents;
    console.log(list);
    for(var i in list){
        console.log(list[i].status)
        stat = statusCheck(list[i].status);
        container.innerHTML += `<div class="TA-card">
            <div class="TA-i">
                <img src="${list[i].cover_image}" class="TA-img">
            </div>    
            <div class="TA-c">
                <h3>${list[i].titles.en}</h3>
                <p>Genre - ${list[i].genres[0]}, ${list[i].genres[1]}<br>
                Number of episodes - ${list[i].episodes_count}<br>
                Type - ${formatCheck(list[i].format)}<br>
                Status - ${statusCheck(list[i].status)}
                </p>
                <p class="trailer"><a href="${list[i].trailer_url}">Watch trailer</a></p>
            </div>
        </div>`
    }
}

// CHOICE 4 - TOP RANKED MANGA
const TopManga = async () => {
    const req = await fetch("https://api.jikan.moe/v3/top/manga")
    const data = await req.json();
    const list = data.top;
    for(var i in list){
        if(list[i].end_date == null)
        {
            var date = "Ongoing ";
        }
        else{
            var date = list[i].end_date;
        }
        if(list[i].volumes == null)
        {
            var volume = "Not available";
        }
        else{
            var volume = list[i].volumes;
        }
        container.innerHTML += `<div class="tpmanga">
            <div class="tpm-img-d">
                <img src="${list[i].image_url}" class="tpm-img">
            </div>
            <div class="tpm-content-d">    
                <h3 align="center">${list[i].title}</h3>
                <p class="p2"> Popularity rank - ${list[i].rank} <br>
                Volumes - ${volume}<br> 
                Start date - ${list[i].start_date}<br>
                End date - ${date}<br></p>
                <a href="${list[i].url}" class="link"> Details....</a>
            </div>
        </div>`;
    }
}
// TopManga();

// CHOICE 5 - TRENDING MANGA
const TrendManga = async () => {
    const req = await fetch("https://kitsu.io/api/edge/trending/manga", {
        "method" : "GET"
    })
    const data = await req.json();
    const list = data.data;
    for(var i in list){
        if(list[i].attributes.endDate == null)
        {
            var date = "Ongoing ";
        }
        else{
            var date = list[i].attributes.endDate;
        }
        container.innerHTML += `<div class="trmcard">
            <div class="d1">
                <h3>${list[i].attributes.canonicalTitle}</h3>
                <p>${list[i].attributes.description}</p>
                <p class="p2">Chapters - ${list[i].attributes.chapterCount} &emsp;&emsp;&emsp;&emsp;&emsp;
                Status - ${list[i].attributes.status} &emsp;&emsp;&emsp;&emsp;&emsp;
                Average rating - ${list[i].attributes.averageRating}<br>
                Start date- ${list[i].attributes.startDate} &emsp;&emsp;&emsp;&emsp;&emsp; 
                End date - ${date}
                </p>
            </div>
            <div class="d2">
                <img src="${list[i].attributes.posterImage.large}" class="trmimg">
            <div>
        </div>`;
    }
}
// TrendManga();

// CHOICE 6 - ANIME SONGS 
const songs = async () =>{
    const req = await fetch("https://api.aniapi.com/v1/song", {
        "method": "GET",
    })
    const data = await req.json();
    const list = data.data.documents;
    console.log(list);
}
// songs();


// CHOICE 7 - FACTS
const facts = async () => {
    const names = ['bleach','black_clover','dragon_ball','jujutsu_kaisen','fma_brotherhood','naruto','gintama','itachi_uchiha','one_piece','demon_slayer','attack_on_titan','hunter_x_hunter','boku_no_hero_academia']
    for(var j in names){
        const req = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${names[j]}`)
        const data = await req.json();
        // console.log(j,data);
        const list = data.data;

        //CHECKING FOR ANIME NAME
        if(j==0){
            var current = "Bleach";
        }
        else if(j==1){
            var current = "Black Clover";
        }
        else if(j==2){
            var current= "Dragon Ball";
        }
        else if(j==3){
            var current= "Jujutsu Kaisen";
        }
        else if(j==4){
            var current= "FullMetal Alchemist: Brotherhood";
        }
        else if(j==5){
            var current= "Naruto";
        }
        else if(j==6){
            var current= "Gintama";
        }
        else if(j==7){
            var current= "Itachi Uchiha";
        }
        else if(j==8){
            var current= "One Piece";
        }
        else if(j==9){
            var current= "Demon Slayer";
        }
        else if(j==10){
            var current= "Attack on Titan";
        }
        else if(j==11){
            var current= "Hunter X Hunter";
        }
        else if(j==12){
            var current= "My Hero Academia";
        }
        container.innerHTML += `<h2 class="sub">Facts about - ${current}</h2>`;
        for(var i in list){
            container.innerHTML += `<p class="card"> &#x2022; &ensp;${list[i].fact}</p>`;
        }
    }
}




// HANDLING THE CHOICES

/* CHOICES -{1 - TOP ANIME}, {2 - UPCOMING ANIME}, {3 - TRENDING ANIME}, {4 - TOP MANGA}
{5 - TRENDING MANGA} {6 - SONGS} {7 - FACTS} */
if(choice == 1){
    console.log("Top Anime");
    heading.innerText = 'Top Anime';
    TopAnime();
}
else if(choice == 2){
    console.log("Upcoming Anime");
    heading.innerText = 'Upcoming Anime';
    UpAnime();
}
else if(choice == 3){
    console.log("Trending Anime");
    heading.innerText = 'Trending Anime';
    TrendAnime();
}
else if(choice == 4){
    console.log("Top Manga");
    heading.innerText = 'Top Manga';
    TopManga();
}
else if(choice == 5){
    console.log("Trending manga");
    heading.innerText = 'Trending Manga';
    TrendManga()
}
else if( choice == 6){
    console.log("Songs");
    heading.innerText = 'Anime Songs';
}
else if(choice == 7){
    console.log("Facts");
    heading.innerText = 'Facts Corner';
    facts();
}


