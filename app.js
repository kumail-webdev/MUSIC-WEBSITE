const music = new Audio("audios/20.mp3");
const songs = [
  {
    id: 1,
    songName: `Popular <br> <span>The Weeknd</span>`,
    poster: "images/1.jpg",
  },
  {
    id: 2,
    songName: `Ecstacy <br> <span>Suicide Idol</span>`,
    poster: "images/2.jpg",
  },
  {
    id: 3,
    songName: `Brown Munde <br> <span>AP Dhillon</span>`,
    poster: "images/3.jpg",
  },
  {
    id: 4,
    songName: `Escapism <br> <span>Shake & Raye</span>`,
    poster: "images/4.jpg",
  },
  {
    id: 5,
    songName: `295 <br> <span>Sidhu Moose Wala</span>`,
    poster: "images/5.jpg",
  },
  {
    id: 6,
    songName: `Wo Lamhe <br/> <span>Atif Aslam</span>`,
    poster: "images/6.jpg",
  },
  {
    id: 7,
    songName: `Bachke Bachke <br> <span>Karan Aujla</span>`,
    poster: "images/7.jpg",
  },
  {
    id: 8,
    songName: `Starboy <br> <span>The Weeknd</span>`,
    poster: "images/8.jpg",
  },
  {
    id: 9,
    songName: `Still Rollin <br> <span>Shubh</span>`,
    poster: "images/9.jpg",
  },
  {
    id: 10,
    songName: `Kalam Eneih <br> <span>Sherine</span>`,
    poster: "images/10.jpg",
  },
  {
    id: 11,
    songName: `Downers At Dusk <br> <span>Talha Anjum</span>`,
    poster: "images/11.jpg",
  },
  {
    id: 12,
    songName: `Teri Deewani <br> <span>Kailash kher</span>`,
    poster: "images/12.jpg",
  },
  {
    id: 13,
    songName: `Drunk and Nasty <br> <span>Pi'erre Bourne</span>`,
    poster: "images/13.jpg",
  },
  {
    id: 14,
    songName: `Husn <br> <span>Husn</span>`,
    poster: "images/14.jpg",
  },
  {
    id: 15,
    songName: `Dil Pe Zakham<br> <span>Nfak</span>`,
    poster: "images/15.jpg",
  },
  {
    id: 16,
    songName: `Cheques <br> <span>Shubh</span>`,
    poster: "images/16.jpg",
  },
  {
    id: 17,
    songName: `Mockingbird <br> <span>Eminem</span>`,
    poster: "images/17.jpg",
  },
  {
    id: 18,
    songName: `Tareefan <br> <span>Karan Aujla</span>`,
    poster: "images/18.jpg",
  },
  {
    id: 19,
    songName: `Sabre Aalil <br> <span>Sherine`,
    poster: "images/19.jpg",
  },
  {
    id: 20,
    songName: `9:45 <br> <span>Prabh</span>`,
    poster: "images/20.jpg",
  },
];

Array.from(document.getElementsByClassName("song-item")).forEach((e, i) => {
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  e.getElementsByTagName("img")[0].src = songs[i].poster;
});

const searchResult = document.getElementsByClassName("search-result")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;

  let card = document.createElement("a");

  card.classList.add("search-card");
  card.href = "#" + id;
  card.innerHTML = `<img src="${poster}">
                <div class="text">
                  ${songName}
                </div>`;
  searchResult.appendChild(card);
});

const input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let value = input.value.toUpperCase();
  let items = searchResult.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    const as = items[index].getElementsByClassName("text")[0];

    let textValue = as.textContent || as.innerHTML;

    if (textValue.toUpperCase().indexOf(value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    if (input.value == 0) {
      searchResult.style.display = "none";
    } else {
      searchResult.style.display = "";
    }
  }
});

const masterPlay = document.getElementById("master-play");
const waves = document.getElementById("waves");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.startTime <= 0) {
    music.play();
    waves.classList.add("active-wave");
    masterPlay.classList.add("fa-pause");
    masterPlay.classList.remove("fa-play");
  } else {
    music.pause();
    waves.classList.remove("active-wave");
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

const songLeftArrow = document.getElementById("song-left-arrow");
const songRightArrow = document.getElementById("song-right-arrow");
const songCards = document.querySelector(".song-cards");

songRightArrow.addEventListener("click", () => {
  songCards.scrollLeft += 990;
});
songLeftArrow.addEventListener("click", () => {
  songCards.scrollLeft -= 990;
});

const artistLeftArrow = document.getElementById("artist-left-arrow");
const artistRightArrow = document.getElementById("artist-right-arrow");
const artistsList = document.querySelector(".artists-list");

artistRightArrow.addEventListener("click", () => {
  artistsList.scrollLeft += 990;
});
artistLeftArrow.addEventListener("click", () => {
  artistsList.scrollLeft -= 990;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("fa-circle-play")).forEach(
    (el) => {
      el.classList.add("fa-circle-play");
      el.classList.remove("fa-circle-pause");
    }
  );
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("song-item")).forEach((el) => {
    el.style.background = "rgba(205, 127, 50, 0)";
  });
};

let index = 0;
const posterMasterPlay = document.getElementById("poster-master-play");
const titleMasterPlay = document.getElementById("title-master-play");
const downloadBTN = document.getElementById("download_btn");

