const product = [
    {
        id: 0,
        image: 'Image/cart-1.png',
        title: 'Modern Psychology',
        price: 1300,
    },
    {
        id: 1,
        image: 'Image/cart-2.png',
        title: 'Modern Psychology',
        price: 1300,
    },
    {
        id: 2,
        image: 'Image/cart-3.png',
        title: 'Modern Psychology',
        price: 1300,
    },
    {
        id: 3,
        image: 'Image/cart-4.png',
        title: 'Modern Psychology',
        price: 1200,
    },
    {
        id: 4,
        image: 'Image/cart-5.png',
        title: 'Modern Psychology',
        price: 1200,
    },
    {
        id: 5,
        image: 'Image/cart-6.png',
        title: 'Modern Psychology',
        price: 1200,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price} Tk</h2>`+
                "<button class='btn' onclick='addtocart("+(i++)+"); countClicks()'>Buy Courses</button>"+
            `</div>
            <div class="seat">
                <div class='seat-date'><i class="fa-regular fa-calendar-days"></i> <p>Start 20 April, 2021</p></div>
                <div class='seat-count'><i class="fa-regular fa-user"></i> <p id="output">60 seats</p></div>
            </div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function countClicks() {
    var paragraph = document.getElementById("output");
    var currentValue = parseInt(paragraph.innerHTML);
    var newValue = currentValue - 1;
    paragraph.innerHTML = newValue;
  }

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Empty cart";
        document.getElementById("total").innerHTML = 0+".00"+" Tk";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML =total+".00"+" Tk";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:13px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price} Tk</h2>`+
                "<i class='fa-solid fa-x' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


