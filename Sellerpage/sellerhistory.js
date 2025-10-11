const selectDate = document.getElementById('selectDate');

selectDate.addEventListener('click', function (param) {
   document.getElementById("date").classList.add("show");
})

function cancel(param) {
      document.getElementById('date').classList.remove('show')
}

function confirm(param) {
 document.getElementById('date').classList.remove('show')
}

function back (param) {
  window.location.href = 'dashboard.html'
}