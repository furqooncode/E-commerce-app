const profilepics = document.getElementById("profile");
const photo = document.getElementById("photo");
const name = document.getElementById("name");
const number = document.getElementById("number");
const mail = document.getElementById("mail");
const country= document.getElementById("country");
const state = document.getElementById("state");
const address = document.getElementById("address");


photo.onchange = function () {
    profilepics.src = URL.createObjectURL(photo.files[0]);
};

function edit() {
    name.removeAttribute("readonly");
   number.removeAttribute("readonly");
  mail.removeAttribute("readonly");
 country.removeAttribute("readonly");
 state.removeAttribute("readonly");
 address.removeAttribute("readonly");
      
    alert('Edit profile')
}

function save(event) {
if( name.value === '' ||
number.value === '' ||
mail.value === '' ||
country.value === '' ||
address.value === '' ||
state.value === ''){
console.log('empty')
}else{
    name.setAttribute('readonly', true)
    number.setAttribute('readonly', true)
 mail.setAttribute('readonly', true)
  country.setAttribute('readonly', true)
    state.setAttribute('readonly', true)
  address.setAttribute('readonly', true)
     alert('profile saved');
}
}

function back(param) {
  window.location.href = '../index.html'
}