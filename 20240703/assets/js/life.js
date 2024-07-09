// console.log('case 1');
// let scope_case_1 = 10

// console.log(`scope_case_1 is: ${scope_case_1}`);

// function run_case_1() {
//     let scope_case_2 = 20
//     scope_case_1 = 30
//     console.log(`in run_case_1 scope_case_1 is: ${scope_case_1}`);
//     console.log(`in run_case_1 scope_case_2 is: ${scope_case_2}`);
// }

// run_case_1()

// console.log(`scope_case_1 is: ${scope_case_1}`);
// console.log(`scope_case_2 is: ${scope_case_2}`);

// console.log('case 2');

// let scope_case2_1 = 10

// console.log(`scope_case2_1 is: ${scope_case2_1}`);

// function run_case_2(scope_case2_1) {
//     let scope_case2_2 = 20
//     scope_case2_1 = 30
//     console.log(`in run_case_2 scope_case2_1 is: ${scope_case2_1}`);
//     console.log(`in run_case_2 scope_case2_2 is: ${scope_case2_2}`);
// }

// run_case_2(scope_case2_1)
// console.log(`scope_case2_1 is: ${scope_case2_1}`);
// console.log(`scope_case2_2 is: ${scope_case2_2}`);

// console.log('case 3');

// let c1 = 10;

// console.log(`c1 is: ${c1}`);

// function case3(c1) {
//     c1 = 30; // let c1 = c1
//     c2 = 20;
//     console.log(`in case3 c1 is: ${c1}`);
//     console.log(`in case3 c2 is: ${c2}`);
// }

// case3(c1);

// console.log(`c1 is: ${c1}`);
// console.log(`c2 is: ${c2}`);


// console.log('call by value');

// let cv1 = 1;
// let cv2 = cv1;
// cv1++;
// console.log(`cv1 is: ${cv1}`);
// console.log(`cv2 is: ${cv2}`);

console.log('call by reference');

let cr1 = {
    name: 'david'
};

let cr2 = cr1;

cr1.name = 'John';
console.log('set cr1 name is John');
console.log(`cr1 name is: ${cr1.name}`)
console.log(`cr2 name is: ${cr2.name}`)

cr2.name = 'Dan';
console.log('set cr2 name is Dan');
console.log(`cr1 name is: ${cr1.name}`)
console.log(`cr2 name is: ${cr2.name}`)