var curPage = 2
var arr = [curPage]
var i = 0
while (arr.length <= Math.min(5, 8)) {
  if (curPage - i > 0) {
    arr.unshift(curPage - i)
  }else if (curPage - i < 8) {
    arr.push(curPage + i)
  }
  i++
}
// return arr
console.log(arr)