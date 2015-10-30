import test from 'ava'
import isNewline from './'

const newlines = [
  '\n',
  '\r\n'
]

const notNewlines = [
  '\n\n',
  '\r\r',
  '\r\n\r\n',
  '',
  '\t',
  '\n\t\n',
  '    ',
]

test('returns true for newlines', t => {
  t.plan(newlines.length)

  newlines.forEach(newline => {
    t.true(isNewline(newline))
  })
})

test('returns false when it is not a newline character', t => {
  t.plan(notNewlines.length)

  notNewlines.forEach(notNewline => {
    t.false(isNewline(notNewline))
  })
})
