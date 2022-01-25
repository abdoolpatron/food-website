const exclusive = document.getElementById('exclusive');
const limited = document.getElementById('limited');
const regular = document.getElementById('regular');
const foodCard = document.getElementsByClassName('cards');
const addButton = document.getElementsByClassName('add');
const item = document.getElementsByClassName('item');
const price = document.getElementsByClassName('price');
const picture = document.getElementsByClassName('card-img-top');
const loginCancel = document.getElementById('cancel');
const login = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('log');
const overlay = document.getElementById('overlay');
const start = document.getElementById('start');
const loader = document.getElementById('loader');
const cartButton = document.getElementById('cart');
const menuButton = document.getElementById('menu');
const foodMenu = document.getElementById('food-menu');
const menu = document.getElementById('menu-dropdown');
const menuCancel = document.getElementById('menu-cancel');
const caret = document.getElementsByClassName('fa fa-caret-down');
let result = JSON.parse(localStorage.getItem('username'));



// food card mouseover/mouseleave effects

for(let i = 0, j = 0; i < addButton.length, j < foodCard.length; i++, j++) {
    foodCard[j].addEventListener('mouseleave', () => {
        leave = setTimeout(function() {
            if (addButton[j].lastChild.className != 'fa fa-check') {
                addButton[j].style.visibility = 'hidden';
            }
            else {
                foodCard[j].style.height = '280px';
            }
        })
        foodCard[j].style.height = '250px';
    })

    foodCard[j].addEventListener('mouseover', () => {
        over = setTimeout(function() {
            addButton[j].style.visibility = 'visible';
        }, 2)
        foodCard[j].style.height = '280px';
    })

    /// add to cart / remove from cart
    addButton[i].addEventListener('click', () => {
        if (addButton[i].lastChild.className != 'fa fa-check' && sessionStorage.getItem('details')) {
            addButton[i].lastChild.className = 'fa fa-check';
            let obj = {
                food: item[i].textContent,
                price: price[i].textContent,
                picture: picture[i].getAttribute('src'),
                id: i+1
            }
            let newObj = JSON.stringify(obj);
            sessionStorage.setItem(i+1, newObj);
        }

        else if (!sessionStorage.getItem('details')) {
            login.style.display = 'grid';
            overlay.style.display = 'block';
            username.value = '';
            username.focus()
            return false;
        }
        else {
            addButton[i].lastChild.className = 'fa fa-cart-plus';
            sessionStorage.removeItem(i+1);
        }
    })
}

let keys = Object.keys(sessionStorage);

// indicate added items
for (i = 0; i < keys.length; i++) {
    for (x = 0; x < foodCard.length; x++) {
        if (sessionStorage.getItem(keys[i]).includes(item[x].textContent)) {
            addButton[x].style.visibility = 'visible';
            addButton[x].lastChild.className = 'fa fa-check';
            foodCard[x].style.height = '280px';
        }
    }
}


loginCancel.onclick = () => {
    login.style.display = 'none';
    overlay.style.display = 'none';
    username.focus();
    username.value = '';
    username.style.color = 'black';
    password.style.borderColor = 'grey';
}

/// 'Get started' button
start.onclick = () => {
    if(!sessionStorage.getItem('details')) {
       login.style.display = 'grid';
       overlay.style.display = 'block';
       username.focus();
       username.value = '';
       return false;
    }
    else {
        document.location = 'cart.html';
    }

}

cartButton.onclick = () => {
    if (!sessionStorage.getItem('details')) {
        login.style.display = 'grid';
        overlay.style.display = 'block';
        username.value = '';
        username.focus();
        return false;
    }
}


username.addEventListener('focus', () => {
    if (username.value == 'Fill in space' || username.value == 'Invalid email') {
      username.value = '';
      username.style.color = 'black';
    }
})


loginButton.addEventListener('click', () => {
    if (username.value == '' && password.value == '') {
        username.value = 'Fill in space';
        username.style.color = 'red';
        password.style.borderColor = 'red';
    }

    else if (username.value.includes(result.username)) {
        username.value = 'Invalid email';
        username.style.color = 'red';
    }

    else if (password.value != result.password) {
        password.style.borderColor = 'red';
    }

    else {
        password.style.borderColor = 'grey';
        login.style.zIndex = 0;
        loader.style.display = 'block';
        loader.style.zIndex  = 1;

        let loginDetails = {
            name: username.value,
            password: password.value
        }

        let newDetails = JSON.stringify(loginDetails);

        sessionStorage.setItem('details', newDetails)

        setTimeout(() => {
            login.style.display = 'none';
            overlay.style.display = 'none';
            loader.style.display = 'none';
        }, 3000)
    }
})

menuButton.addEventListener('click', () => {
    menu.style.display = 'block';
})

foodMenu.addEventListener('click', () => {
    if (!caret[0].classList.contains('active')) {
       caret[0].classList.add('active');
       menu.style.height = '640px';
       caret[0].classList.replace('fa fa-caret-down', 'fa fa-caret-up');
    }

    else if (caret[0].classList.contains('active')) {
        caret[0].classList.remove('active');
        menu.style.height = '210px';
        caret[0].classList.replace('fa fa-caret-up', 'fa fa-caret-down');
    } 
})

menuCancel.addEventListener('click', () => {
    menu.style.display = 'none';
})