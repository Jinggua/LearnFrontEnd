// join的实现

// 需要注意, 最后一个元素的拼接
function join(ary, joiner = ',') {
  var result = ''
  var joiner = String(joiner)
  for (var i = 0; i < ary.length; i++) {
    if (i < ary.length - 1) {
      result += ary[i] + joiner
    } else {
      result += ary[i]
    }
  }
  return result
}