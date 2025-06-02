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
  currentChat: null, 
  currentView: 'contacts' 
};

const VIEWS = [
  { action: DOM.newContactBtn, view: DOM.templateFormAddContact, title: 'Nouveau contact' },
  { action: DOM.messageBtn, view: DOM.templateContact, title: 'Discussions' },
  { action: DOM.groupsBtn, view: DOM.templateGroup, title: 'Groupes' },
  { action: DOM.archivesBtn, view: null, title: 'Archives' }
];

/* ========== FONCTIONS UTILITAIRES ========== */
const Utils = {
  clearMain: () => { 
    try {
      DOM.main.innerHTML = ''; 
    } catch (error) {
      console.error('Error clearing main:', error);
    }
  },
  
  renderView: (template) => {
    if (!template) {
      console.error('Template is undefined');
      return;
    }
    Utils.clearMain();
    try {
      const clone = template.content.cloneNode(true);
      DOM.main.append(clone);
    } catch (error) {
      console.error('Error rendering view:', error);
    }
  },
  
  safeQuerySelector: (selector, parent = document) => {
    const el = parent.querySelector(selector);
    if (!el) console.error(`Element not found: ${selector}`);
    return el;
  },
  
  handleError: (error, context) => {
    console.error(`Error in ${context}:`, error);
    alert(`Une erreur est survenue: ${error.message}`);
  },
  
  generateInitials: (name, length = 2) => {
    return name.split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, length);
  },

  generateId: (name) => {
    return name.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();
  },

  formatTime: (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  },

  formatDate: (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
      return 'Aujourd\'hui';
    }
    return date.toLocaleDateString('fr-FR');
  }
};

