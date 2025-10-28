function home (param) {
  window.location.href = '../index.html'
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

function back(param) {
 window.location.href = '../index.html';
}


const seller = document.getElementById('seller');
seller.addEventListener('click', function (param) {
  window.location.href = 'details.html'
})