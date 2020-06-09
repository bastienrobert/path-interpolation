# Path interpolation

Normalized interpolation based on bezier curve specified in SVG path data format. Works on React Native / server environment too.

## Install

With NPM:
`npm i path-interpolation`
`yarn add path-interpolation`

Use Pika (with ESM):

`import pathInterpolation from 'https://cdn.pika.dev/path-interpolation@^1.0.0'`

## How to use

Generate a **tween** function from a **SVG path**:

```js
import pathInterpolation from 'path-interpolation'

const path = 'M0 100C37.5 92 6 18.32 50 50C100 86 68.5 16.5 100 0'

const easing = pathInterpolation(path, {
  points: 300, // more points equals more accuracy
  height: 100, // height of point equals 1
})

easing(0.5) // => 0.48720720410346985
```
