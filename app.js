console.log('Hello, World!');
const btn_text = document.getElementById('btn');
const text = document.querySelector('p');

btn-text.addEventListener('click', (e) => {
    text.style.display = 'none';
    e.target.textContent = 'Mostra Testo';
});