/* ========== GESTION DES MESSAGES ========== */
const MessagesManager = {
  send: (chatId, content, sender = 'Moi') => {
    try {
      if (!chatId || !content?.trim()) return false;

      if (!AppState.messages[chatId]) {
        AppState.messages[chatId] = [];
      }

      const message = {
        id: Date.now(),
        content: content.trim(),
        sender: sender,
        timestamp: Date.now(),
        read: false
      };

      AppState.messages[chatId].push(message);
      localStorage.setItem('whatsappMessages', JSON.stringify(AppState.messages));
      
      MessagesManager.updateLastMessage(chatId, content, sender);
      
      return true;
    } catch (error) {
      Utils.handleError(error, 'MessagesManager.send');
      return false;
    }
  },

  receive: (chatId, content, sender) => {
    return MessagesManager.send(chatId, content, sender);
  },

  updateLastMessage: (chatId, content, sender) => {
    try {
      const contact = AppState.contacts.find(c => c.id === chatId);
      if (contact) {
        contact.lastMessage = sender === 'Moi' ? `Vous: ${content}` : content;
        contact.lastMessageTime = Date.now();
        localStorage.setItem('whatsappContacts', JSON.stringify(AppState.contacts));
      }

      const group = AppState.groups.find(g => g.id === chatId);
      if (group) {
        group.lastMessage = `${sender}: ${content}`;
        group.lastMessageTime = Date.now();
        localStorage.setItem('whatsappGroups', JSON.stringify(AppState.groups));
      }
    } catch (error) {
      console.error('Error updating last message:', error);
    }
  },

  getMessages: (chatId) => {
    return AppState.messages[chatId] || [];
  },

  load: () => {
    try {
      const saved = localStorage.getItem('whatsappMessages');
      if (saved) {
        AppState.messages = JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
      localStorage.removeItem('whatsappMessages');
    }
  }
};

/* ========== GESTION DES ARCHIVES ========== */
const ArchivesManager = {
  archiveContact: (contactId) => {
    try {
      const contactIndex = AppState.contacts.findIndex(c => c.id === contactId);
      if (contactIndex === -1) return false;

      const contact = AppState.contacts.splice(contactIndex, 1)[0];
      contact.archivedAt = Date.now();
      AppState.archivedContacts.push(contact);

      localStorage.setItem('whatsappContacts', JSON.stringify(AppState.contacts));
      localStorage.setItem('whatsappArchivedContacts', JSON.stringify(AppState.archivedContacts));
      
      return true;
    } catch (error) {
      Utils.handleError(error, 'ArchivesManager.archiveContact');
      return false;
    }
  },

  archiveGroup: (groupId) => {
    try {
      const groupIndex = AppState.groups.findIndex(g => g.id === groupId);
      if (groupIndex === -1) return false;

      const group = AppState.groups.splice(groupIndex, 1)[0];
      group.archivedAt = Date.now();
      AppState.archivedGroups.push(group);

      localStorage.setItem('whatsappGroups', JSON.stringify(AppState.groups));
      localStorage.setItem('whatsappArchivedGroups', JSON.stringify(AppState.archivedGroups));
      
      return true;
    } catch (error) {
      Utils.handleError(error, 'ArchivesManager.archiveGroup');
      return false;
    }
  },

  unarchiveContact: (contactId) => {
    try {
      const contactIndex = AppState.archivedContacts.findIndex(c => c.id === contactId);
      if (contactIndex === -1) return false;

      const contact = AppState.archivedContacts.splice(contactIndex, 1)[0];
      delete contact.archivedAt;
      AppState.contacts.push(contact);

      localStorage.setItem('whatsappContacts', JSON.stringify(AppState.contacts));
      localStorage.setItem('whatsappArchivedContacts', JSON.stringify(AppState.archivedContacts));
      
      return true;
    } catch (error) {
      Utils.handleError(error, 'ArchivesManager.unarchiveContact');
      return false;
    }
  },

  unarchiveGroup: (groupId) => {
    try {
      const groupIndex = AppState.archivedGroups.findIndex(g => g.id === groupId);
      if (groupIndex === -1) return false;

      const group = AppState.archivedGroups.splice(groupIndex, 1)[0];
      delete group.archivedAt;
      AppState.groups.push(group);

      localStorage.setItem('whatsappGroups', JSON.stringify(AppState.groups));
      localStorage.setItem('whatsappArchivedGroups', JSON.stringify(AppState.archivedGroups));
      
      return true;
    } catch (error) {
      Utils.handleError(error, 'ArchivesManager.unarchiveGroup');
      return false;
    }
  },

  display: () => {
    try {
      Utils.clearMain();
      const fragment = document.createDocumentFragment();

      if (AppState.archivedContacts.length === 0 && AppState.archivedGroups.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'text-center p-8 text-gray-500';
        emptyDiv.textContent = 'Aucun élément archivé';
        fragment.appendChild(emptyDiv);
      }

      if (AppState.archivedContacts.length > 0) {
        const contactsTitle = document.createElement('h3');
        contactsTitle.className = 'text-lg font-bold p-2 text-gray-600';
        contactsTitle.textContent = 'Contacts archivés';
        fragment.appendChild(contactsTitle);

        AppState.archivedContacts.forEach(contact => {
          const contactDiv = ArchivesManager.createArchivedItem(contact, 'contact');
          fragment.appendChild(contactDiv);
        });
      }

      if (AppState.archivedGroups.length > 0) {
        const groupsTitle = document.createElement('h3');
        groupsTitle.className = 'text-lg font-bold p-2 text-gray-600 mt-4';
        groupsTitle.textContent = 'Groupes archivés';
        fragment.appendChild(groupsTitle);

        AppState.archivedGroups.forEach(group => {
          const groupDiv = ArchivesManager.createArchivedItem(group, 'group');
          fragment.appendChild(groupDiv);
        });
      }

      DOM.main.appendChild(fragment);
    } catch (error) {
      Utils.handleError(error, 'ArchivesManager.display');
    }
  },

  createArchivedItem: (item, type) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'h-17 w-[100%] bg-[rgba(249,247,245,255)] shadow-slate-300 flex flex-row p-4 items-center';
    
    const avatar = document.createElement('div');
    avatar.className = 'h-12 w-12 bg-gray-500 rounded-full flex text-center justify-center items-center text-white';
    avatar.textContent = item.initials;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'ml-5 flex flex-col flex-grow';
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'font-bold';
    nameSpan.textContent = item.name;
    
    const archivedSpan = document.createElement('span');
    archivedSpan.className = 'text-gray-500 text-sm';
    archivedSpan.textContent = `Archivé le ${Utils.formatDate(item.archivedAt)}`;
    
    const unarchiveBtn = document.createElement('button');
    unarchiveBtn.className = 'bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600';
    unarchiveBtn.textContent = 'Désarchiver';
    unarchiveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (type === 'contact') {
        ArchivesManager.unarchiveContact(item.id);
      } else {
        ArchivesManager.unarchiveGroup(item.id);
      }
      ArchivesManager.display();
    });
    
    contentDiv.append(nameSpan, archivedSpan);
    itemDiv.append(avatar, contentDiv, unarchiveBtn);
    
    return itemDiv;
  },

  load: () => {
    try {
      const savedContacts = localStorage.getItem('whatsappArchivedContacts');
      if (savedContacts) {
        AppState.archivedContacts = JSON.parse(savedContacts);
      }

      const savedGroups = localStorage.getItem('whatsappArchivedGroups');
      if (savedGroups) {
        AppState.archivedGroups = JSON.parse(savedGroups);
      }
    } catch (error) {
      console.error('Error loading archives:', error);
    }
  }
};

