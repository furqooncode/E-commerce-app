const selectDate = document.getElementById('selectDate');
selectDate.addEventListener('click', function (param) {
   document.getElementById('date').style.display = 'block'
})

function cancel(param) {
      document.getElementById('date').style.display = 'none'
}

function confirm(param) {
        document.getElementById('date').style.display = 'none'
}