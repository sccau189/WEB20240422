/**
 * 
 * @returns array
 */
const currentTime = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    let time = `${hh}:${mm}:${ss}`
    let max = time.length
    // string is array
    let arr = [];
    for (let i = 0; i < max; i++) {
        arr.push(time[i])
    }
    return arr;
    // return time.split('');

    /**
     * hh = 12
     * mm = 08
     * ss = 35
     * 
     * return [1, 2, ':', 0, 8, ':', 3, 5]
     */
}

const updateTime = () => {
    let times = currentTime();
    let items = document.querySelectorAll('.clock-wrap > div');
    times.forEach((num, index) => {
        if (items[index]) {
            items[index].innerHTML = num;
        }
    })
}

setInterval(() => {
    updateTime();
}, 1000)

updateTime();
