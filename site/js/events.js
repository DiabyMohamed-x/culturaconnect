// Gestion de l'affichage dynamique des événements à partir de data/events.json
// Utilisé par : index.html (aperçu), evenements.html (liste complète),
// evenement.html (détail via ?id=... dans l'URL)

function formatDateFR(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function eventCardHTML(event) {
  return `
    <a href="evenement.html?id=${event.id}" class="event-card">
      <div class="event-date">${formatDateFR(event.date)}</div>
      <h3>${event.titre}</h3>
      <p>${event.lieu}</p>
    </a>
  `;
}

async function loadEvents() {
  const response = await fetch('data/events.json');
  if (!response.ok) {
    throw new Error('Impossible de charger les événements');
  }
  return response.json();
}

// --- Page d'accueil : aperçu des 3 prochains événements ---
const upcomingContainer = document.getElementById('upcoming-events');
if (upcomingContainer) {
  loadEvents()
    .then(events => {
      const sorted = events.sort((a, b) => new Date(a.date) - new Date(b.date));
      const preview = sorted.slice(0, 3);
      upcomingContainer.innerHTML = preview.map(eventCardHTML).join('');
    })
    .catch(() => {
      upcomingContainer.innerHTML = '<p class="loading">Événements indisponibles pour le moment.</p>';
    });
}

// --- Page liste complète des événements ---
const eventsListContainer = document.getElementById('events-list');
if (eventsListContainer) {
  loadEvents()
    .then(events => {
      const sorted = events.sort((a, b) => new Date(a.date) - new Date(b.date));
      eventsListContainer.innerHTML = sorted.map(eventCardHTML).join('');
    })
    .catch(() => {
      eventsListContainer.innerHTML = '<p class="loading">Événements indisponibles pour le moment.</p>';
    });
}

// --- Page détail d'un événement ---
const eventDetailContainer = document.getElementById('event-detail');
if (eventDetailContainer) {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id');

  loadEvents()
    .then(events => {
      const event = events.find(e => e.id === eventId);
      if (!event) {
        eventDetailContainer.innerHTML = '<p class="loading">Événement introuvable.</p>';
        return;
      }
      eventDetailContainer.innerHTML = `
        <h1>${event.titre}</h1>
        <p class="event-date">${formatDateFR(event.date)} — ${event.lieu}</p>
        <p>${event.description}</p>
      `;
    })
    .catch(() => {
      eventDetailContainer.innerHTML = '<p class="loading">Impossible de charger l\'événement.</p>';
    });
}
