document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll("video").forEach((video) => video.pause());
  });
});
