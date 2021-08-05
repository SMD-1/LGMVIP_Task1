function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navItems = document.querySelector(".navItems");

  menuToggle.classList.toggle("active");
  navItems.classList.toggle("active");
}

let videobtn = document.querySelectorAll(".vid-btn");

videobtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");

    let source = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = source;
  });
});
