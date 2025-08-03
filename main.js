






const trending = document.getElementById('trending');
const menClothes = document.getElementById('menClothes');
const womenClothes = document.getElementById('womenClothes')
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
           <button><i class="fa-regular fa-heart"></i></button>
         </div>
           </div>
    `;
  })
})
.catch (error => {
  console.log(error)
});

//mens clothes
fetch('https://dummyjson.com/products/category/mens-shirts?limit=4')
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
  const unfavoured = container.querySelectorAll(".unfavour")
 const favoured = container.querySelectorAll('.favour');
  favoured.style.display = favoured.style.display === 'block' ? 'none' : 'block';

  unfavoured.style.display = unfavoured.style.display === 'none' ? 'block' : 'none';
  })
});
})

.catch(error => {
  womenClothes.innerHTML = error;
});


//women clothes
fetch('https://dummyjson.com/products/category/womens-dresses?limit=4')
.then(res => res.json())
.then(data => {
  womenClothes.innerHTML = "";
  data.products.forEach(women => {
    const items = ({
    title: women.title,
    price: women.price,
    image :women.images[0],
    description :women.description,
  })
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
   console.log(items)
    womenClothes.innerHTML += `
    <p class="description">${women.description}</p>
     <div class="start">
            <img src="${women.images[0]}" class="image" alt="">
            <div class="fav">
     <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
      <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p class="amount">$${women.price}</p>
   </div>
    <div class="clothesType">
<h4 class="proname">${women.title}</h4>
<button class="btn-1" data-item="${itemData}">BUY NOW</button>
<button class="btn-2">ADD TO CART</button>
   </div>
   </div>
    `})
    
  const buy = document.querySelectorAll(".btn-1");
  const fav = document.querySelectorAll(".fav")
    
buy.forEach(btn => {
  btn.addEventListener('click', function () {
const item = JSON.parse(this.dataset.item)
localStorage.setItem('items', JSON.stringify(item))
  window.location.href = 'product.html';
  })
})

fav.forEach(love => {
love.addEventListener('click', function () {
  const container = love.closest('.fav')
  const unfavoured = container.querySelectorAll(".unfavour")
 const favoured = container.querySelectorAll('.favour');
  favoured.style.display = favoured.style.display === 'block' ? 'none' : 'block';

  unfavoured.style.display = unfavoured.style.display === 'none' ? 'block' : 'none';
  })
});
})

.catch(error => {
  womenClothes.innerHTML = error;
});


//womanshoe
const womenshoes = document.getElementById('womenshoe')
const got = fetch('https://dummyjson.com/products/category/womens-shoes?limit=4')
.then(res => res.json())
.then(data => {
 womenshoes.innerHTML = "";
  data.products.forEach(woshoe => {
    const items = ({
    title: woshoe.title,
    price: woshoe.price,
    image :woshoe.images[0],
    description :woshoe.description,
  })
  console.log(items)
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
    womenshoes.innerHTML += `
     <div class="start">
          <img src="${woshoe.images[0]}" alt="">
            <div class="fav">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
     <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p>$${woshoe.price}</p>
   </div>
    <div class="clothesType">
           <h4>${woshoe.title}</h4>
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
  const unfavourer = container.querySelectorAll(".unfavour")
 const favourer = container.querySelectorAll('.favour');
  favourer.style.display = favourer.style.display === 'block' ? 'none' : 'block';

  unfavourer.style.display = unfavourer.style.display === 'none' ? 'block' : 'none';

  })
});
})
.catch(error => {
  womenshoes.innerHTML = error;
})


//mens shoe
const menshoe = document.getElementById('menshoes')
fetch('https://dummyjson.com/products/category/mens-shoes?limit=4')
.then(res => res.json())
.then(data => {
  menshoe.innerHTML = "";
  data.products.forEach(shoe => {
    const items = ({
    title: shoe.title,
    price: shoe.price,
    image :shoe.images[0],
    description :shoe.description,
  })
  console.log(items)
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
    menshoes.innerHTML += `
     <div class="start">
            <img src="${shoe.images[0]}" alt="">
            <div class="fav">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
     <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p>$${shoe.price}</p>
   </div>
    <div class="clothesType">
           <h4>${shoe.title}</h4>
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
    const unfavour = container.querySelector(".unfavour")
 const favour = container.querySelector('.favour');
 
 
 if (getComputedStyle(favour).display == "block") {
   favour.style.display = 'none';
   unfavour.style.display = 'block';
 } else {
  favour.style.display = 'block' 
  unfavour.style.display = 'none';
 }
  })
})

})
.catch(error => {
  menClothes.innerHTML = error;
})

// men's watch 
const menswatch = document.getElementById('menswatch');
fetch('https://dummyjson.com/products/category/mens-watches?limit=4')
.then(res => res.json())
.then(data => {
  menswatch.innerHTML = "";
  data.products.forEach(watch => {
    const items = ({
    title: watch.title,
    price: watch.price,
    image :watch.images[0],
    description :watch.description,
  })
  console.log(items)
const itemData = JSON.stringify(items).replace(/"/g, '&quot;');
    menswatch.innerHTML += `
     <div class="start">
        <img src="${watch.images[0]}" alt="">
            <div class="fav">
  <button class="unfavour"><i class="fa-regular fa-heart"></i></button>
     <button class="favour"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="clothesPrice">
            <p>$${watch.price}</p>
   </div>
    <div class="clothesType">
           <h4>${watch.title}</h4>
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
    const unfavour = container.querySelector(".unfavour")
 const favour = container.querySelector('.favour');
 
 
 if (getComputedStyle(favour).display == "block") {
   favour.style.display = 'none';
   unfavour.style.display = 'block';
 } else {
  favour.style.display = 'block' 
  unfavour.style.display = 'none';
 }
  })
})

})

.catch(error => {
  menClothes.innerHTML = error;
})
