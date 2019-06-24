'use strict';

function validateEmail() {
    const email = document.getElementById("email").value
    const confirmEmail = document.getElementById("confirm-email").value

    if (email != confirmEmail) {
        alert("Emails do not match.")
    }
  }

function resetForm() {
   document.getElementById("interview-form").reset()
}