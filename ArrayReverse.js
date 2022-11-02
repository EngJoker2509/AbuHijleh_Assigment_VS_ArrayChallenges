/*
function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
*/

function reverse(arr) {
    for (let index = 0; index < arr.length/2; index++) {
        temp=arr[index];
        arr[index]=arr[arr.length-1-index];
        arr[arr.length-1-index]=temp;
    }

    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
