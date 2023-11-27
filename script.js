
let arr = []; 

for (let i = 0; i <= 99; i++) {
    arr[i] = Math.floor(Math.random()*100000) + 1; 


} 

// 2. lag en funksjon som bruker array metoden .filter til å filtrere ut oddetall
//    og partall. funksjonen skal returnere ut et nytt array hvor oddetall og
//    partall er delt opp (tips: returner odds og evens som et object).



function sort_odd_even(arr) {
    let even_arr = arr.filter( (e) => e % 2 === 0 ); 
    let odd_arr = arr.filter( (e) => e % 2 != 0 ); 
    return {odds: odd_arr, evens: even_arr}; 
}
// TODO - Do not use double loops. 


const {odds, evens} = sort_odd_even(arr);
console.log(`# odds: ${odds.length}, # evens ${evens.length}`);


const sum_callback = (acc, curr) => acc + curr;
console.log(`Sum odds: ${odds.reduce(sum_callback)}, Sum evens: ${evens.reduce(sum_callback)}`);






