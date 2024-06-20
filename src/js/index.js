// Burger menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__burger')
const menuItem = document.querySelectorAll('.menu__item')

menuBtn.addEventListener('click',function(item){
    menu.classList.toggle('activeMenu')
    if(menu.classList.contains('activeMenu')){
        // menuItem.forEach(function(item){
        //     item.addEventListener('click',function(e){
        //         menu.classList.remove('activeMenu')
        //     })
        // })
        window.addEventListener('click',function(e){
            const clickItem =  e.composedPath().includes(menu)
            if(!clickItem){
                menu.classList.remove('activeMenu')
            }
        })
    }
})

// modal for header
const headerBtn = document.querySelector('.header__link')
const modalBuy = document.querySelector('.modalBuy')
const buyInner = document.querySelector('.buy__inner')
const buy__close = document.querySelector('.buy__close')

headerBtn.addEventListener('click',function(item){
    modalBuy.classList.toggle('activeModal')
})

modalBuy.addEventListener('click',function(e){
        const currentItem = e.target.closest('.buy__inner')
        if(!currentItem){
            modalBuy.classList.remove('activeModal')
        }
})

buy__close.addEventListener('click',function(e){
    modalBuy.classList.remove('activeModal')
})

// tab for product
const productItem = document.querySelectorAll('.product__item')
const productImg = document.querySelectorAll('.product__img-item')

productItem.forEach(function(item){
    item.addEventListener('click',function(e){
        const currentItemContent = item;
        const currentItemContentId = currentItemContent.getAttribute('data-tab');
        const currentItemImg = document.getElementById(currentItemContentId)
        productItem.forEach(function(item){
            item.classList.remove('product__item--active')
        })
        productImg.forEach(function(item){
            item.classList.remove('product__img-item--active')
        })

        item.classList.add('product__item--active')
        currentItemImg.classList.add('product__img-item--active')
    })
})

// tab for safety
const safetyItem = document.querySelectorAll('.safety__item')
const safetyImg = document.querySelectorAll('.safety__img-item')

safetyItem.forEach(function(item){
    item.addEventListener('click',function(e){
        const currentItemContent = item;
        const currentItemContentId = currentItemContent.getAttribute('data-tab');
        const currentItemImg = document.getElementById(currentItemContentId)
        safetyItem.forEach(function(item){
            item.classList.remove('safety__item--active')
        })
        safetyImg.forEach(function(item){
            item.classList.remove('safety__img-item--active')
        })

        item.classList.add('safety__item--active')
        currentItemImg.classList.add('safety__img-item--active')
    })
})

// change while and black
let styleMode = localStorage.getItem('styleMode')
const styleToggle = document.querySelectorAll('.changeBtn')
function changeBlack(){
    document.body.classList.add('blackStyle')
    document.querySelectorAll('.changeBtn').forEach(function(item){
        item.classList.add('btnActiv')
    })
    document.querySelectorAll('.top__imgbox').forEach(function(item){
        item.classList.add('activeImg')
    })
    document.querySelector('.buy__imgbox').classList.add('activeImg')
    localStorage.setItem('styleMode','black')
}

function changeWhile(){
    document.body.classList.remove('blackStyle')
    document.querySelectorAll('.changeBtn').forEach(function(item){
        item.classList.remove('btnActiv')
    })
    document.querySelectorAll('.top__imgbox').forEach(function(item){
        item.classList.remove('activeImg')
    })
    document.querySelector('.buy__imgbox').classList.remove('activeImg')
    localStorage.setItem('styleMode',null)
}

styleToggle.forEach(function(item){
    item.addEventListener('click',function(e){
        styleMode = localStorage.getItem('styleMode')
        if(styleMode !== 'black'){
            changeBlack();
        }else{
            changeWhile()
        }
    })
})


if(styleMode !== 'black'){
    changeBlack();
}

// swiper for brand

const swiper = new Swiper('.brand-swiper', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        640:{
            direction: 'vertical',
        }
    }
});

// swiper for reviews

const swiperReviews = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:2.5,
    spaceBetween: 40,
    effect: "coverflow",
    navigation: {
        nextEl: '.reviews__btn-arrow-next',
        prevEl: '.reviews__btn-arrow-prev',
    },
    // breakpoints:{
    //     640:{
    //         direction: 'vertical',
    //     }
    // }
});

// accordeon for fag

const fagItem = document.querySelectorAll('.fag__item')

fagItem.forEach(function(item){
    item.addEventListener('click',function(e){
        
        // fagItem.forEach(function(item){
        //     item.classList.remove('active')
        // })

        
        // if(item.classList.contains('active')){
        //     fagItem.forEach(function(item){
        //         item.addEventListener('click',function(e){
        //             item.classList.remove('active')
        //         })
        //     })
        // }
        item.classList.toggle('active')
    })
})