Array.from(document.getElementsByClassName("fa-circle-play")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audios/${index}.mp3`;
    posterMasterPlay.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.add("fa-pause");
    masterPlay.classList.remove("fa-play");
    downloadBTN.href = `audios/${index}.mp3`;

    let songTitle = songs.filter((els) => {
      return els.id == index;
    });
    songTitle.forEach((elss) => {
      let { songName } = elss;
      titleMasterPlay.innerHTML = songName;
      downloadBTN.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("song-item"))[
      index - 1
    ].style.background = "rgba(205, 127, 50, 0.1)";
    makeAllPlay();
    // el.target.classList.remove("fa-circle-play");
    el.target.classList.add("fa-circle-pause");
    waves.classList.add("active-wave");
  });
});

const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const seek = document.getElementById("seek");
const bar2 = document.getElementsByClassName("bar2")[0];
const dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  endTime.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  startTime.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

const vol_icon = document.getElementById("vol_icon");
const vol = document.getElementById("vol");
const vol_dot = document.getElementsByClassName("vol-dot")[0];
const vol_bar = document.getElementsByClassName("vol-bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.remove("fa-volume-low");
    vol_icon.classList.add("fa-volume-xmark");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.add("fa-volume-low");
    vol_icon.classList.remove("fa-volume-xmark");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("fa-volume-high");
    vol_icon.classList.remove("fa-volume-low");
    vol_icon.classList.remove("fa-volume-xmark");
  }
  let vol_val = vol.value;
  vol_bar.style.width = `${vol_val}%`;
  vol_dot.style.left = `${vol_val}%`;

  music.volume = vol_val / 100;
});

const back = document.getElementById("back");
const next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("song-item")).length;
  }
  music.src = `audios/${index}.mp3`;
  posterMasterPlay.src = `images/${index}.jpg`;
  music.play();
  masterPlay.classList.add("fa-pause");
  masterPlay.classList.remove("fa-play");

  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName } = elss;
    titleMasterPlay.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = "rgba(205, 127, 50, 0.1)";
  makeAllPlay();
  el.target.classList.remove("fa-circle-play");
  el.target.classList.add("fa-circle-pause");
  waves.classList.add("active-wave");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("song-item")).length) {
    index = 1;
  }
  music.src = `audios/${index}.mp3`;
  posterMasterPlay.src = `images/${index}.jpg`;
  music.play();
  masterPlay.classList.add("fa-pause");
  masterPlay.classList.remove("fa-play");

  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName } = elss;
    titleMasterPlay.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = "rgba(205, 127, 50, 0.1)";
  makeAllPlay();
  el.target.classList.remove("fa-circle-play");
  el.target.classList.add("fa-circle-pause");
  waves.classList.add("active-wave");
});

const shuffle = document.getElementById("shuffle");

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("fa-repeat");
      shuffle.classList.remove("fa-music");
      shuffle.classList.remove("fa-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("fa-repeat");
      shuffle.classList.remove("fa-music");
      shuffle.classList.add("fa-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("fa-repeat");
      shuffle.classList.add("fa-music");
      shuffle.classList.remove("fa-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

const autoNext = () => {
  if (index > songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audios/${index}.mp3`;
  posterMasterPlay.src = `images/${index}.jpg`;
  music.play();
  masterPlay.classList.add("fa-pause");
  masterPlay.classList.remove("fa-play");
  downloadBTN.href = `audios/${index}.mp3`;

  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName } = elss;
    titleMasterPlay.innerHTML = songName;
    downloadBTN.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = "rgba(205, 127, 50, 0.1)";
  makeAllPlay();
  // el.target.classList.remove("fa-circle-play");
  el.target.classList.add("fa-circle-pause");
  waves.classList.add("active-wave");
};

const repeatMusic = () => {
  index;
  music.src = `audios/${index}.mp3`;
  posterMasterPlay.src = `images/${index}.jpg`;
  music.play();
  masterPlay.classList.add("fa-pause");
  masterPlay.classList.remove("fa-play");
  downloadBTN.href = `audios/${index}.mp3`;

  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName } = elss;
    titleMasterPlay.innerHTML = songName;
    downloadBTN.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = "rgba(205, 127, 50, 0.1)";
  makeAllPlay();
  // el.target.classList.remove("fa-circle-play");
  el.target.classList.add("fa-circle-pause");
  waves.classList.add("active-wave");
};

const randomMusic = () => {
  if (index > songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audios/${index}.mp3`;
  posterMasterPlay.src = `images/${index}.jpg`;
  music.play();
  masterPlay.classList.add("fa-pause");
  masterPlay.classList.remove("fa-play");
  downloadBTN.href = `audios/${index}.mp3`;

  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName } = elss;
    titleMasterPlay.innerHTML = songName;
    downloadBTN.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("song-item"))[
    index - 1
  ].style.background = "rgba(205, 127, 50, 0.1)";
  makeAllPlay();
  // el.target.classList.remove("fa-circle-play");
  el.target.classList.add("fa-circle-pause");
  waves.classList.add("active-wave");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeatMusic();
      break;
    case "next":
      autoNext();
      break;
    case "random":
      randomMusic();
      break;
  }
});
