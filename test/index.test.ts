import pathInterpolation from '../src'

const path = 'M0 100C37.5 92 6 18.32 50 50C100 86 68.5 16.5 100 0'

test('should have 500 points', () => {
  const easing = pathInterpolation(path, {
    points: 500,
  })

  expect(easing._values.length).toBe(500)
})

test('should be 0', () => {
  const easing = pathInterpolation(path)

  const r = easing(0)

  expect(r).toBe(0)
})

test('should be 1', () => {
  const easing = pathInterpolation(path)

  const r = easing(1)

  expect(r).toBe(1)
})
