let num = 0;


console.log(`run while before num is: ${num}`)

while (num < 10) {
    console.log(num);
    num++;
}

console.log(`run while after num is: ${num}`)

num = 0
console.log(`run for loop before num is: ${num}`)
for (; num < 10; num++) {
    console.log(num);
}

console.log(`run for loop after num is: ${num}`)

while (num < 10) {
    console.log(num);
    num++
}

do {
    console.log(num);
    num++
} while (num < 10)

console.log(num);