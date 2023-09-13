let dots=document.querySelectorAll(".dots span")
let images=['./image/bbb.jpg' , './image/mm.jpg','./image/image1.jpg']
let myimage=document.querySelector("img")
let righticon=document.querySelector(".right")
let lefticon=document.querySelector(".left")

let count=0;
function next(a){
    slide(count +=a);
}

function prev(a){
slide(count +=a)
}

function slide(e){
    count=e;
    if(count > images.length -1)count=0;
    if(count<0)count=images.length -1;

    dots.forEach((n)=> n.classList.remove("active"));
    dots[count].classList.remove("active")
    myimage.setAttribute("src" , images[count])
}








  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


 