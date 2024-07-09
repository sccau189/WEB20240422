let w = document.querySelector('#current-width')

const update = () => {
    w.innerHTML = window.innerWidth;
}

window.addEventListener('resize', update);

update();