/* ========== INTERFACE DE CHAT ========== */
const ChatInterface = {
  open: (type, id, data) => {
    try {
      AppState.currentChat = { type, id, data };
      ChatInterface.renderChatHeader();
      ChatInterface.renderMessages();
      ChatInterface.renderInput();
    } catch (error) {
      Utils.handleError(error, 'ChatInterface.open');
    }
  },

  renderChatHeader: () => {
    const header = document.querySelector('.h-\\[70px\\]');
    if (!header) return;

    const { type, data } = AppState.currentChat;
    const avatar = header.querySelector('.h-12.w-12');
    const title = header.querySelector('.ml-2.mt-3');
    
    if (avatar) {
      avatar.className = 'h-12 w-12 rounded-full bg-black flex items-center justify-center text-white';
      avatar.textContent = data.initials;
    }
    
    if (title) {
      title.textContent = data.name;
    }

    const archiveBtn = document.querySelector('#archive');
    if (archiveBtn) {
      archiveBtn.onclick = () => {
        if (type === 'contact') {
          ArchivesManager.archiveContact(AppState.currentChat.id);
          ContactsManager.display();
        } else if (type === 'group') {
          ArchivesManager.archiveGroup(AppState.currentChat.id);
          GroupsManager.display();
        }
        ChatInterface.close();
      };
    }
  },

  renderMessages: () => {
    const chatArea = document.querySelector('.flex.h-\\[90\\%\\]');
    if (!chatArea) return;

    let messagesContainer = chatArea.querySelector('.messages-container');
    if (!messagesContainer) {
      messagesContainer = document.createElement('div');
      messagesContainer.className = 'messages-container flex-1 overflow-y-auto p-4 space-y-2';
      chatArea.insertBefore(messagesContainer, chatArea.firstChild.nextSibling);
    }

    messagesContainer.innerHTML = '';
    
    const messages = MessagesManager.getMessages(AppState.currentChat.id);
    
    if (messages.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'text-center text-gray-500 mt-10';
      emptyDiv.textContent = 'Aucun message pour le moment';
      messagesContainer.appendChild(emptyDiv);
      return;
    }

    messages.forEach(message => {
      const messageDiv = document.createElement('div');
      messageDiv.className = `flex ${message.sender === 'Moi' ? 'justify-end' : 'justify-start'} mb-2`;
      
      const bubble = document.createElement('div');
      bubble.className = `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        message.sender === 'Moi' 
          ? 'bg-green-500 text-white' 
          : 'bg-white text-gray-800 border'
      }`;
      
      const content = document.createElement('div');
      content.textContent = message.content;
      
      const time = document.createElement('div');
      time.className = 'text-xs mt-1 opacity-70';
      time.textContent = Utils.formatTime(message.timestamp);
      
      bubble.append(content, time);
      messageDiv.appendChild(bubble);
      messagesContainer.appendChild(messageDiv);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  renderInput: () => {
    const inputArea = document.querySelector('.w-full.h-\\[10\\%\\]');
    if (!inputArea) return;

    const input = inputArea.querySelector('input');
    const sendBtn = inputArea.querySelector('.bg-green-700');

    if (input && sendBtn) {
      const newInput = input.cloneNode(true);
      const newSendBtn = sendBtn.cloneNode(true);
      
      input.parentNode.replaceChild(newInput, input);
      sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);

      const sendMessage = () => {
        const content = newInput.value.trim();
        if (content) {
          MessagesManager.send(AppState.currentChat.id, content);
          newInput.value = '';
          ChatInterface.renderMessages();
          
          setTimeout(() => {
            const responses = [
              'Message reçu !',
              'Merci pour votre message',
              'Je vous réponds bientôt',
              'C\'est noté',
              'OK',
              'Bien reçu'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            MessagesManager.receive(
              AppState.currentChat.id, 
              randomResponse, 
              AppState.currentChat.data.name
            );
            ChatInterface.renderMessages();
            
            if (AppState.currentView === 'contacts' && AppState.currentChat.type === 'contact') {
              ContactsManager.display();
            } else if (AppState.currentView === 'groups' && AppState.currentChat.type === 'group') {
              GroupsManager.display();
            }
          }, 2000);
        }
      };

      newSendBtn.addEventListener('click', sendMessage);
      newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });
    }
  },

  close: () => {
    AppState.currentChat = null;
    const header = document.querySelector('.h-[70px]');
    if (header) {
      const avatar = header.querySelector('.h-12.w-12');
      const title = header.querySelector('.ml-2.mt-3');
      
      if (avatar) {
        avatar.className = 'h-12 w-12 rounded-[100%] bg-slate-500 mt-1';
        avatar.textContent = '';
      }
      
      if (title) {
        title.textContent = 'Conversation';
      }
    }

    const chatArea = document.querySelector('.flex.h-\\[90\\%\\]');
    if (chatArea) {
      const messagesContainer = chatArea.querySelector('.messages-container');
      if (messagesContainer) {
        messagesContainer.remove();
      }
    }
  }
};

/* ========== GESTION DES CONTACTS (MISE À JOUR) ========== */
const ContactsManager = {
  display: () => {
    try {
      AppState.currentView = 'contacts';
      Utils.clearMain();
      const fragment = document.createDocumentFragment();
      
      AppState.contacts
        .sort((a, b) => (b.lastMessageTime || 0) - (a.lastMessageTime || 0))
        .forEach(contact => {
          const contactDiv = document.createElement('div');
          contactDiv.className = 'h-17 w-[100%] bg-[rgba(249,247,245,255)] shadow-slate-300 flex flex-row p-4 cursor-pointer hover:bg-gray-50';
          
          const avatar = document.createElement('div');
          avatar.className = 'h-12 w-12 bg-black rounded-full flex text-center justify-center items-center text-white';
          avatar.textContent = contact.initials;
          
          const contentDiv = document.createElement('div');
          contentDiv.className = 'ml-5 flex flex-col flex-grow';
          
          const nameSpan = document.createElement('span');
          nameSpan.className = 'font-bold';
          nameSpan.textContent = contact.name;
          
          const msgSpan = document.createElement('span');
          msgSpan.className = 'text-gray-600 text-sm';
          msgSpan.textContent = contact.lastMessage || "Nouveau contact";
          
          const timeDiv = document.createElement('div');
          timeDiv.className = 'flex flex-col items-end justify-center';
          
          if (contact.lastMessageTime) {
            const timeSpan = document.createElement('span');
            timeSpan.className = 'text-xs text-gray-500';
            timeSpan.textContent = Utils.formatTime(contact.lastMessageTime);
            timeDiv.appendChild(timeSpan);
          }
          
          contentDiv.append(nameSpan, msgSpan);
          contactDiv.append(avatar, contentDiv, timeDiv);
          
          contactDiv.addEventListener('click', () => {
            ChatInterface.open('contact', contact.id, contact);
          });
          
          fragment.appendChild(contactDiv);
        });
      
      DOM.main.appendChild(fragment);
    } catch (error) {
      Utils.handleError(error, 'ContactsManager.display');
    }
  },
  
  add: (name, number) => {
    try {
      if (!name?.trim() || !number?.trim()) {
        throw new Error('Veuillez remplir tous les champs');
      }

      const newContact = { 
        id: Utils.generateId(name),
        name: name.trim(),
        number: number.trim(),
        initials: Utils.generateInitials(name),
        lastMessage: "Nouveau contact",
        lastMessageTime: null
      };
      
      AppState.contacts.push(newContact);
      localStorage.setItem('whatsappContacts', JSON.stringify(AppState.contacts));
      return true;
    } catch (error) {
      Utils.handleError(error, 'ContactsManager.add');
      return false;
    }
  },
  
  load: () => {
    try {
      const saved = localStorage.getItem('whatsappContacts');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.forEach(contact => {
          if (!contact.id) {
            contact.id = Utils.generateId(contact.name);
          }
          if (!AppState.contacts.some(c => c.id === contact.id)) {
            AppState.contacts.push(contact);
          }
        });
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
      localStorage.removeItem('whatsappContacts');
    }
  }
};

/* ========== GESTION DES GROUPES (MISE À JOUR) ========== */
const GroupsManager = {
  display: () => {
    try {
      AppState.currentView = 'groups';
      Utils.clearMain();
      const fragment = document.createDocumentFragment();
      
      const addButton = document.createElement('button');
      addButton.className = 'w-[80%] p-4 bg-black ml-10 mt-4 text-white font-bold rounded-2xl mb-4';
      addButton.textContent = 'Ajouter un groupe';
      addButton.id = 'add_groupe';
      fragment.appendChild(addButton);
      
      AppState.groups
        .sort((a, b) => (b.lastMessageTime || 0) - (a.lastMessageTime || 0))
        .forEach(group => {
          const groupDiv = document.createElement('div');
          groupDiv.className = 'h-17 w-[100%] bg-[rgba(249,247,245,255)] shadow-slate-300 flex flex-row p-4 cursor-pointer hover:bg-gray-50';
          
          const avatar = document.createElement('div');
          avatar.className = 'h-12 w-12 bg-black rounded-full flex justify-center items-center text-white';
          avatar.textContent = group.initials;
          
          const contentDiv = document.createElement('div');
          contentDiv.className = 'ml-5 flex flex-col flex-grow';
          
          const nameSpan = document.createElement('span');
          nameSpan.className = 'font-bold';
          nameSpan.textContent = group.name;
          
          const msgSpan = document.createElement('span');
          msgSpan.className = 'text-gray-600 text-sm';
          msgSpan.textContent = group.lastMessage || "Groupe créé";
          
          const membersInfo = document.createElement('div');
          membersInfo.className = 'text-xs text-gray-500 mt-1';
          membersInfo.textContent = `${group.members?.length || 0} membres`;
          
          const timeDiv = document.createElement('div');
          timeDiv.className = 'flex flex-col items-end justify-center';
          
          if (group.lastMessageTime) {
            const timeSpan = document.createElement('span');
            timeSpan.className = 'text-xs text-gray-500';
            timeSpan.textContent = Utils.formatTime(group.lastMessageTime);
            timeDiv.appendChild(timeSpan);
          }
          
          contentDiv.append(nameSpan, msgSpan, membersInfo);
          groupDiv.append(avatar, contentDiv, timeDiv);
          
          groupDiv.addEventListener('click', () => {
            ChatInterface.open('group', group.id, group);
          });
          
          fragment.appendChild(groupDiv);
        });
      
      DOM.main.appendChild(fragment);
    } catch (error) {
      Utils.handleError(error, 'GroupsManager.display');
    }
  },
  
  add: (name, description, members) => {
    try {
      if (!name?.trim()) {
        throw new Error('Veuillez entrer un nom de groupe');
      }

      const newGroup = { 
        id: Utils.generateId(name),
        name: name.trim(),
        description: description?.trim() || "Aucune description",
        initials: Utils.generateInitials(name),
        lastMessage: "Groupe créé",
        lastMessageTime: Date.now(),
        members: members || []
      };
      
      AppState.groups.push(newGroup);
      localStorage.setItem('whatsappGroups', JSON.stringify(AppState.groups));
      return true;
    } catch (error) {
      Utils.handleError(error, 'GroupsManager.add');
      return false;
    }
  },
  
  renderContactSelection: () => {
    const container = document.getElementById('contactsSelection');
    if (!container) return;

    container.innerHTML = '';
    
    AppState.contacts.forEach(contact => {
      const contactDiv = document.createElement('div');
      contactDiv.className = 'flex items-center p-2 hover:bg-gray-100 rounded';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `contact-${contact.id}`;
      checkbox.value = contact.name;
      checkbox.className = 'mr-2';
      
      const label = document.createElement('label');
      label.htmlFor = `contact-${contact.id}`;
      label.className = 'flex items-center cursor-pointer';
      label.innerHTML = `
        <div class="h-8 w-8 bg-black rounded-full flex items-center justify-center text-white text-xs mr-2">
          ${contact.initials}
        </div>
        <span>${contact.name}</span>
      `;
      
      contactDiv.appendChild(checkbox);
      contactDiv.appendChild(label);
      container.appendChild(contactDiv);
    });
  },
  
  displayGroupDetails: (group) => {
    try {
      Utils.clearMain();
      const fragment = document.createDocumentFragment();
      
      const header = document.createElement('div');
      header.className = 'flex items-center p-4 border-b';
      header.innerHTML = `
        <button id="backToGroups" class="mr-4 text-blue-500">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 class="text-xl font-bold">${group.name}</h2>
      `;
      
      const descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'p-4 text-gray-600';
      descriptionDiv.textContent = group.description || "Aucune description";
      
      const membersTitle = document.createElement('h3');
      membersTitle.className = 'p-4 font-bold border-t';
      membersTitle.textContent = `Membres (${group.members?.length || 0})`;
      
      const membersList = document.createElement('div');
      membersList.className = 'divide-y';
      
      group.members.forEach(memberName => {
        const contact = AppState.contacts.find(c => c.name === memberName);
        if (contact) {
          const memberDiv = document.createElement('div');
          memberDiv.className = 'flex items-center p-4';
          memberDiv.innerHTML = `
            <div class="h-10 w-10 bg-black rounded-full flex items-center justify-center text-white mr-3">
              ${contact.initials}
            </div>
            <span>${contact.name}</span>
          `;
          membersList.appendChild(memberDiv);
        }
      });
      
      fragment.appendChild(header);
      fragment.appendChild(descriptionDiv);
      fragment.appendChild(membersTitle);
      fragment.appendChild(membersList);
      DOM.main.appendChild(fragment);
      DOM.title.textContent = group.name;
      
      document.getElementById('backToGroups')?.addEventListener('click', () => {
        GroupsManager.display();
        DOM.title.textContent = 'Groupes';
      });
    } catch (error) {
      Utils.handleError(error, 'GroupsManager.displayGroupDetails');
    }
  },
  
  load: () => {
    try {
      const saved = localStorage.getItem('whatsappGroups');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.forEach(group => {
          if (!group.id) {
            group.id = Utils.generateId(group.name);
          }
          if (!AppState.groups.some(g => g.id === group.id)) {
            AppState.groups.push(group);
          }
        });
      }
    } catch (error) {
      console.error('Error loading groups:', error);
      localStorage.removeItem('whatsappGroups');
    }
  }
};

