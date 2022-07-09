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



// ↓スクロールと同時にヘッダー変化

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


// ↓モーダルウインドウ表示

const open = document.getElementById('modalButton');
const close = document.querySelector('.modalButton-close');
const modal = document.getElementById('modal');


open.addEventListener('click', function(){
    modal.classList.toggle('is-show');
});

close.addEventListener('click', function() {
    modal.classList.toggle('is-show');
})

addEventListener('click', function(close_bg){
    if(close_bg.target === modal){
        modal.classList.toggle('is-show');
    }
})


// ↓flatpicker
const config = {
    mode: "range",
    dateFormat: "Y-m-d",
    minDate:"today",
    local:"ja"
}
flatpickr('#flatpickr', config);


// タブ↓

// document.addEventListener('DOMContentLoaded', () =>{
// const tabTriggers = document.querySelectorAll('.js-tab-trigger');
// const tabTargets = document.querySelectorAll('.js-tab-target');



//     tabTriggers.forEach(tabTrigger => {
//         tabTrigger.addEventListener('click', (e) => {
//             let currentMenu = e.currentTarget
//             let currentContent = document.getElementById(currentMenu.dataset.id)
            
//             tabTriggers.forEach(tabTrigger => {
//                 tabTrigger.classList.remove('is-active')
//             });

//             currentContent.classList.add('is-active')

//             tabTargets.forEach(tabTarget => {
//                 tabTarget.classList.remove('is-active')
//             });

//             if (currentContent !== null) {
//                 currentContent.classList.add('is-active')
//             }
//         })
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    // タブメニュークラス'.js-tab-trigger'を持つ要素を取得
    const tabTriggers = document.querySelectorAll('.js-tab-trigger');
    // タブコンテンツクラス'.js-tab-target'を持つ要素を取得
    const tabTargets = document.querySelectorAll('.js-tab-target');

    // 要素の数の分だけループ処理をして値を取り出す
    tabTriggers.forEach(tabTrigger => {
          // タブメニュークリック時
        tabTrigger.addEventListener('click', (e) => {
              // クリックされた要素（メニュー要素[トリガー要素]）を取得
            let currentMenu = e.currentTarget
              // ターゲットとなる要素（タブメニューdata属性値と等しいid値を持つコンテンツ要素[ターゲット要素]）を取得
            let currentContent = document.getElementById(currentMenu.dataset.id)
              // すべてのタブメニューの'is-active'クラスを削除
            tabTriggers.forEach(tabTrigger => {
                tabTrigger.classList.remove('is-active')
            });
              // クリックしたタブメニューに'is-active'クラスを追加
            currentMenu.classList.add('is-active')

              // タブコンテンツを非アクティブにする
            tabTargets.forEach(tabTarget => {
                tabTarget.classList.remove('is-active')
            });
              // 対象コンテンツ(指定したIDの要素があったら)を表示させる
            if (currentContent !== null) {
                currentContent.classList.add('is-active')
            }
        })
    });
});


// ハンバーガーメニュー

const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-global-menu');

jsHamburger.addEventListener('click', function() {
    body.classList.toggle('is-drawerActive')
    if(this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true');
        spHeaderMenu.style.visibility = "visible";
        spHeadetMenu.setAttribute('aria-hidden', 'false')
    } else {
        this.setAttribute('aria-expanded', 'false')
        spHeaderMenu.style.visibility = "hidden";
        spHeaderMenu.setAttribute('aria-hidden', 'true')
    };
});
