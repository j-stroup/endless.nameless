function generateRandomHTML() {
  var arr = [];
  for (let step = 0; step <= 500; step++) {
    const tags = ['div', 'p', 'h1', 'h3', 'h5', 'span'];
    const attributes = ['id', 'class', 'style'];

    var randomTag = tags[Math.floor(Math.random() * tags.length)];
    var randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];

    var htmlCode = `<${randomTag} ${randomAttribute}="value">Content</${randomTag}>`;

    arr.push(htmlCode);
  }
    let codes = '';
    for (var i = 0; i < arr.length; i++) {
      codes = codes + arr[i];
    }
    document.getElementById("html").innerHTML = codes;
}
