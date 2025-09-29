const product = document.getElementById('product')
const deletor = document.getElementById('delete');
let longpress = false ;
let time;
product.addEventListener('touchstart', function (event) {
    longpress = false
    time = setTimeout(() => {
    longpress = true;
    deletor.style.display = 'block';
    product.style.background = 'gray';
    product.style.borderRadius = '0'
},1000)
})

product.addEventListener('touchend', function(param) {
    clearTimeout(time);
})

//desktop 
product.addEventListener('mousedown', function (event) {
    longpress = false
    time = setTimeout(() => {
    longpress = true;
    deletor.style.display = 'block';
    product.style.background = 'gray';
    product.style.borderRadius = '0'
},1000)
})

product.addEventListener('mouseup', function(param) {
    clearTimeout(time);
})


function stop(param) {
    deletor.style.display = 'none';
    product.style.background = 'whitesmoke';
    product.style.borderRadius = '8px'
}
product.addEventListener('click', function(event) {
    event.preventDefault;
    if (longpress === true) {
        alert('unable to click')
    }else{
     window.location.href = 'add.html'
    }
})
function edit(param) {
    window.location.href = 'add.html'
}
