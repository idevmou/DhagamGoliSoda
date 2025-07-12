// const scriptURL = 'https://script.google.com/macros/s/AKfycbxNIevczIIa0bG6KoVj7K8WJ0VtZrNs8Lxgngl9lXX-nT8T62j0MNr83mGDcnHBZ0oJ/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
  
//   e.preventDefault()
  
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Form is submitted" ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbxNIevczIIa0bG6KoVj7K8WJ0VtZrNs8Lxgngl9lXX-nT8T62j0MNr83mGDcnHBZ0oJ/exec';
const form = document.forms['contact-form'];
const submitButton = document.getElementById('submit');
const messageDiv = document.querySelector('.messages');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show submitting message
  messageDiv.innerHTML = "<p style='color: blue;'>Submitting...</p>";
  submitButton.disabled = true;
  submitButton.value = "Submitting...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Show success message
      messageDiv.innerHTML = "<p style='color: green;'>Thank you! Form is submitted.</p>";
      submitButton.disabled = false;
      submitButton.value = "Submit";
      form.reset(); // optional: reset the form
    })
    .catch(error => {
      console.error('Error!', error.message);
      messageDiv.innerHTML = "<p style='color: red;'>There was an error submitting the form.</p>";
      submitButton.disabled = false;
      submitButton.value = "Submit";
    });
});
