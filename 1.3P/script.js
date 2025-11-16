const messageParagraph = document.getElementById('message');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', () => {
  messageParagraph.textContent = "The text has been changed using JavaScript!";
});
