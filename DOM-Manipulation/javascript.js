// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

//<p> Red text
const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey, I\'m a red text';
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

//<h3> Blue text
const blueHeaderThree = document.createElement('h3');
blueHeaderThree.textContent = 'I\'m a blue h3';
blueHeaderThree.style.color = 'blue';
container.appendChild(blueHeaderThree);
