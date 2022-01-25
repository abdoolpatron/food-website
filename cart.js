const area = document.getElementById('item-area');
const text = document.getElementById('text');
let key = Object.keys(sessionStorage);
let decrypt;

for (i = 0; i < sessionStorage.length; i++) {
    let string = sessionStorage.getItem(key[i]);
    decrypt = JSON.parse(string);
    
    

    // Creating elements
    const miniDiv = document.createElement('div');
    const image = document.createElement('img');
    const items = document.createElement('h5');
    const prices = document.createElement('p');
    const newDiv = document.createElement('div');
    const purchase = document.createElement('button');
    const decline = document.createElement('button'); 


    // classification
    miniDiv.className = 'new-item';
    image.className = 'cart-img';
    items.className = 'cart-item';
    prices.className = 'cart-price';
    newDiv.className = 'options';
    purchase.classList = 'btn btn-success';
    decline.classList = 'btn btn-danger';
    purchase.textContent = 'Purchase';
    decline.textContent = 'Discard';

    //setting up the cards

    image.src = decrypt.picture;
    items.innerHTML = decrypt.food;
    prices.innerHTML = decrypt.price;
    miniDiv.id = decrypt.id;

    //appending

    newDiv.appendChild(purchase);
    newDiv.appendChild(decline);
    miniDiv.appendChild(image);
    miniDiv.appendChild(items);
    miniDiv.appendChild(prices);
    miniDiv.appendChild(newDiv);

    if (items.textContent != 'undefined') {
      area.appendChild(miniDiv);
    }

    if (area.childElementCount == 0) {
        text.style.display = 'block';
    }

    else {
        text.style.display = 'none';
    }
    
    decline.addEventListener('click', () => {
        if (area.childElementCount == 1) {
            text.style.display = 'block';
        }
        sessionStorage.removeItem(miniDiv.id);
        area.removeChild(miniDiv);
    })
}
