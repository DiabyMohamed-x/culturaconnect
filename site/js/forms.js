// Validation basique côté client pour les formulaires contact et proposition.
// Rappel : ceci ne remplace pas une validation serveur (ici il n'y a pas de
// backend, donc c'est purement pour l'expérience utilisateur).

function setupFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('[required]');
    let firstInvalid = null;

    requiredFields.forEach((field) => {
      field.classList.remove('invalid');
      if (!field.value.trim()) {
        field.classList.add('invalid');
        if (!firstInvalid) firstInvalid = field;
      }
    });

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value.trim())) {
        emailField.classList.add('invalid');
        if (!firstInvalid) firstInvalid = emailField;
      }
    }

    if (firstInvalid) {
      feedback.textContent = 'Merci de vérifier les champs en rouge avant d\'envoyer.';
      feedback.hidden = false;
      feedback.classList.remove('success');
      feedback.classList.add('error');
      firstInvalid.focus();
      return;
    }

    // Pas de backend : on simule juste une confirmation visuelle.
    feedback.textContent = 'Merci, votre message a bien été pris en compte.';
    feedback.hidden = false;
    feedback.classList.remove('error');
    feedback.classList.add('success');
    form.reset();
  });
}

setupFormValidation('contact-form');
setupFormValidation('proposal-form');
