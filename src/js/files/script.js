// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
 

 const tl = gsap.timeline()

 tl.fromTo(
  '.header__promo-box',
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
  1.5,
 )
 .fromTo(
  '.sidepanel',
  {
    x: -50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  1.5,
 )

// const btnMenu = document.querySelector(".icon-menu");
// const menu = document.querySelector(".menu");
// const toggleMenu = function () {
//     menu.classList.toggle("menu-open");
// }

// btnMenu.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener("click", function (e) {
//     const target = e.target;
//     const its_menu = target == menu || menu.contains(target);
//     const its_btnMenu = target == btnMenu;
//     const menu_is_active = menu.classList.contains("menu-open");

//     if (!its_menu && !its_btnMenu && menu_is_active) {
//         toggleMenu();
//     }
// });




const btnUp = {
   el: document.querySelector('.btn-up'),
   scrolling: false,
   show() {
     if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
       this.el.classList.remove('btn-up_hide');
       this.el.classList.add('btn-up_hiding');
       window.setTimeout(() => {
         this.el.classList.remove('btn-up_hiding');
       }, 300);
     }
   },
   hide() {
     if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
       this.el.classList.add('btn-up_hiding');
       window.setTimeout(() => {
         this.el.classList.add('btn-up_hide');
         this.el.classList.remove('btn-up_hiding');
       }, 300);
     }
   },
   addEventListener() {
     // при прокрутке окна (window)
     window.addEventListener('scroll', () => {
       const scrollY = window.scrollY || document.documentElement.scrollTop;
       if (this.scrolling && scrollY > 0) {
         return;
       }
       this.scrolling = false;
       // если пользователь прокрутил страницу более чем на 200px
       if (scrollY > 400) {
         // сделаем кнопку .btn-up видимой
         this.show();
       } else {
         // иначе скроем кнопку .btn-up
         this.hide();
       }
     });
     // при нажатии на кнопку .btn-up
     document.querySelector('.btn-up').onclick = () => {
       this.scrolling = true;
       this.hide();
       // переместиться в верхнюю часть страницы
       window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
       });
     }
   }
 }

 btnUp.addEventListener();


