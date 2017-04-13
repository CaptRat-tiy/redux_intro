import { createStore } from 'redux'
import reducer from './reducer'

console.log('hello world');

const store = createStore( reducer )

console.log(store);

const newShirtDiv = document.querySelector('#createShirt')
newShirtDiv.querySelector('#createButton').onclick = () => {
  store.dispatch({
      type: 'SHIRT@ADD',
      color: newShirtDiv.querySelector('#color').value,
      size: newShirtDiv.querySelector('#size').value,
      motto: newShirtDiv.querySelector('#motto').value
    })
}

console.log(store.getState());

store.subscribe( () => {
  console.log("store.getState():", store.getState());
})
