const purchase = document.getElementById('purchase');
const description = document.getElementById('description');
const image = document.getElementById('image');
const price = document.getElementById('price');
const name = document.getElementById('name');
const namer = document.getElementById('namer');
const pricer = document.getElementById('pricer');
const images = document.getElementById('images')


const items = JSON.parse(localStorage.getItem('items')) || [];

if (items) {
  description.textContent = items.description;
   image.src = items.image;
   name.textContent = items.title;
   namer.textContent = items.title;
 pricer.textContent = "$" + items.price;
   price.textContent = "$" + items.price;
   images.src = items.image;
 }
 
 
 const plus = document.getElementById('plus');
 const minus = document.getElementById('minus')
 
 
   let count = 1;

 plus.addEventListener('click', function (event) {
   event.preventDefault();
   let num = document.getElementById('number');
   let counted = ++count;
   num.textContent = counted;
   console.log(counted)
 })
 
  minus.addEventListener('click', function (event) {
   let num = document.getElementById('number');
   let counted = --count;
   num.textContent = counted;
 })
 
 function go(param) {
   window.location.href = 'checkout.html'
 }
 
 const product = document.getElementById('product')
 localStorage.setItem('theme', product)