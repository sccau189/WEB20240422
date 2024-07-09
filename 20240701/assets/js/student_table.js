let studentTable = document.querySelector('#student-table');
let loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', async () => {
    let response = await fetch('./api/students.json')
    let data = await response.json();
    let html = '';
    for (let index in data) {
        html += `<tr><td>${+index + 1}</td>`;
        for (let field in data[index]) {
            html += `<td>${data[index][field]}</td>`;
        }
        html += '</tr>';
    }

    let tbody = studentTable.querySelector('tbody');
    tbody.innerHTML = html;
})