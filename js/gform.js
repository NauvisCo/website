const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ0q-MQN2fOiviN3tIuoeSaviBoZ76QEZF1P9Rb0Mr2f8htsZUHAmkihHQUFhTdT1Z/exec'

form.addEventListener('submit', e => {
  function closeModal($el) {
    $el.classList.remove('is-active');
  }
  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .catch(error => {
      alert('Error!', error.message)
      submitButton.disabled = false
    }
    )
  setTimeout(() => { console.log("Form Success."); closeAllModals(); }, 300);
})