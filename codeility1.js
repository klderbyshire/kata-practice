function keepIt(s){
    let letterNumber = /^[0-9a-zA-Z]+$/;
   if (!s.match(letterNumber)) {
     return false
   }
   if (s.replace(/[^0-9]/g, ‘’).length %2 === 0) {
     return false
   }
   if (s.replace(/[^A-Z, a-z]/g, ‘’).length %2 === 1) {
      return false
   }
   return true
}
function solution(S) {
  const passwords = S.split(' ’)
  const output = passwords.filter(keepIt)
  if (output.length == 0) {
    return -1
  }
  let lengths = output.map(s => s.length)
  return Math.max.apply(0, lengths)
}