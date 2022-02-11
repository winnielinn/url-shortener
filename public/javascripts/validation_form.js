const form = document.querySelector('#form')

form.addEventListener('submit', function onSubmitted(event) {
  console.log(1)
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')
})