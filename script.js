const barra = [
    {
        logo: "logo.png"
    }
]


const dados = [
    {
        imagem: "noticiacapa1.png",
        titulo: "PALMEIRAS WINS CEARÁ IN THE 19TH ROUND OF BRASILEIRÃO ASSAÍ",
        desc: "With goals from Zé Rafael and Deyverson, the green team won away from home and resumed third place in Serie A. Cléber cashed for Ceará"
    },
    {
        imagem: "noticiacapa2.png",
        titulo: "Helicopters prevent ambush against troops and kill 50 'bandits' in Nigeria.",
        desc: "Military helicopters launched the attack just as ground troops were in danger of falling into an ambush, according to The Defense Post"
    },
    {
        imagem: "mine vs terra pequena.png",
        titulo: "Games",
        desc: "In the newest edition of game comparisons, we'll be featuring Minecraft vs Terraria! Let's see the difference of each game!"
    },
    {
        imagem: "coraline pequena.png",
        titulo: "Movies",
        desc: "Now, let's compare Coraline's book to the movie. Let's check out the small details that make a difference in the story!"
    },
    {
        imagem: "bolt pequena.png",
        titulo: "Sport",
        desc: "Usain Bolt and Michael Johnson, both of them are real fast but who is the fastest?"
    },
    {
        imagem: "pneu pequena.png",
        titulo: "cars",
        desc: "Michelin's new Airless technology can be a game changer?"
    },
]

const art1 = [
    {
        img: "mine vs terraria.png",
        tit: "Minecraft VS Terraria",
        aut: "Author: Matheus Yan Leite Gallerani",
        dat: "19/10/2021 - 12:17",
        p1: "Terraria and Minecraft are two survival games where you start life from scratch in a world with monsters, where the objective is to collect resources, evolve more and more, until you are able to defeat the game's boss. However, there is always more to do! The lore of Terraria refers to the game's back-story. While Terraria was initially released without a clear story component, its developers at Re-Logic wrote and released a story connecting its characters and gameplay elements in celebration of the 8th anniversary of Terraria's release (ps: 'lore' is a term used to represent the story behind a game or character for example). Minecraft itself has no storyline, and the creators purposefully left the storyline creation up to players.",
        p2: "Terraria is lighter than minecraft, as it's a simpler game, and in 2d, it doesn't need to take up a lot of space on a computer. Minecraft, on the other hand, for being a 3d game, with greater details and more complex graphics, has more Gb. Having already been the most played game in the world, Minecraft ends up being more popular than Terraria. In any case, the communities of both games get along very well, and even the development teams of the respective games have a healthy relationship of rivalry.",
        img2: "mine vs terraria 2.png"
    }
]

const art2 = [
    {
        img: "coraline capa.png",
        tit: "Coraline: Movie VS Book",
        aut: "Author: Francisco Ferrara Neto",
        dat: "20/10/2021 - 15:36",
        p1: "Coraline a children's horror story about a sad girl who has moved away from her friends to an apartment complex at the end of the world, the differences between the movie and the book may seem big, but the story is with no doubts  remarkable and unique, we can say that the book was the inspiration for the movie, but that doesn't mean that the movie is worse, I would say that the movie is a more juvenile adaptation of a horror work for adults (As much as Neil Gaiman said the book was written for your daughter).",
        p2: "The main differences between the movie and the book affect practically nothing in the story. Some of them being, the Wybie doesn't exist in the book, the apartment complex isn't called Pink Palace, the intense description of the Coraline's feelings was not described in the movie, some of the most remarkable book battles have been drastically diminished in the movie, and what we can see in common in these differences is that the film was basically adapted for younger children, some things prove this, for example the name of the complex from apartments that became the Pink Palace (a more childish name), the Wybie being a friend of Coraline, the neighbors being more attractive to children, so we were able to conclude that the stories are similar but the book would definitely not be recommended for children.",
        img2: "coraline.png"
    }
]

const art3 = [
    {
        img: "bolt.png",
        tit: "The Fastest Man Alive",
        aut: "Author: Luiz Fernando de Aragão Souza",
        dat: "20/10/2021 - 15:13",
        p1: "Usain Bolt is by far the best sprinter of all with 8 Olympic medals and 14 world medals this title is not to be said for the Jamaican was the only one to win gold in the 100 m and 200 m events in 3 consecutive Olympics Beijing (2008) , London (2012) and Rio (2016). A historic feat.",
        p2: "Besides Bolt there are other very good sprinters such as Michael Johnson who has 4 Olympic medals and 8 world medals all gold, the impact caused by the American was so great that he still holds the Olympic records for the 200 m and 400 m races and he he was also the only one to have won the 200 m and 400 m in a single edition of the Olympics the brand was registered in the Atlanta games in 1996 not only being a great sprinter Johnson also stood out in the hurdle relays, despite Johnson's career stand out we can't say he was better than Usain Bolt",
        img2: "bolt 2.png"
    }
]

