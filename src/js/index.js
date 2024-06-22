// Burger menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__burger')
const menuItem = document.querySelectorAll('.menu__item')

menuBtn.addEventListener('click',function(item){
    menu.classList.toggle('activeMenu')
    if(menu.classList.contains('activeMenu')){
        menuItem.forEach(function(item){
            item.addEventListener('click',function(e){
                menu.classList.remove('activeMenu')
            })
        })
        outsideBlock(menu)
    }
})

function outsideBlock(block){
    window.addEventListener('click',function(e){
        const clickItem =  e.composedPath().includes(block)
        if(!clickItem){
            block.classList.remove('activeMenu')
        }
    })
}
////////////////////////////////////////////////////////////////////////

// modal for header
const headerBtn = document.querySelector('.header__link')
const modalBuy = document.querySelector('.modalBuy')
const buyClose = document.querySelector('.buy__close')
const buyLink = document.querySelector('.buy__link')
addClassActiveModal(headerBtn,modalBuy)
removeClassActiveModal(buyClose,modalBuy)
removeClassActiveModal(buyLink,modalBuy)


modalBuy.addEventListener('click',function(e){
        const currentItem = e.target.closest('.buy__inner')
        if(!currentItem){
            modalBuy.classList.remove('activeModal')
        }
})
////////////////////////////////////////////////////////////////////////

// tab for product
const productItem = document.querySelectorAll('.product__item')
const productImg = document.querySelectorAll('.product__img-item')

tabs(productItem,productImg,'product__item--active','product__img-item--active','product__item--active','product__img-item--active')

// tab for safety
const safetyItem = document.querySelectorAll('.safety__item')
const safetyImg = document.querySelectorAll('.safety__img-item')

tabs(safetyItem,safetyImg,'safety__item--active','safety__img-item--active','safety__item--active','safety__img-item--active')

////////////////////////////////////////////////////////////////////////


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
    document.querySelectorAll('.buy__imgbox').forEach(function(item){
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
    document.querySelectorAll('.buy__imgbox').forEach(function(item){
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


if(styleMode === 'black'){
    changeBlack();
}

////////////////////////////////////////////////////////////////////////

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
    slidesPerView:1,
    spaceBetween: 40,
    effect: "coverflow",
    navigation: {
        nextEl: '.reviews__btn-arrow-next',
        prevEl: '.reviews__btn-arrow-prev',
    },
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },
    breakpoints:{
        1023:{
            slidesPerView:2.5,
        },
        767:{
            slidesPerView:2,
        },
        641:{
            slidesPerView:1.3,
        }
    }
});

////////////////////////////////////////////////////////////////////////

// accordeon for fag

const fagItem = document.querySelectorAll('.fag__item')

fagItem.forEach(function(item){
    item.addEventListener('click',function(e){
        item.classList.toggle('active')
    })
})

////////////////////////////////////////////////////////////////////////

//buy bytton for the scope of delivery

const buyInfoBox = document.querySelectorAll('.buy__infobox')
const buyInfoBoxBtn = document.querySelectorAll('.buy__infobox')


buyInfoBoxBtn.forEach(function(item){
    item.addEventListener('click',function(e){
        buyInfoBox.forEach(function(item){
            item.classList.toggle('buy__infobox--active')
        })
        
    })
})

////////////////////////////////////////////////////////////////////////


//modal for reviews

const reviewsBtn = document.querySelector('.reviews__btn')
const reviewsmodalBtn = document.querySelector('.reviewsmodal__btn')
const reviewsmodal = document.querySelector('.reviewsmodal')
const reviewsmodalInner = document.querySelector('.reviewsmodal__inner')
const reviewsmodalClose = document.querySelector('.reviewsmodal__close')

addClassActiveModal(reviewsBtn,reviewsmodal)
removeClassActiveModal(reviewsmodalBtn,reviewsmodal)
removeClassActiveModal(reviewsmodalClose,reviewsmodal)

reviewsmodal.addEventListener('click',function(e){
    e.preventDefault();
    const currentItem = e.target.closest('.reviewsmodal__inner')
    if(!currentItem){
        reviewsmodal.classList.remove('activeModal')
    }
})

////////////////////////////////////////////////////////////////////////

//modal for fag

const fagBtn = document.querySelector('.fag__btn')
const fagmodal = document.querySelector('.fagmodal')
const fagmodalBtn = document.querySelector('.fagmodal__btn')
const fagmodalInner = document.querySelector('.fagmodal__inner')
const fagmodalClose = document.querySelector('.fagmodal__close')

addClassActiveModal(fagBtn,fagmodal)
removeClassActiveModal(fagmodalClose,fagmodal)
removeClassActiveModal(fagmodalBtn,fagmodal)

fagmodal.addEventListener('click',function(e){
    const currentItem = e.target.closest('.fagmodal__inner')
    if(!currentItem){
        fagmodal.classList.remove('activeModal')
    }
})

////////////////////////////////////////////////////////////////////////

//Smooth appearance of blocks

window.addEventListener('scroll',reveal)

function reveal(){
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i < reveals.length;i += 1){

        let windowHeight = window.innerHeight;
        let revealleft = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150

        if(revealleft < windowHeight - revealpoint){
            reveals[i].classList.add('reveal--active')
        }else{
            reveals[i].classList.remove('reveal--active')
        }
    }
}

////////////////////////////////////////////////////////////////////////

//preload 

const body = document.querySelector('body')
const preload = document.querySelector('.preload')

window.addEventListener('load',function(e){
    preload.style.display = "none"
    body.style.overflowY = 'visible'
    
})

////////////////////////////////////////////////////////////////////////


// functions
function removeClassActiveModal(btnItem,removeItem){
    btnItem.addEventListener('click',function(e){
        e.preventDefault()
        removeItem.classList.remove('activeModal')
    })
}

function addClassActiveModal(btnItem,addItem){
    btnItem.addEventListener('click',function(e){
        addItem.classList.add('activeModal')
    })
}


function tabs(btnItem,openContentImg,removeClassActiveOne,removeClassActiveTwo,addClassActiveOne,addClassActiveTwo){
    btnItem.forEach(function(item){
        item.addEventListener('click',function(e){
            const currentItemContent = item;
            const currentItemContentId = currentItemContent.getAttribute('data-tab');
            const currentItemImg = document.getElementById(currentItemContentId)
            btnItem.forEach(function(item){
                item.classList.remove(removeClassActiveOne)
            })
            openContentImg.forEach(function(item){
                item.classList.remove(removeClassActiveTwo)
            })

            item.classList.add(addClassActiveOne)
            currentItemImg.classList.add(addClassActiveTwo)
        })
    })
}










