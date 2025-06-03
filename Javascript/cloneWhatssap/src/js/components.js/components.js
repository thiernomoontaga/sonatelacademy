/* ========== CONSTANTES ET VARIABLES GLOBALES ========== */
const DOM = {
  templateContact: document.querySelector('#user'),
  main: document.querySelector('#main'),
  templateFormAddContact: document.querySelector('#add-contact'),
  formAddGroup: document.querySelector('#form_add_groupe'),
  templateGroup: document.querySelector('#my_groups'),
  title: document.querySelector('#title'),
  messageBtn: document.querySelector('#message'),
  groupsBtn: document.querySelector('#groups'),
  newContactBtn: document.querySelector('#new_contact'),
  archivesBtn: document.querySelector('#archives'),
  shareBtn: document.querySelector('#share')
};

const AppState = {
  groups: [],
  contacts: [],
  archivedContacts: [],
  archivedGroups: [],
  messages: {}, 
};

const VIEWS = [
  { action: DOM.newContactBtn, view: DOM.templateFormAddContact, title: 'Nouveau contact' },
  { action: DOM.messageBtn, view: DOM.templateContact, title: 'Discussions' },
  { action: DOM.groupsBtn, view: DOM.templateGroup, title: 'Groupes' },
  { action: DOM.archivesBtn, view: null, title: 'Archives' }
];