/* ========== GESTION DES ÉVÉNEMENTS (MISE À JOUR) ========== */
const EventHandlers = {
  init: () => {
    try {
      if (!DOM.main || !DOM.title) {
        throw new Error('Éléments DOM critiques manquants');
      }

      VIEWS.forEach(view => {
        view.action?.addEventListener('click', () => {
          if (view.title === 'Discussions') {
            ContactsManager.display();
            ChatInterface.close();
          } else if (view.title === 'Groupes') {
            GroupsManager.display();
            ChatInterface.close();
          } else if (view.title === 'Archives') {
            ArchivesManager.display();
            ChatInterface.close();
          } else {
            Utils.renderView(view.view);
            ChatInterface.close();
          }
          DOM.title.textContent = view.title;
        });
      });

      DOM.main.addEventListener('submit', e => {
        if (e.target.matches('form')) {
          e.preventDefault();
          const form = e.target;
          
          try {
            if (form.querySelector('#nameUser')) {
              const name = form.querySelector('#nameUser').value;
              const number = form.querySelector('#numberUser').value;
              if (ContactsManager.add(name, number)) {
                form.reset();
                ContactsManager.display();
                DOM.title.textContent = 'Discussions';
              }
            } 
            else if (form.querySelector('#groupName')) {
              const name = form.querySelector('#groupName').value;
              const desc = form.querySelector('#groupDescription').value;
              
              const checkboxes = form.querySelectorAll('#contactsSelection input[type="checkbox"]:checked');
              const members = Array.from(checkboxes).map(cb => cb.value);
              
              if (GroupsManager.add(name, desc, members)) {
                form.reset();
                GroupsManager.display();
                DOM.title.textContent = 'Groupes';
              }
            }
          } catch (error) {
            Utils.handleError(error, 'form submission');
          }
        }
      });

      DOM.main.addEventListener('click', e => {
        try {
          if (e.target.id === 'add_groupe') {
            e.preventDefault();
            Utils.renderView(DOM.formAddGroup);
            DOM.title.textContent = 'Nouveau Groupe';
            GroupsManager.renderContactSelection();
          }
          
          if (e.target.id === 'cancelGroup') {
            e.preventDefault();
            GroupsManager.display();
            DOM.title.textContent = 'Groupes';
          }
        } catch (error) {
          Utils.handleError(error, 'button click');
        }
      });

      DOM.main.addEventListener('click', e => {
        if (e.target.type === 'reset') {
          e.preventDefault();
          if (DOM.title.textContent === 'Nouveau contact') {
            ContactsManager.display();
            DOM.title.textContent = 'Discussions';
          } else if (DOM.title.textContent === 'Nouveau Groupe') {
            GroupsManager.display();
            DOM.title.textContent = 'Groupes';
          }
        }
      });

    } catch (error) {
      Utils.handleError(error, 'EventHandlers.init');
    }
  }
};

