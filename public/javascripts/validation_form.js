const form = document.querySelector('#form')

if (form) {
  form.addEventListener('submit', function onSubmitted(event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  })
}