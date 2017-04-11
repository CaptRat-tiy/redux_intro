const test = require('tape')

test('should return -1 when val is not in arr', t => {
  t.equal(-1, [1,2,3].indexOf(4), '4 is not in the array')
  t.end()
})

test('should return 1 when val is not in arr', t => {
  t.equal(1, [1,2,3].indexOf(4), '4 is not in the array')
  t.end()
})
