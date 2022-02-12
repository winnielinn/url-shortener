function copyLink () {
  // get url
  const link = document.querySelector('#link').innerText

  // use Web API/clipboard
  navigator.clipboard.writeText(link)
    .then(() => {
      console.log('link copied')
      alert('link copied')
    })
    .catch(error => {
      console.log(error)
      alert('failed to copy link')
    })
}