
let arr = []; 

for (let i = 0; i <= 99; i++) {
    arr[i] = Math.floor(Math.random()*100000) + 1; 


} 

// 2. lag en funksjon som bruker array metoden .filter til å filtrere ut oddetall
//    og partall. funksjonen skal returnere ut et nytt array hvor oddetall og
//    partall er delt opp (tips: returner odds og evens som et object).



// TODO - Do not use double loops. 
let new_arr = arr.filter(function (e) {
    return e % 2 == 0
})

let even_arr = arr.filter( (e) => e % 2 === 0 )
let odd_arr = arr.filter( (e) => e % 2 != 0 )

let odd_even_obj = {odd: odd_arr, evens: even_arr} 


console.log(odd_even_obj);
console.log(even_arr.length + odd_arr.length);
// console.log(new_arr);
//
const {odds, evens} 
