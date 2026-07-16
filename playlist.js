document.addEventListener("DOMContentLoaded", () => {
  const player = document.querySelector("[data-playlist]");
  if (!player) return;

  const audio = player.querySelector("audio");
  const currentTrack = player.querySelector("[data-current-track]");
  const tracks = Array.from(player.querySelectorAll(".track-row"));

  tracks.forEach((track) => {
    track.addEventListener("click", () => {
      tracks.forEach((item) => item.classList.remove("active"));
      track.classList.add("active");
      audio.src = track.dataset.src;
      currentTrack.textContent = track.dataset.title;
      audio.play().catch(() => {});
    });
  });
});
