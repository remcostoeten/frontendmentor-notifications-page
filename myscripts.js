const count = document.getElementById('count');
const wrapper = document.getElementsByClassName('wrapper');
const read = document.getElementById('read');
console.log(count,read, wrapper);

    read.addEventListener('click', (event) => {
        const wrapper = document.getElementsByClassName('wrapper');
        wrapper[0].classList.remove("unread");

console.log('click +' + wrapper)

    });