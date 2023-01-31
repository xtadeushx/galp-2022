function bindModule(trigger, modal, close) {
    trigger = document.querySelector(trigger);
    modal = document.querySelector(modal);
    close = document.querySelector(close);

    const body = document.body;

    trigger.addEventListener('click',(event) => {
    event.preventDefault();
    modal.style.display = 'flex';
    body.classList.add('locked');
    });

    close.addEventListener('click',()=> {
        modal.style.display = 'none';
        body.classList.remove('locked');
    });

    modal.addEventListener('click',(event)=> {
    if(event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('locked');
    }
    });

}

bindModule('.modal__btn','.modal__wrapper','.modal__close')