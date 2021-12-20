const colors = ['red', 'blue', 'green', 'yellow', 'peru', 'magenta', 'white'];

const btn = document.getElementById('btn');
const span = document.getElementById('color');


btn.addEventListener('click',() => {
    const random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
    span.textContent = colors[random];
});
