// store/store.js

const state = {
  user: null,
  messages: [],
  selectedChatId: null,
};

const listeners = [];

export const store = {
  getState() {
    return state;
  },

  // Pour écouter les changements
  subscribe(listener) {
    listeners.push(listener);
  },

  // Pour mettre à jour une clé
  set(key, value) {
    state[key] = value;
    // Notifier tous les listeners
    listeners.forEach(listener => listener(state));
  },

  // Pour réinitialiser (ex: logout)
  reset() {
    Object.keys(state).forEach(key => {
      state[key] = null;
    });
    listeners.forEach(listener => listener(state));
  }
};
