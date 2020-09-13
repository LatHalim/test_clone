//Первый вариант
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

//Второй вариант
const arr2 = [10, 12, 15, 21];
for (var i = 0; i < arr2.length; i++) {
  doScaledTimeout(i);
}

function doScaledTimeout(i) {
  setTimeout(function () {
    (i);
    console.log('Index: ' + i + ', element: ' + arr2[i]);
  }, 3000);
}
