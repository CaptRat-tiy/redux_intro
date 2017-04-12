const test = require('tape')
const reducer = require('../app/reducer.js')



test('SHIRT@ADD: add red sm to am empty state', t => {
  const startingState = []
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }
  const expectedResult = [{
    id: 1,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})

test('SHIRT@ADD: add green sm to am empty state', t => {
  const startingState = []
  const action = {
    type: 'SHIRT@ADD',
    color: 'green',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }
  const expectedResult = [{
    id: 1,
    color: 'green',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})
//subsequent shirts in store
test('SHIRT@ADD: add a second red sm to a state with one red sm', t => {
  const starting = [{
  id: 1,
  color: 'red',
  size: 'sm',
  motto: 'Keep calm and code on!'
  }]

  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0'
  }

  const expect = [{
    id: 1,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
  }, {
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0'
  }]

  t.deepEqual(reducer(starting, action), expect)
  t.end()
})

// IDs
test('SHIRT@ADD: add red sm to a state with two shirts', (t) => {
  const startingState = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
  }]
  const action = {
    type: 'SHIRT@ADD',
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }
  const expectedResult = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
    }, {
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }]
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})

test('SHIRT@ADD: add red sm to a state with two shirts', (t) => {
  const startingState = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!',
  },{
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }]
  const action = {
    type: 'SHIRT@REMOVE',
    id: 8,
    color: 'red',
    size: 'sm',
    motto: 'Real programmers count from 0.'
  }
  const expectedResult = [{
    id: 2,
    color: 'red',
    size: 'sm',
    motto: 'Keep calm and code on!'
    }, {
    id: 7,
    color: 'white',
    size: 'lg',
    motto: 'Keep calm and code on!'
  }]
  
  t.deepEqual(reducer(startingState, action), expectedResult)
  t.end()
})
