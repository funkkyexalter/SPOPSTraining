// var sample:string[];
// sample=["1","2","3"]
// console.log(sample[1]);
var newArray;
newArray = [1, 2, 3, 10, 4];
var i = 0;
var max = 0;
while (newArray[i]) {
    if (newArray[i] > max) {
        max = newArray[i];
    }
    i++;
}
console.log("\nwhile loop:= " + max);
max = 0;
for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
        max = newArray[i];
    }
}
console.log("\nfor loop:= " + max);
