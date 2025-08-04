function Goto() {
  window.location.href = "index.html";
}

window.onload = document.querySelector('a[href^="#"]').forEach(anchor => {
  anchor.addEventlistener("click", function(e) {
    e.prevendefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (terget) {
      target.scrollIntoView({
        behavior: "smooth"
      })
    }
  })
})