//Первый вариант
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000);
}
//Второй вариант
const arr2 = [10, 12, 15, 21];
function doSetTimeout(a) {
    setTimeout(function() { (a); }, 100);
  }
for (let a = 0; a < arr2.length; a++) {
setTimeout(function() {
console.log('Index: ' + a + ', element: ' + arr2[a]);
}, 3000);
}



  
  

    
  

    