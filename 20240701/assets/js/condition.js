let n1 = 10;
let n2 = 100;

// console.log(`n1: ${n1}, n2: ${n2}`);

// if (n1 == n2) {
//     console.log('equal!');
// } else {
//     console.log('diff');
// }



// // n1 = n2 => n1 = 100 => if (100)
// if (n1 = n2) {
//     console.log('equal!');
// } else {
//     console.log('diff');
// }

// console.log(`n1: ${n1}, n2: ${n2}`);


let m1 = 10;
let m2 = '10';

// console.log(`m1: ${m1} type is ${typeof m1}, m2: ${m2} type is ${typeof m2}`)

// console.log('use == is: ');

// if (m1 == m2) {
//     console.log('equal');
// } else {
//     console.log('diff');
// }

// console.log('use === is: ');

// if (m1 === m2) {
//     console.log('equal');
// } else {
//     console.log('diff');
// }

let g1 = 10;
let g2 = 10;

// if (g1 > g2) {
//     console.log('large!');
// } else {
//     console.log('no');
// }


// if (g1 >= g2) {
//     console.log('large!');
// } else {
//     console.log('no');
// }

let student = {
    name: 'David',
    s1: 60,
    s2: 100
}

// david 所有科目都及格嗎?


/**
 * 1. student.s1 >= 60 => boolA
 * 2. student.s2 >= 60 => boolB
 * 3. boolA && boolB => boolC
 * 4. if (boolC) {}
 */
// if (student.s1 >= 60 && student.s2 >= 60) {
//     console.log(`${student.name} all pass.`);
// } else {
//     console.log(`${student.name} not pass.`);
// }

// // david 是否有科目不及格?

// if (student.s1 < 60 || student.s2 < 60) {
//     console.log('yes');
// } else {
//     console.log('all pass')
// }


let gogoTrigger = document.querySelector('#gogo-trigger');
let gogoCheckbox = document.querySelector('#gogo');


gogoTrigger.addEventListener('click', () => {
    let checked = gogoCheckbox.checked;
    console.log(checked);
    gogoCheckbox.checked = !checked;
    console.log(gogoCheckbox.checked);
})