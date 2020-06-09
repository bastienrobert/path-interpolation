import { svgPathProperties } from 'svg-path-properties'

import { createTween } from './tween'

export interface PathInterpolationOptions {
  /** number of points get on the path (improve accuracy) */
  points?: number
  /** height on point value is 1 */
  height?: number
}

function pathInterpolation(
  path: string,
  { points = 300, height = 100 }: PathInterpolationOptions = {}
) {
  const properties = new svgPathProperties(path)
  const totalLength = properties.getTotalLength()

  const pointLength = 1 / (points - 1)
  const yPoints = new Float32Array(points)

  for (let i = 0; i < points; ++i) {
    const point = properties.getPointAtLength(pointLength * i * totalLength)
    yPoints[i] = 1 - point.y / height
  }

  return createTween(yPoints, points)
}

export default pathInterpolation
