function xoroh() {
    alert("Молодец, спасибо")
}
function plox() {
    alert("Обидно")
}


function main() {
    const login = document.getElementById('login').value;
    const pass = document.getElementById('password').value;
    if (login.length < 3 || pass.length < 3) {
        alert('Логин и/или пароль слишком короткие')
    } else {
        alert(`Привет, ${login}!`)
        window.location.href = "./index.html"
    }
}


let cart = {
    'fff': {
        "name" : "gth",
        "count": 0,
        "price": 1000.00
    },
    'ffr': {
        "name" : "gth",
        "count": 0,
        "price": 1200.00
    }
}
function img(){
    alert("Товар недоступен")
}

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

//увеличение кол-ва товара
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

//уменьшение кол-ва товара
const minusFunction = id => {
    if (cart[id]['count']-1 == 0){
        deleteFunction(id);
        return true;

    }
    cart[id]['count']--;
    renderCart();
}
//удаление
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}
const renderCart = () => {
    console.log(cart);
}
renderCart();