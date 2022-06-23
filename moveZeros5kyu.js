// takes in array with integers, letters, or boolean

// returns the same array but with all of the 0s in the original array to the end of the array while preserving order of original

// forEach array with splice for 0 and ++ for count variable. then add the amount of zeroes in count to end of new array.

const moveZeros = (array) => {
  let count = 0
   if (array.length === 0){return []}else{
     array.forEach(e => e === 0? count++ : null)
     
   
   for(let i = 0; i<=count; i++){
     array.push(array.splice(array.indexOf(0), 1)[0])
   }
   return array
 }}



console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])) // 
console.log(moveZeros([])) // 


// try{ async function getACuteDogPhoto(){
//   const res = await fetch('https://dog.ceo/api/breeds/image/random')
//   const data = await res.json()
//   console.log(data)
// }
// getACuteDogPhoto()
// }
// catch(error){
//   console.log(error)
// }

// hw: add try and catch to incorporate errors, use mdn