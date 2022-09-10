const menu = document.querySelectorAll('.menu');

// SIDEBAR 

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
            document.querySelector('.notification-count').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popups').style.display = 'none';
        }
    })
});

// MESSAGES

const messagessNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

messagessNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--primary-color)';
    messagessNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout( () => {
        messages.style.boxShadow = 'none'
    }, 2000);
});