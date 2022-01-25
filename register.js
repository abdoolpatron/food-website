const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone-number');
const user = document.getElementById('username');
const registerButton = document.getElementById('register');
const returnButton = document.getElementById('return');
const notice = document.getElementsByClassName('notice');
const loader = document.getElementById('loader');
const overlay = document.getElementById('overlay');
const returnToHome = document.getElementById('return');
let errorMessage;


registerButton.onclick = () => {
    errorMessage = '';
    if (!email.value.includes('@gmail.com') || email.value == '') {
        notice[0].textContent = 'Invalid email address';
        email.style.borderColor = 'red';
        errorMessage = 'Error';
    }
    if (password.value == '' || password.value.length <= 5) {
        notice[1].textContent = 'Your password must be longer than 5 characters';
        password.style.borderColor = 'red';
        errorMessage = 'Error';
    }
    if (phone.value == '' || phone.value.length <= 5) {
        notice[2].textContent = 'Your number must be longer than 5 characters';
        phone.style.borderColor = 'red';
        errorMessage = 'Error';
    }
    if (user.value == '' || user.value.length <= 5) {
        notice[3].textContent = 'Your username must be longer than 5 characters';
        user.style.borderColor = 'red';
        errorMessage = 'Error';
    }
    if (errorMessage == '') {
        loader.style.display = 'block';
        overlay.style.display = 'block';
        loader.style.zIndex = 1;
        login.style.zIndex = 0;

        let data = {
            email: username.value,
            password: password.value
        }

        let storedData = JSON.stringify(data)
        localStorage.setItem('username', storedData);
        setTimeout(() => {
            document.location = 'index.html';
        }, 5000)
    }
}

returnToHome.addEventListener('click', () => {
    document.location = 'index.html';
})