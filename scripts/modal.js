const overlay = document.getElementById('dialog1');
const overlay2 = document.getElementById('dialog2');

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