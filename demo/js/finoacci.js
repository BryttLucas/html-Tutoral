// const genfibs = (count)=> {
//     fibs =[1,1];
//     while(fibs.lenght < count){
//         let count = fibs.lenght;
//         let fib = fibs[count-2] + fibs [count-1];
//         fibs.push(fib);
//     }
//     return fibs;
// };
// const go =()=>{
    
//     let cnt = Number(document.getElementById("cnt").value);
//     let fibArray = getFibs(cnt);
//     let ansCtrl = document.getElementById("ans");
//     ansCtrl.innerText = '';
//     ansCtrl.innerHTML = `<p>${fibArray.join(",")}</p>`;
// }
function myFunction() {
     var n = document.getElementById("myNumber").value;
     document.getElementById("demo").innerHTML = fibonacciGenerator (n);
}
    var sequence = [1]; 
    var previousNumber = 1;
    var presentNumber = 0;
    var sum = 0;
function fibonacciGenerator (n) {
    while (sequence.length < n) {
     sum = previousNumber + presentNumber;
     previousNumber = presentNumber;
     presentNumber = sum;
     sequence.push(sum);
    }
    return (sequence);
}