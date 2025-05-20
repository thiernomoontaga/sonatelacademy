export function createElement(propertiesTag) {
  if (!Array.isArray(propertiesTag)) return null;

  const [tagName, attributes, textContent] = propertiesTag;
  const element = document.createElement(tagName);

  if (attributes && typeof attributes === 'object') {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

export function createInput(tags) {
  return tags.map(tag => createElement(tag)).filter(Boolean);
}

export function createCardElement(element) {
  const card = document.createElement('div');
  card.className = 'card';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  const titleH1 = document.createElement('h1');
  titleH1.textContent = element.title;
  titleDiv.appendChild(titleH1);

  const descDiv = document.createElement('div');
  descDiv.className = 'description';
  descDiv.textContent = element.description;

  const scoreDiv = document.createElement('div');
  scoreDiv.className = 'score';
  scoreDiv.textContent = `Pts: ${element.score}`;

  card.appendChild(titleDiv);
  card.appendChild(descDiv);
  card.appendChild(scoreDiv);

  return card;
}