const art4 = [
    {
        img: "pneu capa.png",
        tit: "We may finally get airless tires, but is it any good?",
        aut: "Author: Guilherme Takashi Takamoto",
        dat: "19/10/2021 - 12:17",
        p1: "The concept of airless tires is already being used in light machinery (such as golf carts) and in heavy machinery, Michelin's the vanguard for mass-producing this technology to road-legal cars. Being revealed in 2019, it's promised they are going to hit the market in 2024. ",
        p2: "Why this can blow up (in success)? Michelin knows normal tires can suck sometimes: even brand new, passing over shrapnel can guarantee you a visit to the nearest workshop, creating an environmental problem, since it is estimated 300 million tires are thrown out every year. The airless tires are nearly hollow inside and filled with rubber connections that makes it compress and decompress to simulate a suspension, similar to an air tire, but more important it adds resistance to holes and bumps. ",
        img2: "pneu.png"
    }
]


window.addEventListener("DOMContentLoaded", function(){

 let bar = document.querySelector("#logo");

 logo.src = barra[0].logo;

});


window.addEventListener("DOMContentLoaded", function(){

    let pic = [];
    let tit = [];
    let p = [];
    for(let i = 0; i < dados.length; i++){
        pic.push(
            document.querySelector("#pic" + i)
        );
        tit.push(
            document.querySelector("#tit" + i)
        );
        p.push(
            document.querySelector("#p" + i)
        );
    }
    
    for(let i = 0; i < dados.length; i++){
    pic[i].src = dados[i].imagem;
    tit[i].innerHTML = dados[i].titulo;
    p[i].innerHTML = dados[i].desc;
    }


    let fot1 = document.querySelector("#fot1");
    let tit1 = document.querySelector("#tit1");
    let autor1 = document.querySelector("#autor1");
    let data1 = document.querySelector("#data1");

    fot1.src = art1[0].img;
    tit1.innerHTML = art1[0].tit;
    autor1.innerHTML = art1[0].aut;
    data1.innerHTML = art1[0].dat;
});

window.addEventListener("DOMContentLoaded", function(){
    let fot = document.querySelector("#fot");
    let tit = document.querySelector("#tit");
    let autor = document.querySelector("#autor");
    let data = document.querySelector("#data");
    let part1 = document.querySelector("#part1");
    let part2 = document.querySelector("#part2");
    let fot2= document.querySelector("#fot2");

    fot.src = art1[0].img;
    tit.innerHTML = art1[0].tit;
    autor.innerHTML = art1[0].aut;
    data.innerHTML = art1[0].dat;
    part1.innerHTML = art1[0].p1;
    part2.innerHTML = art1[0].p2;
    fot2.src = art1[0].img2;
    



});

window.addEventListener("DOMContentLoaded", function(){
    let fot = document.querySelector("#fotart2");
    let tit = document.querySelector("#titart2");
    let autor = document.querySelector("#autorart2");
    let data = document.querySelector("#dataart2");
    let part1 = document.querySelector("#part1art2");
    let part2 = document.querySelector("#part2art2");
    let fot2= document.querySelector("#fot2art2");

    fot.src = art2[0].img;
    tit.innerHTML = art2[0].tit;
    autor.innerHTML = art2[0].aut;
    data.innerHTML = art2[0].dat;
    part1.innerHTML = art2[0].p1;
    part2.innerHTML = art2[0].p2;
    fot2.src = art2[0].img2;
    



});

window.addEventListener("DOMContentLoaded", function(){
    let fot = document.querySelector("#fotart3");
    let tit = document.querySelector("#titart3");
    let autor = document.querySelector("#autorart3");
    let data = document.querySelector("#dataart3");
    let part1 = document.querySelector("#part1art3");
    let part2 = document.querySelector("#part2art3");
    let fot2= document.querySelector("#fot2art3");

    fot.src = art3[0].img;
    tit.innerHTML = art3[0].tit;
    autor.innerHTML = art3[0].aut;
    data.innerHTML = art3[0].dat;
    part1.innerHTML = art3[0].p1;
    part2.innerHTML = art3[0].p2;
    fot2.src = art3[0].img2;
    



});

window.addEventListener("DOMContentLoaded", function(){
    let fot = document.querySelector("#fotart4");
    let tit = document.querySelector("#titart4");
    let autor = document.querySelector("#autorart4");
    let data = document.querySelector("#dataart4");
    let part1 = document.querySelector("#part1art4");
    let part2 = document.querySelector("#part2art4");
    let fot2= document.querySelector("#fot2art4");

    fot.src = art4[0].img;
    tit.innerHTML = art4[0].tit;
    autor.innerHTML = art4[0].aut;
    data.innerHTML = art4[0].dat;
    part1.innerHTML = art4[0].p1;
    part2.innerHTML = art4[0].p2;
    fot2.src = art4[0].img2;
    



});