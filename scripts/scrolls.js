const special = document.querySelector("#specials");
const menu = document.querySelector("#menu");
const reveiew = document.querySelector("#review");
const end = document.querySelector("#end");

const specials_nav = document.querySelector(".specials-nav");
const menu_nav = document.querySelector(".menu-nav");
const review_nav = document.querySelector(".review-nav");
const about_nav = document.querySelector(".about-nav");

let menu_clicks = [specials_nav,menu_nav,review_nav,about_nav];

menu_clicks[0].addEventListener("click" , function () {
    
    let specoords = special.getBoundingClientRect();
    window.scrollTo(specoords.left + window.pageXOffset,specoords.top + window.pageYOffset);
});
menu_clicks[1].addEventListener("click" , function () {
    
    let mencoords = menu.getBoundingClientRect();
    window.scrollTo(mencoords.left + window.pageXOffset,mencoords.top + window.pageYOffset);
});
menu_clicks[2].addEventListener("click" , function () {
    
    let revcoords = reveiew.getBoundingClientRect();
    window.scrollTo(revcoords.left + window.pageXOffset,revcoords.top + window.pageYOffset);
});
menu_clicks[3].addEventListener("click" , function () {
    
    let endcoords = end.getBoundingClientRect();
    window.scrollTo(endcoords.left + window.pageXOffset,endcoords.top + window.pageYOffset);
});


menu_clicks.forEach((mens,indx) => {
mens.addEventListener("click",function() {
    list.classList.toggle("active");
    lines_1.classList.toggle("active");
  lines_2.classList.toggle("active");
  lines_3.classList.toggle("active");
});

});
