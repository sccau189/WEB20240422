let trigger = document.querySelector('#trigger');

trigger.addEventListener('click', () => {
    let cube = document.querySelector('#cube-1')
    if (cube.classList.contains('active')) {
        cube.classList.remove('active');
    } else {
        cube.classList.add('active');
    }
})