import itemsCounter from '../functions/counter'

const grid = document.createElement('div')
grid.className = 'grid'
grid.id = 'grid'

const childrenCounter = (e) => {
  if (e.target.parentNode.id === 'grid') {
    document.querySelector('#counter').innerHTML = itemsCounter(
      e.target.parentNode
    )
  }
}

const childrenCounterRemove = (e) => {
  if (e.target.parentNode.id === 'grid') {
    document.querySelector('#counter').innerHTML =
      itemsCounter(e.target.parentNode) - 1
  }
}

grid.addEventListener('DOMNodeRemoved', childrenCounterRemove)
grid.addEventListener('DOMNodeInserted', childrenCounter)

export default grid
