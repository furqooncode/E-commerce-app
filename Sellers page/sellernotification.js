function more(param) {
  let more = document.getElementById('notes');
let now = document.getElementById('now');
let real = document.getElementById('real')
  more.style.overflow = more.style.overflow === 'visible' ? 'hidden' : 'visible';
  more.style.whiteSpace = more.style.whiteSpace === 'normal' ? 'nowrap' : 'normal';
  now.style.top = '12px'
  real.style.height = real.style.height === '100px' ? '60px' : '100px';
}

function back() {
  window.location.href = 'index.html';
}