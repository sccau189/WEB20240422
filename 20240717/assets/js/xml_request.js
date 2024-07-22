let domSend = document.querySelector('#send');
let domResponse = document.querySelector('#response');

domSend.addEventListener('click', () => {
    console.log('send!');
    let request = new XMLHttpRequest();

    request.addEventListener('load', () => {
        console.log('loaded');
        let response = JSON.parse(request.responseText);
        console.log(response);
        domResponse.innerHTML = response.data;
    })

    request.open('GET', 'https://book.niceinfos.com/frontend/api/?action=sleep');
    request.send();
})