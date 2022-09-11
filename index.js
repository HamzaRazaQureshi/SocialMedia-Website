const menu = document.querySelectorAll('.menu');

const msg = document.querySelectorAll('.message');
const msgSearch = document.querySelector('#messages-search');

const messagessNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const acceptBtn1 = document.getElementById('req-1');
const acceptBtn2 = document.getElementById('req-2');
const acceptBtn3 = document.getElementById('req-3');

const numberOfRequest = document.getElementsByClassName('message-requests');

let count = 4;
let req = "Request";

setMessageRequestHTML();

// SIDEBAR 

const changemenuactive = () => {
    menu.forEach(item => {
        item.classList.remove('active');
    })
};

menu.forEach(item => {
    item.addEventListener('click', () => {
        changemenuactive();
        item.classList.add('active');
        if (item.id == 'notifications') {
            document.querySelector('.notifications-popups').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popups').style.display = 'none';
        }
    })
});

// search messages

const searchMsg = () => {
    const val = msgSearch.value.toLowerCase();
    msg.forEach(char => {
        let name = char.querySelectorAll('h5')[0].innerHTML.toLocaleLowerCase();
        if (name.indexOf(val) != -1) {
            char.style.display = 'flex';
        } else {
            char.style.display = 'none';
        }
    });
};

msgSearch.addEventListener('keyup', searchMsg);

// MESSAGES

messagessNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--primary-color)';
    messagessNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
});

// Accept / Decline

acceptBtn1.addEventListener('click', () => {
    acceptBtn1.style.display = 'none';
    setMessageRequestHTML();
});

acceptBtn2.addEventListener('click', () => {
    acceptBtn2.style.display = 'none';
    setMessageRequestHTML();
});

acceptBtn3.addEventListener('click', () => {
    acceptBtn3.style.display = 'none';
    setMessageRequestHTML();
});

// Request Count

function setMessageRequestHTML() {
    count--;
    numberOfRequest[0].innerHTML = req + `(${count})`;
}