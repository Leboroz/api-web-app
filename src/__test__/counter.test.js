import itemsCounter from '../modules/functions/counter'
import { JSDOM } from 'jsdom'
const dom = new JSDOM()

test('should return the number of items in element', () => {
  const ul = dom.window.document.createElement('ul')
  ul.innerHTML = `
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 `
  const expected = 5

  const result = itemsCounter(ul)

  expect(result).toBe(expected)
})
