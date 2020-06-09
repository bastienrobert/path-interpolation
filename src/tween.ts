export function createTween(points: Float32Array, length: number) {
  const normalizedLength = 1 / (length - 1)

  function tweenFn(t: number) {
    const normalizedIndex = roundToNearest(t, normalizedLength)
    const index = normalizedIndex * (length - 1)
    return points[index]
  }
  tweenFn._values = points

  return tweenFn
}

export function roundToNearest(i: number, n: number) {
  return Math.ceil(i / n) * n
}
