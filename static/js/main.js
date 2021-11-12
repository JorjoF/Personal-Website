const Email = document.getElementById('email');
const modal_container =  document.getElementById('modal_container');
const Close =  document.getElementById('close');


Email.addEventListener('click', ()=> {
    modal_container.classList.add('show');
});

Close.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
});







