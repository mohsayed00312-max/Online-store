let categoryNavList=document.querySelector(".category_nav_list")
function displayList(){
    categoryNavList.classList.toggle("active")
}

let cart=document.querySelector(".cart")
function open_close(){
    cart.classList.toggle("active");
}
let navLinks=document.querySelector(".nav-links");
function open_close_menu(){
    navLinks.classList.toggle("active");
}


// fetch("products.json")
// .then((response)=>response.json())
// .then((data)=>{
//     const carIcons=document.querySelectorAll(".car-icon");
//     carIcons.forEach((e)=>{
//         e.addEventListener("click",(event)=>{
//             const productId=event.target.getAttribute("data-id");
//             const selectedProduct=data.find(p=>p.id == productId);
//             addToCart(selectedProduct)
//             const allbtns=document.querySelectorAll(`.car-icon[data-id="${productId}"]`)
//             allbtns.forEach(btn=>{
//                 btn.classList.add("active");
//                 btn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> item in cart`
//             })

//         })
//     })

// })

// function addToCart(product){
//     console.log(product);
//     let cart=JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push({...product,qauntity:1})
//     localStorage.setItem("cart",JSON.stringify(cart));
//     updateCart();
// }

// function updateCart(){
//     const cartItems=document.querySelector(".cart-items");
//     const cartData=JSON.parse(localStorage.getItem("cart"));
//     cartItems.innerHTML="";
//     var allTotalPrice = 0;
//     var itemcount = 0;
//     cartData.forEach((e,i)=>{
//         let totalPrice=e.price*e.qauntity;
//         allTotalPrice+=totalPrice;
//         itemcount+=e.qauntity;
//         cartItems.innerHTML+=`
//         <div class="item-in-cart">
//             <img src="${e.img}">
//             <div class="content">
//                 <h3>${e.name}</h3>
//                 <p class="price">$${totalPrice}</p>
//                 <div class="quantity-buttons">
//                     <button class="decrease" data-index="${i}">-</button>
//                     <span class="quantity-number">${e.qauntity}</span>
//                     <button class="increase" data-index="${i}">+</button>
//                 </div>
                
//             </div>
//             <div class="remove" data-index="${i}"><i class="fa-solid fa-trash-can"></i></div>
//         </div>
//         `

//     })

//     const countCart=document.querySelector(".count-cart");

//     const subtotalrPice=document.querySelector(".subtotal-price");

//     const itemsCount=document.querySelector(".items-count");

//     subtotalrPice.innerHTML=`$${allTotalPrice}`;
//     itemsCount.innerHTML=`${itemcount}`;
//     countCart.innerHTML=`${itemcount}`

//     const increaseButton=document.querySelectorAll(".increase");
//     increaseButton.forEach((button)=>{
//         button.addEventListener("click",(event)=>{
//             const itemIndex=event.target.getAttribute("data-index");
//             increaseQuantity(itemIndex);
//         })

//     })

//     const decreaseButton=document.querySelectorAll(".decrease");

//     decreaseButton.forEach((button)=>{
//         button.addEventListener("click",(event)=>{
//             const itemIndex=event.target.getAttribute("data-index");
//             decreaseQuantity(itemIndex);
//         })

//     })



//     const removeButton=document.querySelectorAll(".remove");
//     removeButton.forEach((button)=>{
//         button.addEventListener("click",(event)=>{
//             const index=event.target.closest(".remove").getAttribute("data-index");
//             deleteFromCart(index);

//         })
//     })
// }

// function increaseQuantity(index){
//     const cartItem=JSON.parse(localStorage.getItem("cart"));
//     cartItem[index].qauntity+=1;
//     localStorage.setItem("cart",JSON.stringify(cartItem));
//     updateCart();
// }

// function decreaseQuantity(index){
//     const cartItem=JSON.parse(localStorage.getItem("cart"));
//     if(cartItem[index].qauntity>1){
//         cartItem[index].qauntity-=1;
//     }
    
//     localStorage.setItem("cart",JSON.stringify(cartItem));
//     updateCart();
// }



// function deleteFromCart(index){
//     const cart=JSON.parse(localStorage.getItem("cart"))||[];
//     const removeBroduct = cart.splice(index,1)[0];
//     localStorage.setItem("cart",JSON.stringify(cart))
//     updateCart();
//     returnOldButton(removeBroduct.id);

