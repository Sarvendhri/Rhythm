
const music =new Audio('audio/Orugalluke Pilaa.mp3');
//music.play();

const songs=[
    {
        id: 1,
        songName:`Bommanu Geestey<br>
        <div class="subtitle">Bommarillu</div>` ,
        poster: "img/Bommarillu.jpg"
    },
    {
        id: 2,
        songName:`Appudo Ippudo<br>
        <div class="subtitle">Bommarillu</div>` ,
        poster: "img/Bommarillu.jpg"
    },
    {
        id: 1,
        songName:`Kaani Ippudu<br>
        <div class="subtitle">Bommarillu</div>` ,
        poster: "img/Bommarillu.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let masterPlay=document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
    }
    else{
        music.pause();
    }
});

let index=0;

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(e1) => {
        index =e1.target.id;
        music.src = `audio/${index}.mp3`;
        music.play();
    })
})
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>
{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click',()=>
{
    pop_song.scrollLeft-=330;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];