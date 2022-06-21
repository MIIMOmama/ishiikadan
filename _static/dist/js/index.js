AOS.init()

let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    },
    speed: 2000,
    }

new Swiper('.swiper-container', swipeOption);



window.addEventListener("scroll",function() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    const navList = document.querySelector("#js_nav");
    const js_logo = document.querySelector(".headerLogo_img-hide");
    const js_hide = document.querySelector(".headerLogo_img");

    header.classList.toggle("header-scroll", window.scrollY>1);
    h1.classList.toggle("headerLogo_text-scroll",window.scrollY>1);
    navList.classList.toggle("globalNav_list-scroll",window.scrollY>1);
    js_logo.setAttribute("id","js_logo",window.scrollY>1);
    js_hide.setAttribute("id","js_hide",window.scrollY>1);

    if(window.scrollY < 1) {
        js_logo.setAttribute("id","js_logo-hide");
        js_hide.setAttribute("id","js_hide-hide");
    
    }
});

