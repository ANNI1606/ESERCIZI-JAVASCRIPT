function validateForm() {
  console.log("Inizio funzione validateForm");

  const emailInput = document.getElementById("email");

  const submit = document.getElementById("submit");
  submit.addEventListener("click", validate);
  function validate(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    let valid = true;

    //Verifica che gli elementi esistano
    if (!nameInput || !emailInput || !nameError || !emailError) {
      console.error("Elementi non trovati.");
      return;
    }

    //Validazione del nome
    if (!nameInput.value) {
      const nameError = document.getElementById("nameError");
      nameError.classList.add("visible");
      nameInput.classList.add("invalid");
      nameError.setAttribute("aria-hidden", false);
      nameError.setAttribute("aria-invalid", true);
    }
    return valid;
  }

  //Validazione dell'email
  if (!emailPattern.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailInput.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailErrorError.setAttribute("aria-invalid", true);
  }
  return valid;
}

console.log("Fine funzione validateForm");
