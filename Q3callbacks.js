
function forEach(array, callback) {
    for(var i=0;i<array.length;i++){
       console.log(callback(array[i]));
    }
}

function map(array, callback) {
    var arr2 = new Array(array.length);
    for(var i=0;i<array.length;i++){
        arr2[i] = callback(array[i]);
    }
    return arr2;
}

function square(n) {
    return n*n;
}

var arr1 = [1,2,5,2,6,8];
forEach(arr1,square);
var arr2 = map(arr1,square);
console.log(arr2);