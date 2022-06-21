/*==================== MENU SHOW Y HIDDEN ====================*/
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("nav-show");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("nav-show");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((navLink) =>
    navLink.addEventListener("click", () => {
        navMenu.classList.remove("nav-show");
    })
);

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"); // htmlcollections
const skillsHeader = document.querySelectorAll(".skills__header"); // nodelist

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // this gets tabContent which id is equal to data-target
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => tabContent.classList.remove("qualification__active"));
        target.classList.add("qualification__active");

        tabs.forEach((tab) => tab.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

modalViews.forEach((modal) => modal.classList.remove("active-modal"));

function changeModal(modal) {
    modalViews[modal].classList.toggle("active-modal");
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => changeModal(i));
});

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener("click", () => changeModal(i));
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.nav__menu a[href*="#${id}"]`);
        if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active-link");
        } else {
            currentNavLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollTracker);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 10) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scrollUp");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scrollUp");
    else scrollUp.classList.remove("show-scrollUp");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "uil-sun";
let theme = localStorage.getItem("alexa-theme");

if (theme) {
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[theme === "dark" ? "add" : "remove"](sunIcon);
}

themeButton.addEventListener("click", function () {
    this.classList.toggle(sunIcon);
    document.body.classList.toggle(darkTheme);

    theme = document.body.classList.contains(darkTheme) ? "dark" : "light";
    localStorage.setItem("alexa-theme", theme);
});
/*==================== shift shit ====================*/
let shifters = document.getElementsByTagName('shift');
let i = 1;
setInterval(function (){
    if(i == 0) {
        shifters[3].classList.remove('visible');
    } else shifters[i-1].classList.remove('visible');
    
    shifters[i].classList.add('visible');
    
    i++;
    if (i == 4) i = 0;
}, 3000)

/*==================== SCROLL REVEAL ====================*/
const sr = ScrollReveal({
    distance: "60px",
    duration: 2800,
    // reset: true,
});

sr.reveal(
    `.home__social, .home__data, .about__img, .portfolio__container, .project__data, .contact__informations`,
    {
        origin: "left",
        interval: 100,
    }
);

sr.reveal(`.home__image, .about__description, .about__info,.project__img, .contact__form`, {
    origin: "right",
    interval: 100,
});

sr.reveal(
    `.skills__content, .qualification__container, .testimonial__container, .footer__links, .footer__socials, .footer__data`,
    {
        origin: "top",
        interval: 100,
    }
);

sr.reveal(`.home__scroll, .about__buttons, .footer__copy`, {
    origin: "bottom",
    interval: 100,
});

if(!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))) {
        const originalCursor = "z-index: 100000; width: 10px; height: 10px; border: 2px solid white;mix-blend-mode:difference; border-radius: 50%; position: absolute;transition: all 0.1s linear; pointer-events: none;"

        var n = document.createElement("div");
            n.style.cssText = originalCursor;
            document.body.appendChild(n);
        
        document.addEventListener("mousemove", (e) => {
          n.style.left = (e.pageX - 5) + "px";
          n.style.top = (e.pageY - 5) + "px";
        });
        
        // for (let e of document.getElementsByTagName("em")) {
        //     e.onmouseover = function(){
        //         n.style.border = "1px solid white"
        //         n.style.cssText += "transform: scale(3);background: red;border-color:red;";
        //     };
        //     e.onmouseout = function(){
        //         n.style.cssText = originalCursor;
        //     };
        // }
        
        for (let e of document.getElementsByTagName("a")) {
            e.onmouseover = function(){
                n.style.border = "1px solid white"
                n.style.cssText += "transform: scale(4);background: white;";
            };
            e.onmouseout = function(){
                n.style.cssText = originalCursor;
            };
        }
        for (let e of document.getElementsByTagName("svg")) {
            e.onmouseover = function(){
                n.style.border = "1px solid white"
                n.style.cssText += "transform: scale(6);background: white;";
            };
            e.onmouseout = function(){
                n.style.cssText = originalCursor;
            };
        }
}