/* ========== FONCTIONS DE SIMULATION ========== */
const SimulationManager = {
  startMessageSimulation: () => {
    const messages = [
      'Salut ! Comment ça va ?',
      'Tu es disponible ?',
      'On se voit ce soir ?',
      'Merci pour ton aide !',
      'À bientôt !',
      'J\'ai une question...',
      'C\'est noté !',
      'Parfait !',
      'D\'accord',
      'OK merci'
    ];

    setInterval(() => {
      const allChats = [...AppState.contacts, ...AppState.groups];
      if (allChats.length === 0) return;

      const randomChat = allChats[Math.floor(Math.random() * allChats.length)];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      if (AppState.currentChat && AppState.currentChat.id === randomChat.id) return;

      MessagesManager.receive(randomChat.id, randomMessage, randomChat.name);
      
      if (AppState.currentView === 'contacts' && AppState.contacts.includes(randomChat)) {
        ContactsManager.display();
      } else if (AppState.currentView === 'groups' && AppState.groups.includes(randomChat)) {
        GroupsManager.display();
      }
    }, 15000); 
  },

  addDemoContacts: () => {
    const demoContacts = [
      { name: 'Nazir Diallo', number: '+221701234567' },
      { name: 'Barra Diop', number: '+221702345678' },
      { name: 'Thierno Sy', number: '+221703456789' },
      { name: 'Aissa Fall', number: '+221704567890' },
      { name: 'Moussa Ba', number: '+221705678901' }
    ];

    demoContacts.forEach(contact => {
      if (!AppState.contacts.some(c => c.name === contact.name)) {
        ContactsManager.add(contact.name, contact.number);
      }
    });
  },

  addDemoGroups: () => {
    const demoGroups = [
      { 
        name: 'MAFIA BI', 
        description: 'Groupe des amis proches',
        members: ['Nazir Diallo', 'Barra Diop', 'Thierno Sy']
      },
      { 
        name: 'Famille', 
        description: 'Groupe familial',
        members: ['Aissa Fall', 'Moussa Ba']
      },
      { 
        name: 'Travail', 
        description: 'Équipe de projet',
        members: ['Nazir Diallo', 'Thierno Sy', 'Aissa Fall']
      }
    ];

    demoGroups.forEach(group => {
      if (!AppState.groups.some(g => g.name === group.name)) {
        GroupsManager.add(group.name, group.description, group.members);
      }
    });
  }
};

