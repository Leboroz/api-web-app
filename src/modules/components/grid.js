import itemsCounter from '../functions/counter';

const grid = document.createElement('div');
grid.className = 'grid';

const childrenCounter = (e) => {
  document.querySelector('#counter').innerHTML = itemsCounter(
    e.target.parentNode,
  );
};

const childrenCounterRemove = (e) => {
  document.querySelector('#counter').innerHTML = itemsCounter(e.target.parentNode) - 1;
};

grid.addEventListener('DOMNodeRemoved', childrenCounterRemove);
grid.addEventListener('DOMNodeInserted', childrenCounter);

export default grid;
