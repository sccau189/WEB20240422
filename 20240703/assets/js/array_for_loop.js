let students = [];
students.push({
    name: 'David',
    age: 18
});

students.push({
    name: 'Helen',
    age: 20
});

const useForLoop = () => {
    for (let i = 0; i < students.length; i++) {
        console.log(i, students[i])
    }
}

const useForeach = () => {
    for (let i in students) {
        console.log(i, students[i])
    }
}

const useArrayForeach = () => {
    students.forEach((student, index) => {
        console.log(index, student);
    })
}

// useForLoop();
// useForeach();
useArrayForeach();