const gallery = document.querySelector(".gallery");
const leftAngle = document.querySelector(".fa-angle-left");
const rightAngle = document.querySelector(".fa-angle-right");

gallery.addEventListener("wheel", function(event){
    event.preventDefault();
    gallery.scrollLeft += event.deltaY;
});

rightAngle.addEventListener("click", function(){
    let maxScroll = gallery.scrollWidth - gallery.clientWidth;

    if(gallery.scrollLeft >= maxScroll - 5){
        gallery.style.scrollBehavior = "auto";
        gallery.scrollLeft = 0;
        gallery.style.scrollBehavior = "smooth";
    }else{
        let imageWidth = gallery.querySelector("div").offsetWidth;
        gallery.scrollLeft += imageWidth + 20;
    }
});

leftAngle.addEventListener("click", function(){
    let maxScroll = gallery.scrollWidth - gallery.clientWidth;

    if(gallery.scrollLeft <= 0){
        gallery.style.scrollBehavior = "auto";
        gallery.scrollLeft = maxScroll;
        gallery.style.scrollBehavior = "smooth";
    }else{
        let imageWidth = gallery.querySelector("div").offsetWidth;
        gallery.scrollLeft -= imageWidth + 20;
    }
});