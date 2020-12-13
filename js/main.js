let btn = document.querySelector('.btn');
let parent = document.querySelector('div');
let p = document.querySelector('p');

let newElement = document.createElement('h3');
newElement.textContent = 'Lorem Heading';

btn.addEventListener('click', function() {
    parent.insertBefore(newElement, p);
})