/* ========== TEMPLATE FORMULAIRE DE GROUPE (MISE À JOUR) ========== */
const updateGroupTemplate = () => {
  const template = DOM.formAddGroup;
  if (template) {
    template.innerHTML = `
      <form class="flex flex-col">
        <h1 class="text-2xl font-bold m-4">Ajouter un groupe</h1>
        <input type="text" 
               class="w-[95%] p-3 rounded-2xl outline-none m-2" 
               id="groupName" 
               placeholder="Ajouter un nom de groupe"
               required>

        <input type="text" 
               class="w-[95%] p-3 rounded-2xl outline-none m-2" 
               id="groupDescription" 
               placeholder="Ajouter la description du groupe">

        <div class="max-h-40 overflow-y-auto border rounded-lg m-2 p-2">
          <h3 class="font-bold mb-2">Sélectionnez les membres :</h3>
          <div id="contactsSelection">
          </div>
        </div>

        <button type="submit" class="bg-green-700 text-white w-[90%] m-4 p-2 rounded-xl font-bold">
          Enregistrer
        </button>
        <button type="button" class="text-red-700 font-bold" id="cancelGroup">
          Annuler
        </button>
      </form>
    `;
  }
};

/* ========== INITIALISATION ========== */
document.addEventListener('DOMContentLoaded', () => {
  try {
    updateGroupTemplate();
    
    ContactsManager.load();
    GroupsManager.load();
    ArchivesManager.load();
    MessagesManager.load();
    
    if (AppState.contacts.length === 0) {
      SimulationManager.addDemoContacts();
    }
    
    if (AppState.groups.length === 0) {
      SimulationManager.addDemoGroups();
    }
    
    EventHandlers.init();
    
    ContactsManager.display();
    DOM.title.textContent = 'Discussions';
    
    SimulationManager.startMessageSimulation();
  
  } catch (error) {
    Utils.handleError(error, 'app initialization');
    DOM.main.innerHTML = '<p class="text-red-500 p-4">Erreur critique. Veuillez recharger.</p>';
  }
});