// ==========================
// Cart System
// ==========================


// عدد المنتجات المحفوظ

let cartCount =
localStorage.getItem('cartCount') || 0;


// العناصر

const cartCounter =
document.getElementById('cart-count');

const cartButtons =
document.querySelectorAll('.add-cart');


// عرض العدد

cartCounter.textContent = cartCount;


// المنتجات المضافة

let addedProducts =
JSON.parse(
localStorage.getItem('addedProducts')
) || [];


// Loop Buttons

cartButtons.forEach((button, index) => {

    // لو المنتج مضاف بالفعل

    if(addedProducts.includes(index)){

        button.innerHTML =
        '<i class="fa-solid fa-check"></i> Added';

        button.style.backgroundColor =
        '#16a34a';

        button.style.color =
        'white';

    }


    // الضغط على الزر

    button.addEventListener('click', () => {


        // لو المنتج مضاف بالفعل

        if(addedProducts.includes(index)){

            // إزالة المنتج

            addedProducts =
            addedProducts.filter(
                item => item !== index
            );

            cartCount--;

            button.innerHTML =
            'Add To Cart';

            button.style.backgroundColor =
            '#0f172a';

        }

        // إضافة المنتج

        else{

            addedProducts.push(index);

            cartCount++;

            button.innerHTML =
            '<i class="fa-solid fa-check"></i> Added';

            button.style.backgroundColor =
            '#16a34a';

            button.style.color =
            'white';

        }


        // تحديث الرقم

        cartCounter.textContent =
        cartCount;


        // حفظ البيانات

        localStorage.setItem(
            'cartCount',
            cartCount
        );

        localStorage.setItem(
            'addedProducts',
            JSON.stringify(addedProducts)
        );

    });

});

// =========================
// Mobile Menu
// =========================

const menuIcon =
document.getElementById('menu-icon');

const navLinks =
document.querySelector('.nav-links');

if(menuIcon){

    menuIcon.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}


// ==========================
// Dark Mode All Pages
// ==========================

const darkModeBtn =
document.getElementById('dark-mode-toggle');


// حفظ الوضع

if(localStorage.getItem('darkMode') === 'enabled'){

    document.body.classList.add('dark-mode');

}


// الزر

if(darkModeBtn){

    darkModeBtn.addEventListener('click', () => {

        document.body.classList.toggle('dark-mode');


        // لو مفعل

        if(document.body.classList.contains('dark-mode')){

            localStorage.setItem(
                'darkMode',
                'enabled'
            );

        }

        // لو مقفول

        else{

            localStorage.setItem(
                'darkMode',
                'disabled'
            );

        }

    });

}


// =========================
// Loader
// =========================

window.addEventListener('load', () => {

    const loader =
    document.querySelector('.loader');

    if(loader){

        loader.style.display = 'none';

    }

});


// =========================
// Search
// =========================

const searchInput =
document.getElementById('search-input');

const products =
document.querySelectorAll('.product-card');

if(searchInput){

    searchInput.addEventListener('keyup', () => {

        const filter =
        searchInput.value.toLowerCase();

        products.forEach(product => {

            const productName =
            product.querySelector('h3')
            .textContent
            .toLowerCase();

            if(productName.includes(filter)){

                product.style.display = 'block';

            } else {

                product.style.display = 'none';

            }

        });

    });

}