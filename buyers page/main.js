
const trending = document.getElementById('trending');
//trending 
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
  trending.innerHTML = "";
  data.products.forEach(trend => {
    trending.innerHTML += `
    <div class="trendes">
   <img src="${trend.images[0]}" alt="">
    <span>${trend.title}</span>
      <div class="imgDecs">
     <p>${trend.description}</p>
       </div> 
       <div class="love">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
<button class="favour"><i class="fa-solid fa-heart"></i></button>
   
         </div>
           </div>
    `;
  })
    const love = document.querySelectorAll(".love");
    
  love.forEach(lover => {
lover.addEventListener('click', function () {
  const container = lover.closest('.love')
  const unfavoured = container.querySelector(".unfavour")
 const favoured = container.querySelector('.favour');
  if (getComputedStyle(favoured).display === 'block') {
    favoured.style.display = 'none';
    unfavoured.style.display = 'block';
  } else {
    favoured.style.display = 'block';
    unfavoured.style.display = 'none';
   }
  });
});
    
})
.catch (error => {
  console.log(error)
   trending.innerHTML = 'ERROR 404'
});

//mens clothes
const menClothes = document.getElementById('menClothes')
fetch('https://dummyjson.com/products?limit=4')
.then(res => res.json())
.then(data => {
  menClothes.innerHTML = "";
  data.products.forEach(men => {
    const items = ({
    title: men.title,
    price: men.price,
    image :men.images[0],
    description :men.description,
  })
  console.log(items)
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
    menClothes.innerHTML += 
    `
     <div class="start">
            <img src="${men.images[0]}" alt="">
            <div class="fav">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
     <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p>$${men.price}</p>
   </div>
    <div class="clothesType">
           <h4>${men.title}</h4>
           <button class="btn-1" data-item="${itemData}">BUY NOW</button>
           <button class="btn-2">ADD TO CART</button>
   </div>
   </div>
    `
  })
  const buy = document.querySelectorAll(".btn-1")
  const fav = document.querySelectorAll(".fav")
    
buy.forEach(btn => {
  btn.addEventListener('click', function () {
const item = JSON.parse(this.dataset.item)
localStorage.setItem('items', JSON.stringify(item))
  window.location.href = 'product.html';
  })
});
fav.forEach(love => {
love.addEventListener('click', function () {
  const container = love.closest('.fav')
  const unfavoured = container.querySelector(".unfavour")
 const favoured = container.querySelector('.favour');
  if (getComputedStyle(favoured).display === 'block') {
    favoured.style.display = 'none';
    unfavoured.style.display = 'block';
  } else {
    favoured.style.display = 'block';
    unfavoured.style.display = 'none';
   }
  });
});
})
.catch(error => {
  console.log(error)
  menClothes.innerHTML = 'ERROR 404 ';
});

/* women */

const womenClothes = document.getElementById('womenClothes')
fetch('https://dummyjson.com/products?limit=4')
.then(res => res.json())
.then(data => {
  womenClothes.innerHTML = "";
  data.products.forEach(men => {
    const items = ({
    title: men.title,
    price: men.price,
    image :men.images[0],
    description :men.description,
  })
  console.log(items)
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
    womenClothes.innerHTML += 
    `
     <div class="start">
            <img src="${men.images[0]}" alt="">
            <div class="favo">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
     <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p>$${men.price}</p>
   </div>
    <div class="clothesType">
           <h4>${men.title}</h4>
           <button class="btn-1" data-item="${itemData}">BUY NOW</button>
           <button class="btn-2">ADD TO CART</button>
   </div>
   </div>
    `
  })
  const buy = document.querySelectorAll(".btn-1")
  const favo = document.querySelectorAll(".favo")
    
buy.forEach(btn => {
  btn.addEventListener('click', function () {
const item = JSON.parse(this.dataset.item)
localStorage.setItem('items', JSON.stringify(item))
  window.location.href = 'product.html';
  })
});
favo.forEach(lovet => {
lovet.addEventListener('click', function () {
  const container = lovet.closest('.favo')
  const unfavoured = container.querySelector(".unfavour")
 const favoured = container.querySelector('.favour');
  if (getComputedStyle(favoured).display === 'block') {
    favoured.style.display = 'none';
    unfavoured.style.display = 'block';
  } else {
    favoured.style.display = 'block';
    unfavoured.style.display = 'none';
   }
  });
});
})
.catch(error => {
  console.log(error)
  womenClothes.innerHTML = 'ERROR 404 ';
});

/* functions */

function home (param) {
  window.location.href = 'index.html'
}
function user(param) {
  window.location.href = 'setting.html'
}
function find(param) {
 window.location.href = 'search.html'
}

function cart(param) {
  window.location.href = 'cart.html'
}

function status(param) {
  window.location.href = 'status.html'
}

function noti() {
  window.location.href = 'notification.html'
}
const sideBar = document.getElementById('sideBar')
function menu(param) {
 sideBar.classList.add('show');
};

sideBar.addEventListener('click', function (event) {

  if (event.target === sideBar) {
    sideBar.classList.remove('show')
  }
})

const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.image-slide');
const slideWidth = slides[0].offsetWidth + 15;

function right() {
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
  }
}

function left() {
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth;
  } else {
    carousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  }
}
setInterval(() => {
  right();
},9000);

const index = document.getElementById('index')
localStorage.setItem('theme', index)