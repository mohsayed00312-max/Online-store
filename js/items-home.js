fetch("products.json")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    const cart=JSON.parse(localStorage.getItem("cart"))  || [];
    const products=document.querySelector(".products");
    const products2=document.querySelector(".ele");
    const products3=document.querySelector(".mobiles");
    const products4=document.querySelector(".appliances");
    data.forEach(e => {
        const salePresent = Math.floor((e.old_price-e.price)/e.old_price*100)
        if(e.old_price){
            const isInCart=cart.some((product)=>product.id===e.id);
            
            products.innerHTML +=`
            <div class="product swiper-slide">
                    <span class="sale-present">${salePresent}%</span>
                    
                    <div class="img-box">
                        <a href="#"><img src="${e.img}" ></a>
                    </div>
                    
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <p class="product-name">
                        <a href="">${e.name}</a>
                    </p>

                    <div class="price">
                        <span>$${e.price}</span>
                        <span>$${e.old_price}</span>
                    </div>

                    <div class="icons">
                        <span class="car-icon ${isInCart? "active":""}" data-id="${e.id}"><i class="fa-solid fa-cart-shopping"></i> ${isInCart? "item in cart":"add to cart"}</span>
                        <span class="heart-icon"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
            `

        }

        
        
    });

    data.forEach((e)=>{
        if(e.catetory==="electronics"){
            const old_price_span=e.old_price? `<span>$${e.old_price}</span>`:"";
            const sale_present_span=e.old_price?`<span class="sale-present">%${Math.floor((e.old_price-e.price)/e.old_price*100)}</span>`:"";
            products2.innerHTML+=`
            <div class="product swiper-slide">
                    ${sale_present_span}
                    
                    <div class="img-box">
                        <a href="#"><img src="${e.img}" ></a>
                    </div>
                    
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <p class="product-name">
                        <a href="">${e.name}</a>
                    </p>

                    <div class="price">
                        <span>$${e.price}</span>
                        ${old_price_span}
                    </div>

                    <div class="icons">
                        <span class="car-icon" data-id="${e.id}"><i class="fa-solid fa-cart-shopping"></i> add to cart</span>
                        <span class="heart-icon"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
            `
        }
    })

    data.forEach((e)=>{
        if(e.catetory==="mobiles"){
            const old_price_span=e.old_price? `<span>$${e.old_price}</span>`:"";
            const sale_present_span=e.old_price?`<span class="sale-present">%${Math.floor((e.old_price-e.price)/e.old_price*100)}</span>`:""
            products3.innerHTML+=`
            <div class="product swiper-slide">
                    ${sale_present_span}
                    
                    <div class="img-box">
                        <a href="#"><img src="${e.img}" ></a>
                    </div>
                    
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <p class="product-name">
                        <a href="">${e.name}</a>
                    </p>

                    <div class="price">
                        <span>$${e.price}</span>
                        ${old_price_span}
                    </div>

                    <div class="icons">
                        <span class="car-icon" data-id="${e.id}"><i class="fa-solid fa-cart-shopping"></i> add to cart</span>
                        <span class="heart-icon"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
            `
        }
    })

data.forEach((e)=>{
        if(e.catetory==="appliances"){
            const old_price_span= e.old_price? `<span>$${e.old_price}</span>`:"";
            const sale_present_span= e.old_price?`<span class="sale-present">%${Math.floor((e.old_price-e.price)/e.old_price*100)}</span>`:""
            products4.innerHTML+=`
            <div class="product swiper-slide">
                    ${sale_present_span}
                    
                    <div class="img-box">
                        <a href="#"><img src="${e.img}" ></a>
                    </div>
                    
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <p class="product-name">
                        <a href="">${e.name}</a>
                    </p>

                    <div class="price">
                        <span>$${e.price}</span>
                        ${old_price_span}
                    </div>

                    <div class="icons">
                        <span class="car-icon" data-id="${e.id}"><i class="fa-solid fa-cart-shopping"></i> add to cart</span>
                        <span class="heart-icon"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
            `
        }
    })








})