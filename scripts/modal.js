const overlay = document.getElementById('dialog1');
const overlay2 = document.getElementById('dialog2');
const overlay3 = document.getElementById('dialog3');
const overlay4 = document.getElementById('dialog4');
const overlay5 = document.getElementById('dialog5');
const overlay6 = document.getElementById('dialog6');

document.getElementById('openDialog1').addEventListener('click', () => {
    overlay.style.display = 'flex';
    body.classList.add('no-scroll');
});

document.getElementById('closeDialog1').addEventListener('click', () => {
    overlay.style.display = 'none';
    body.classList.remove('no-scroll');
});

document.getElementById('openDialog2').addEventListener('click', () => {
    overlay2.style.display = 'flex';
    body.classList.add('no-scroll');
});

document.getElementById('closeDialog2').addEventListener('click', () => {
    overlay2.style.display = 'none';
    body.classList.remove('no-scroll');
});

document.getElementById('openDialog3').addEventListener('click', () => {
    overlay3.style.display = 'flex';
    body.classList.add('no-scroll');
});

document.getElementById('closeDialog3').addEventListener('click', () => {
    overlay3.style.display = 'none';
    body.classList.remove('no-scroll');
});