const scriptURL="https://script.google.com/macros/s/AKfycbyFBfT1tNWeQlK-mVUGfx1tqbeTNoi-I5sy8ZJdN_MwfC9UDk_BVT0BYkrXTLRzYn_q/exec";
let form=document.getElementById("form-contact");


    

form.addEventListener("submit",(e)=>{
    
    fetch(scriptURL,{
        method:"post",
        body:new FormData(form)}).then((response)=>{
            setTimeout(()=>{
                localStorage.removeItem("cart");
                window.location.reload();
            },1000)

        })
        .catch((error)=>{
    console.error("error!",error.message);
})

})