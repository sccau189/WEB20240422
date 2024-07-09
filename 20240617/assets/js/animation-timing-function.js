let trigger = document.querySelector('#trigger');
console.log(trigger);

trigger.addEventListener('click', () => {
    let main = document.querySelector('#main')
    if (main.classList.contains('active')) {
        main.classList.remove('active');
    } else {
        main.classList.add('active');
    }
})