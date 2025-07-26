// const scriptURL = 'https://script.google.com/macros/library/d/1Ok3rIyrSeKDJb4pVN9NEja_DFopac1-JfpxESpYNxPu2UCvlIHBnTbbf/1';
const scriptURL = 'https://script.google.com/macros/s/AKfycbw_1jDdWRNUyIggGw1UBac_re62ObHpVO-y70kEVYhDsdVfykK5dUkYHo_Tob_ppvc/exec';
const form = document.forms['franchise-form'];
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