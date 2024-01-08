function validateForm() {
  console.log("Inizio funzione validateForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  //Verifica che gli elementi esistano
  if (!nameInput || !emailInput || !nameError || !emailError) {
    console.error("Elementi non trovati.");
    return;
  }

  //Validazione del nome
  if (nameInput.ariaValueMax.trim() === "") {
    nameError.textContent = "Il campo non può essere vuoto.";
  } else {
    nameError.textContent = "";
  }

  //Valisazione dell'email
  const emailPattern = "^[^s@]+@[^s@]+.[^s@]+$";
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Inserisci un indirizzo email valido.";
  } else {
    emailError.textContent = "";
  }

  console.log("Fine funzione validateForm");
}
