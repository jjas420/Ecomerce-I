let minusBtn= document.querySelector('.input__minus');
let plusBtn=document.querySelector('.input__plus');
let userImput=document.querySelector('.input__number');

let userImputNumber=0;

plusBtn.addEventListener("click",()=>{
    userImputNumber++;
    console.log(userImputNumber);
    userImput.value=userImputNumber;

});
minusBtn.addEventListener("click",()=>{
    userImputNumber--;
    if(userImputNumber<=0){
        userImputNumber=0;

    }
    userImput.value=userImputNumber;
    console.log(userImputNumber);
});

//agregar el total de productos al carrito
const addtoCart=document.querySelector('.details__button');
let cartNotificacion=document.querySelector('.header__cart--notificacion');

addtoCart.addEventListener("click",()=>{
    let lastValue= parseInt(cartNotificacion.innerText);

    lastValue= lastValue+userImputNumber;
    
    cartNotificacion.innerHTML=lastValue;
    
    if ( parseInt(cartNotificacion.innerText) > 0){
    cartNotificacion.style.display='block';
    
    console.log(cartNotificacion);
    }else{

        cartNotificacion.style.display='none';
    }
});

//mostrar el modal del carrito
const cartIconBtn= document.querySelector('.header__cart');
const cartModal= document.querySelector('.cart-modal');
cartIconBtn.addEventListener('click',()=>{
    cartModal.style.display='block';

});
