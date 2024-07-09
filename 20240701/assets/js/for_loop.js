let n1Input = document.querySelector("#n1");
let n2Input = document.querySelector("#n2");
let generateBtn = document.querySelector("#generate");
let responseTable = document.querySelector('#response');

const generateThead = (max) => {
    let thead = responseTable.querySelector('thead');
    let html = '<tr><th>n1 / n2</th>';

    for (let i = 1; i <= max; i++) {
        html += `<th>${i}</th>`;
    }

    html += '</tr>';
    thead.innerHTML = html;
}

const generateTbody = (n1, n2) => {
    let tbody = responseTable.querySelector('tbody');
    let html = '';
    for (let i = 1; i <= n1; i++) {
        html += `<tr><td>${i}</td>`;
        for (let j = 1; j <= n2; j++) {
            let total = i * j;
            html += `<td>${total}</td>`;
        }
        html += '</tr>';
    }

    tbody.innerHTML = html;
}

generateBtn.addEventListener('click', () => {
    let n1 = n1Input.value;
    let n2 = n2Input.value;

    generateThead(n2);
    generateTbody(n1, n2);



})

// let n = 1;
// n++; // n = n + 1
// console.log(n)