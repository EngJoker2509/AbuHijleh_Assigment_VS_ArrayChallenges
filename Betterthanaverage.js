function betterThanAverage(arr) {
    var sum = 0;
    
    for (let index = 0; index < arr.length; index++) {
        sum=sum+arr[index];
    }
    sum=sum/arr.length;

    var count = 0

    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>sum){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
