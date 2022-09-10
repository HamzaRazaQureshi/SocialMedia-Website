const menu = document.querySelectorAll('.menu');

const changemenuactive = () => {
    menu.forEach(item  => {
        item.classList.remove('active');
    })
};

menu.forEach(item => {
    item.addEventListener('click', () => {
        changemenuactive();
        item.classList.add('active');
        if (item.id == 'notifications'){
            document.querySelector('.notifications-popups').style.display = 'block';
        }
        else{
            document.querySelector('.notifications-popups').style.display = 'none';
        }
    })
});