// Affichage des prochains événements sur la page d'accueil.
// TODO (S3) : fetch réel depuis data/events.json, tri par date, limite à 3.

const upcomingContainer = document.getElementById('upcoming-events');

if (upcomingContainer) {
  upcomingContainer.innerHTML = '<p class="loading">Événements bientôt disponibles.</p>';
}
