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

//div with black border and pink background color
const pinkDiv = document.createElement('div');
pinkDiv.classList.add("pinkDiv");
pinkDiv.style.border = 'black';
pinkDiv.style.backgroundColor = 'pink';
container.appendChild(pinkDiv);

//h1 in pinkDiv
const headerOne = document.createElement('h1');
headerOne.textContent = 'I\'m in a div';
pinkDiv.appendChild(headerOne);

//p in pinkDiv
const pinkDivPar = document.createElement('p');
pinkDivPar.textContent = 'ME TOO!!';
pinkDiv.appendChild(pinkDivPar);
