const subHeader = document.createElement('h2');
subHeader.className = 'meals-counter';
subHeader.innerHTML = 'Meals: ';

const counter = document.createElement('span');
counter.className = 'counter';
counter.id = 'counter';

subHeader.appendChild(counter);

export default subHeader;
