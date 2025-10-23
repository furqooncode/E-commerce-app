const pop = document.getElementById('pop');
window.addEventListener('load', function (param) {
  setTimeout(()=>{
  pop.style.opacity = '1';
  
},1000)
})

function none(param) {
  pop.style.opacity = '0';
}

function submit(param) {
    pop.style.opacity = '0';
}

function continuer(e) {
  window.location.href = '../index.html'
}