var curPage = 3
var pageLength = 4
var totalPage = 4
var arr = []
var i = 0
//根据 pageLength 的奇偶性分两种情况来讨论
if(pageLength % 2 != 0){
  arr[0] = curPage
  do {
    if (curPage - i > 1) {
      arr.unshift(curPage - i - 1)
    }
    if(arr.length == Math.min(pageLength, totalPage)) break
    if (curPage + i < totalPage ) {
      arr.push(curPage + i + 1)
    }
    i++
  } while (arr.length < Math.min(pageLength, totalPage));
}else{
  do {
    if (curPage - i >= 1) {
      arr.unshift(curPage - i)
    }
    if (curPage + i < totalPage) {
      arr.push(curPage + i + 1)
    }
    i++
  } while (arr.length < Math.min(pageLength, totalPage));
}
// return arr
console.log(arr)



