let minusBtn= document.querySelector('.input__minus');
let plusBtn=document.querySelector('.input__plus');
let userImput=document.querySelector('.input__number');
const deleteBtn=document.querySelector('.cart-modal__delete');
const producContainert=document.querySelector('.cart-modal__total');

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


let lastValue= parseInt(cartNotificacion.innerText);
addtoCart.addEventListener("click",()=>{
    
    lastValue= lastValue+userImputNumber;
    
    cartNotificacion.innerHTML=lastValue;
    
    
    
    cartNotificacion.style.display='block';
    draw();
    if ( parseInt(cartNotificacion.innerText) > 0){
        

        
        console.log(cartNotificacion);
    }else{
        
        cartNotificacion.style.display='none';
        
    }
});

//mostrar el modal del carrito
const cartIconBtn= document.querySelector('.header__cart');
const cartModal= document.querySelector('.cart-modal');
cartIconBtn.addEventListener('click',()=>{
    //cartModal.style.display='block';
    cartModal.classList.toggle('show');
        if(lastValue===0){
            producContainert.innerHTML = '<p class="cart_emptyy">Your cart is empty</p>';
            cartNotificacion.style.display='none';

            
        }else{
            draw();

        }
   

       
    

});

//cambiar imagenes de la galeria
const imageContainer=document.querySelector('.gallery__image-content');
const previusBtnGalery=document.querySelector('.icon-previous');
const nextBtnGalery=document.querySelector('.icono-next');
let idImg=1;
const imagesUrl=[
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg'


]
nextBtnGalery.addEventListener('click',()=>{

    
    changeNextImg(imageContainer);
});

previusBtnGalery.addEventListener('click',()=>{
    changePreviusImg(imageContainer);

})
//mostrar imagenes  en escritorio
const imagesModal=document.querySelector('.modal-galerry__bacground');
const closeModal=document.querySelector('.modal-galerry__icono-close');
const botonprevius= document.querySelector('.modal-galerry__iconprevious');
const botonNext=document.querySelector('.modal-galerry__icono-next');
const modalImagen=document.querySelector('.modal-galerry__image-content');

botonprevius.addEventListener('click',()=>{
    changePreviusImg(modalImagen);
    

});
botonNext.addEventListener('click',()=>{
    changeNextImg(modalImagen);

});


imageContainer.addEventListener('click',()=>{
    imagesModal.style.display='grid';



});
closeModal.addEventListener('click',()=>{
    imagesModal.style.display='none';



});
//cambiar las imagenes de la galeria desde thumbails
let thumbnails = document.querySelectorAll('.gallery_thumnails');

thumbnails=[...thumbnails];
thumbnails.forEach(thumbnail=>{
    thumbnail.addEventListener('click',event=>{
        console.log(event.target.id);
        imageContainer.style.backgroundImage='url(../images/image-product-'+event.target.id+'.jpg)'

    });
})

const modalGalerycont=document.querySelector('.modal-galerry__image-content');
let modalThumbnails=document.querySelectorAll('.modal-galerry__gallery_thumnails');
modalThumbnails=[...modalThumbnails];
modalThumbnails.forEach(thumbnail=>{
    thumbnail.addEventListener('click',event=>{
        console.log(event.target.id.slice(-1));
        event.target.id.slice(-1)
        modalGalerycont.style.backgroundImage='url(../images/image-product-'+event.target.id.slice(-1)+'.jpg)'

    });
})
//menu de hamburguesa 

const modalMenu= document.querySelector('.icon-menu');
let saleMenu=document.querySelector('.modal-navbar-background');
let closeIcon=document.querySelector('.modal-navbar-background-close-icon');

modalMenu.addEventListener('click',()=>{
    saleMenu.style.display='grid';
});
closeIcon.addEventListener('click',()=>{
    saleMenu.style.display='none';
});

//funciones

function draw(){
    //producContainert.innerHTML='<p class="cart_empty"> no esta vacio</p>';
  
        producContainert.innerHTML=`
        <div class="cart-modal__datails-container">
        <img src="./images/image-product-1-thumbnail.jpg" alt="cart-modal__datails-container" class="image-cart-modal">
            <div>
            <p class="cart-modal-product"> Autumn limited</p>
            <p class="cart-modal__price"> 125$ x 3 <span class="as">$375.00</span> </p>
            
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg"  alt=" icon-delete">
            </div>
            <button class="cart-checkout">  pagar</button>
            `
        
             
        carro_vacio();
        let priceModal= document.querySelector('.cart-modal__price')
        priceModal.innerHTML='125$ x  '+lastValue+ '<span class="as">  $ '+ 125*lastValue+'</span>'
        

        
}

function carro_vacio(){

    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        producContainert.innerHTML = '<p class="cart_emptyy">Your cart is empty</p>';
        lastValue = 0;
        cartNotificacion.innerText = lastValue;
    });
    
}

function changeNextImg(imgConteiner){

    if(idImg==4){
        idImg=1;
    }else{
        idImg++;

    }
    

    imgConteiner.style.backgroundImage='url(../images/image-product-'+idImg+'.jpg)'


}

function changePreviusImg(imgConteiner){

    if(idImg==1){
        idImg=4;
    }else{
        idImg--;

    }
    

    imgConteiner.style.backgroundImage='url(../images/image-product-'+idImg+'.jpg)'


}