const hex = ['#6BA7A9', '#F1f5f8', '#CC2AC8', '#5617C2', '#F7484E', '#292929', '#F7D448'];
const random ="abcdef0123456789";

const favBtn = document.getElementById('fav');
const randomBtn = document.getElementById('random');
const span = document.getElementById('color');


favBtn.addEventListener('click', () => {
    const random = randomFunc(hex);
    document.body.style.backgroundColor = hex[random];
    span.textContent = hex[random];
});


randomBtn.addEventListener('click', () => {
    const arr = random.split('');
    let hexColor = "#";
    
    for(let i = 0; i < 6; i++) {
        hexColor += arr[randomFunc(random)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomFunc(arr) {
    return Math.floor(Math.random() * arr.length);
}





//custom colors
// span.addEventListener('keypress', (e) => {
//     if(e.key === 'Enter') {

//     }
// })