const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //sounds:
  const sounds = document.querySelectorAll(".sound-picker button");
  //time display
  const timeDisplay = document.querySelector(".time-display");
  //time duration select
  const timeSelect = document.querySelector(".time-select");
  //get the length of the outline
  const outlineLength = outline.getTotalLength();
  //duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;

  outline.style.strokeDashoffset = outlineLength;

  //play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //select sound duration

  //stop and play the sounds
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };
  //animate the circle
  song.ontimeupdate = () => {
    //runs every time the song runs, and keeps updating as the song goes on
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //animate the progress bar
    let progress = outlineLength - (currentTime / elapsed) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //animate time display
    timeDisplay.textContent = `${minutes}:${seconds}`;
  };
};

app();
