function generateRandomHTML() {
  const tags = ['div', 'p', 'h1', 'h3', 'h5', 'span', 'button'];
  const attributes = ['id', 'class', 'style'];

  const randomTag = tags[Math.floor(Math.random() * tags.length)];
  const randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];

  const htmlCode = `<${randomTag} ${randomAttribute}="value">Content</${randomTag}>`;

  document.getElementById("html").innerHTML = htmlCode;
}
