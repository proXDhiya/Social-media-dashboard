const toggle = document.querySelector('#toggle');
const toggleBtn = document.querySelector('#toggle > div');
let isClicked = true;

toggleBtn.addEventListener('click', () => {
    if (isClicked) {
        toggleBtn.style.right = null;
        toggleBtn.style.left = '0px';
    } else {
        toggleBtn.style.right = '0px';
        toggleBtn.style.left = null;
    }
    isClicked = !isClicked;
});
