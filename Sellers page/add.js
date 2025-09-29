function back() {
window.location.href = 'dashboard.html'
}
const photo = document.getElementById('photo');
const product = document.getElementById('product')
photo.onchange = function () {
    product.src = URL.createObjectURL(photo.files[0]);
};
