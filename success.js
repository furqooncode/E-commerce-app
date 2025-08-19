const pop = document.getElementById('pop');
window.addEventListener('load', function (param) {
  setTimeout(()=>{
  pop.style.opacity = '1';
  
},1000)
})

function none(param) {
  pop.style.opacity = '0';
}
