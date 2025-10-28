const buyBtn = document.querySelectorAll(".btn-1");
buyBtn.forEach((btn) => {
  btn.addEventListener("click", function (param) {
    window.location.href = "buyerpage/:product.html";
  });
});
/* functions */

function home(param) {
  window.location.href = "index.html";
}
function user(param) {
  window.location.href = "buyerpage/setting.html";
}
function find(param) {
  window.location.href = "buyerpage/search.html";
}

function cart(param) {
  window.location.href = "buyerpage/cart.html";
}

function status(param) {
  window.location.href = "buyerpage/status.html";
}

function noti() {
  window.location.href = "buyerpage/notification.html";
}
const sideBar = document.getElementById("sideBar");
function menu(param) {
  sideBar.classList.add("show");
}

sideBar.addEventListener("click", function (event) {
  if (event.target === sideBar) {
    sideBar.classList.remove("show");
  }
});

const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".image-slide");
const slideWidth = slides[0].offsetWidth + 15;

function right() {
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
}

function left() {
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth;
  } else {
    carousel.scrollBy({ left: -slideWidth, behavior: "smooth" });
  }
}
setInterval(() => {
  right();
}, 9000);

const index = document.getElementById("index");
localStorage.setItem("theme", index);
