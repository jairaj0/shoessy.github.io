const logo = document.querySelector(".logo");
const side_bar = document.querySelector(".side_bar");
const line_1 = document.querySelector(".bar_line1");
const line_2 = document.querySelector(".bar_line2");
const line_3 = document.querySelector(".bar_line3");
const nav_left = document.querySelector(".nav-left");
const circle_bg = document.querySelector(".circle_bg_img");
const circle_d = document.querySelector(".circle_on_img");
const shoe_img = document.querySelector(".shoe_img");
const main_right = document.querySelector(".main_right");
const main_left = document.querySelector(".main_left");


const tl = new TimelineMax();

tl.fromTo(logo,2, {right:"200%"}, {right: "0%", ease: Power2.easeInOut})
.fromTo(line_1, 1, { width: '200px' }, { width: "30px", ease: Power2.easeInOut }, "-=1")
.fromTo(line_2, .5, { width: '0px', left: '200px' }, { width: "50px", left: '0px' , ease: Power2.easeInOut }, "-=1")
.fromTo(line_3, .5, { transform:"rotate(180deg)" , opacity:"0" , width:"0px" }, { transform:"rotate(0deg)" , width:"30px", opacity:"1" , ease: Power2.easeInOut }, "-=1")
.fromTo(nav_left, 1.2, {left: "100%"}, {left: '0%' , ease: Power2.easeInOut } , "-=5")
.fromTo(main_right, 1.5, {left: "200%"}, {left: '0%' , ease: Power2.easeInOut } ,)
.fromTo(main_left, 1.5, {right: "200%"}, {right: '0%' , ease: Power2.easeInOut } , "-=")
.fromTo(circle_bg, 3, {transform: "rotate(170deg)", opacity:"0"}, {transform: "rotate(0deg)", opacity:"1" , ease: Power2.easeInOut } ,"-=2")
.fromTo(circle_d, 3, {transform: "rotate(90deg) scale(1.5)", opacity:"0"}, {transform: "rotate(0deg) scale(1)", opacity:"1" , ease: Power2.easeInOut } ,"-=4")
.fromTo(shoe_img, 3, {transform: "rotate(60deg) scale(.4)", opacity: "0" }, {transform: "rotate(0deg) scale(1)", opacity: "1" , ease: Power2.easeInOut } ,"-=3")

// console.log(circle_bg.style.background="red")



