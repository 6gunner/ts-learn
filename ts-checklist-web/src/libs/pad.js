var pad = function (input, length, padding, side) {
  input = (input || '').toString()
  length = parseInt(length) || 0
  padding = (padding || '').toString() | ''
  side = parseInt(side) || pad.LEFT
}