// }

// function returnOldButton(productId){
//     const allCartButtons=document.querySelectorAll(`.car-icon[data-id='${productId}']`);
//     allCartButtons.forEach((button)=>{
//         button.classList.remove("active");
//         button.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> add to cart`
//     })
// }



// updateCart();


fetch("products.json")
.then(response=>response.json())
.then((data)=>{

    const carIcons=document.querySelectorAll(".car-icon");
    carIcons.forEach((button)=>{
        button.addEventListener("click",(event)=>{
            const productId=event.target.closest('.car-icon').getAttribute("data-id");
            const selectedProduct=data.find(product=>product.id == productId);
            addToCart(selectedProduct);
            const allbuttons=document.querySelectorAll(`.car-icon[data-id='${productId}']`);
            allbuttons.forEach((btn)=>{
                btn.classList.add("active");
                btn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> item in cart`
            })
            

        })
    })


})
function addToCart(product){
    const cart =JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({...product,quantity: 1});
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();

}

function updateCart(){
    const cartItems=document.querySelector(".cart-items");
    const itemsInCart=JSON.parse(localStorage.getItem("cart")) || [];
    var subtotalrPice=0;
    var counter=0;
    cartItems.innerHTML="";
    itemsInCart.forEach((e,i)=>{
        let totalPrice=e.price*e.quantity;
        subtotalrPice+=totalPrice;
        counter+=e.quantity;
        cartItems.innerHTML+=`
        <div class="item-in-cart">
            <img src="${e.img}">
            <div class="content">
                <h3>${e.name}</h3>
                <p class="price">$${totalPrice}</p>
                <div class="quantity-buttons">
                    <button class="decrease" data-index="${i}">-</button>
                    <span class="quantity-number">${e.quantity}</span>
                    <button class="increase" data-index="${i}">+</button>
                </div>
                
            </div>
            <div class="remove" data-index="${i}"><i class="fa-solid fa-trash-can"></i></div>
        </div>
        
        `
    })

    const subtotalPrice=document.querySelector(".subtotal-price");
    subtotalPrice.innerHTML=subtotalrPice;

    const cartCount=document.querySelector(".count-cart");
    cartCount.innerHTML=counter;

    const itemsCount=document.querySelector(".items-count");
    itemsCount.innerHTML=counter;


    const increasebuttons=document.querySelectorAll(".increase");
    increasebuttons.forEach((e,i)=>{
        e.addEventListener("click",(event)=>{
            const index=event.target.getAttribute("data-index");
            increasequantity(index);

        })

    })


    const decreasebuttons=document.querySelectorAll(".decrease");
    decreasebuttons.forEach((e,i)=>{
        e.addEventListener("click",(event)=>{
            const index=event.target.getAttribute("data-index");
            decreasequantity(index);
        })
    })


    const removeButtons=document.querySelectorAll(".remove");
        removeButtons.forEach(btn=>{
            btn.addEventListener("click",event=>{
                const productIndex=event.target.closest(".remove").getAttribute("data-index");
                deleteProduct(productIndex);


            })
        })

}



function deleteProduct(index){
    const productsCart= JSON.parse(localStorage.getItem("cart")) || [];
    const removedBroduct=productsCart.splice(index,1)[0];
    localStorage.setItem("cart",JSON.stringify(productsCart));
    updateCart();
    returnOldButton(removedBroduct.id);

}



function returnOldButton(productId){
    const buttons =document.querySelectorAll(`.car-icon[data-id='${productId}']`);
    buttons.forEach((btn)=>{
        btn.classList.remove("active");
        btn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> add to cart`
    })
}




function increasequantity(index){
    const productsCart= JSON.parse(localStorage.getItem("cart"));
    const selectedProduct=productsCart[index];
    selectedProduct.quantity+=1;
    localStorage.setItem("cart",JSON.stringify(productsCart));
    updateCart();
}
function decreasequantity(index){

    const productsCart= JSON.parse(localStorage.getItem("cart"));
    const selectedProduct=productsCart[index];
    if(selectedProduct.quantity>1){
        selectedProduct.quantity -=1;       
    }
    
    localStorage.setItem("cart",JSON.stringify(productsCart));
    updateCart();
}














updateCart();

























