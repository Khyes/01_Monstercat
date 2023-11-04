const toggleMenu = () => {
    const toggle = document.getElementById("menu-toggle"),
      nav = document.getElementById("navigation")
  
    if (toggle && nav) {
      
        document.body.classList.toggle("nav-active");
    }
  };
  $(document).ready(function(){
    $("#music").click(function(){
      $("#music").toggleClass("active");
    });

    $("#about").click(function(){
        $("#about").toggleClass("active");
    });
    $("#event").click(function(){
        $("#event").toggleClass("active");
    });
    $("#programming").click(function(){
        $("#programming").toggleClass("active");
    });

  });


  const track_list = [
    {
      title: 'A Long Way',
      artist: 'SergePavkinMusic',
      path: 'assets/mp3/a-long-way_SergePavkinMusic.mp3',
    },
    {
      title: 'Echoes of the Moon',
      artist: 'Aiva AI',
      path: 'assets/mp3/aiva_1.mp3',
    },
    {
      title: 'Awaken',
      artist: 'Onoychenkomusic',
      path: 'assets/mp3/awaken_Onoychenkomusic.mp3',
    },
    {
      title: 'Whispers in the Moonlight',
      artist: 'Lexin Music',
      path: 'assets/mp3/inspiring-cinematic-ambient_Lexin_Music.mp3',
    },
    {
      title: 'Lily',
      artist: 'Soundful AI',
      path: 'assets/mp3/soundful_Lily.mp3',
    },
    {
      title: 'Soul of the Sunrise',
      artist: 'Aiva AI',
      path: 'assets/mp3/aiva_2.mp3',
    },
    {
      title: 'Glowing',
      artist: 'Soundful AI',
      path: 'assets/mp3/soundful _Glowing.mp3',
    },
    {
      title: 'Loneliness of the Winner',
      artist: 'Unknown',
      path: 'assets/mp3/loneliness-of-the-winner-110416.mp3',
    },
    {
      title: 'Emotions',
      artist: 'Soundful AI',
      path: 'assets/mp3/soundful_Emotions.mp3',
    },
    {
      title: 'Whispers in the Wind',
      artist: 'Aiva AI',
      path: 'assets/mp3/aiva_3.mp3',
    },
    {
      title: 'Cinematic Timelapse',
      artist: 'Abdullah Ali Jabir',
      path: 'assets/mp3/cinematic-time-lapse.mp3',
    },
    {
      title: 'Price of Freedom',
      artist: "Daddy's Music",
      path: 'assets/mp3/price-of-freedom_Daddy_s_Music.mp3',
    }
  ];

  let title_track_1 = new Audio(track_list[0].title);
  let title_track_2 = new Audio(track_list[1].title);
  let title_track_3 = new Audio(track_list[2].title);
  let title_track_4 = new Audio(track_list[3].title);
  let title_track_5 = new Audio(track_list[4].title);
  let title_track_6 = new Audio(track_list[5].title);
  let title_track_7 = new Audio(track_list[6].title);
  let title_track_8 = new Audio(track_list[7].title);
  let title_track_9 = new Audio(track_list[8].title);
  let title_track_10 = new Audio(track_list[9].title);
  let title_track_11 = new Audio(track_list[10].title);
  let title_track_12 = new Audio(track_list[11].title);

  let artist_track_1 = new Audio(track_list[0].artist);
  let artist_track_2 = new Audio(track_list[1].artist);
  let artist_track_3 = new Audio(track_list[2].artist);
  let artist_track_4 = new Audio(track_list[3].artist);
  let artist_track_5 = new Audio(track_list[4].artist);
  let artist_track_6 = new Audio(track_list[5].artist);
  let artist_track_7 = new Audio(track_list[6].artist);
  let artist_track_8 = new Audio(track_list[7].artist);
  let artist_track_9 = new Audio(track_list[8].artist);
  let artist_track_10 = new Audio(track_list[9].artist);
  let artist_track_11 = new Audio(track_list[10].artist);
  let artist_track_12 = new Audio(track_list[11].artist);


let track_1 = new Audio(track_list[0].path);
let track_2 = new Audio(track_list[1].path);
let track_3 = new Audio(track_list[2].path);
let track_4 = new Audio(track_list[3].path);
let track_5 = new Audio(track_list[4].path);
let track_6 = new Audio(track_list[5].path);
let track_7 = new Audio(track_list[6].path);
let track_8 = new Audio(track_list[7].path);
let track_9 = new Audio(track_list[8].path);
let track_10 = new Audio(track_list[9].path);
let track_11 = new Audio(track_list[10].path);
let track_12 = new Audio(track_list[11].path);
let icon_1 = document.getElementById("btn-1");
let icon_2 = document.getElementById('btn-2');
let icon_3 = document.getElementById('btn-3');
let icon_4 = document.getElementById('btn-4');
let icon_5 = document.getElementById('btn-5');
let icon_6 = document.getElementById('btn-6');
let icon_7 = document.getElementById('btn-7');
let icon_8 = document.getElementById('btn-8');
let icon_9 = document.getElementById('btn-9');
let icon_10 = document.getElementById('btn-10');
let icon_11 = document.getElementById('btn-11');
let icon_12 = document.getElementById('btn-12');

let musicControl = document.getElementById('music__control');
let trackName = document.getElementById('track-name');
let trackArtist = document.getElementById('track-artist');

let playerBtn = document.getElementById('play');

let currentTrack = null;

function togglePlayPause(track, icon, title_track, title_artist) {
  if (currentTrack && currentTrack !== track) {
    currentTrack.pause();
    icon.innerHTML = '<i class="bi bi-play"></i>';
    playerBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  if (track.paused) {
    track.play();
    icon.innerHTML = '<i class="bi bi-pause"></i>';
    playerBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    musicControl.style.display = 'block';
    trackName.innerHTML = track_list[title_track].title;
    trackArtist.innerHTML = track_list[title_artist].artist;
    currentTrack = track;
  } else {
    track.pause();
    icon.innerHTML = '<i class="bi bi-play"></i>';
    playerBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    currentTrack = null;
  }
}


function togglePlayPausePlayer(currentTrack) {
  if (currentTrack.paused) {
    currentTrack.play();
    playerBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    currentTrack.pause();
    playerBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}


