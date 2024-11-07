// Happy Customer Counts

const CustomerCount = document.getElementById('number1');
let Count1 = 0;

function updateCustomerCount() {
    if (Count1 < 3000) {
        Count1++;
        CustomerCount.textContent = Count1;
    } else {
        CustomerCount.textContent = '3000+';
        clearInterval(CustomerInterval);
    }
}

const CustomerInterval = setInterval(updateCustomerCount, 0);


// Tons Count

const Tons = document.getElementById('number2');
let Count2 = 0;

function UpdateTons(){
    if (Count2 < 100){
        Count2++;
        Tons.textContent = Count2;
    }
    else{
        Tons.textContent = "100+";
        clearInterval(TonsIntervel);
    }
}

const TonsIntervel = setInterval(UpdateTons, 100);

// Products Count

const Products = document.getElementById('number3');
let Count3 = 0;

function UpdateProducts(){
    if (Count3 < 30){
        Count3++;
        Products.textContent = Count3;
    }
    else{
        Products.innerHTML = "30 <span class='NumberSpan'>+ Products</span>";
        clearInterval(ProductsIntervel);
    }
}

const ProductsIntervel = setInterval(UpdateProducts, 200)