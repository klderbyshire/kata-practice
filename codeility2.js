// sort array into asending order
// create notPair and pair variable
// for loop to look at each index in the array

function solution(A) {
    const pairs = []
    let notPair = 0

    A.sort((a, b) => a - b)
    // console.log(A)
    
    for(let i = 0; i < A.length; i++) {
      if(A[i] === A [i + 1]) {
         i++;
         pairs.push(A[i])
         } else {
             notPair = A[i]
         }
        //   console.log(notPair)

   }
   return notPair;
}
