let width = document.getElementById("sejarah");
let widthNow = window.innerWidth;
let list = $("li");

list.on("click", function (event) {
  let content = event.target.textContent;
  if (content == "Sejarah") {
    window.scrollTo(0, 230);
  } else if (content === "Demografi") {
    window.scrollTo(0, 747);
  } else if (content === "Pendidikan") {
    window.scrollTo(0, 1383);
  }
});

console.log(window.innerWidth);
let windowWidth = window.innerWidth;
if (windowWidth < 500) {
  console.log("true");
  list.on("click", function (event) {
    let content = event.target.textContent;
    if (content == "Sejarah") {
      window.scrollTo(0, 247);
    } else if (content === "Demografi") {
      window.scrollTo(0, 869);
    } else if (content === "Pendidikan") {
      window.scrollTo(0, 1754);
    }
  });
}
$(window).on("scroll", function (event) {
  console.log($(window).scrollTop());
});

function scrollTop(event) {
  console.log("ok");
}
