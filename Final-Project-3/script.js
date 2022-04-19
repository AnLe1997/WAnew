let introBlock1 = document.getElementById("intro-block1");
let introBlock2 = document.getElementById("intro-block2");
let introBlock3 = document.getElementById("intro-block3");
let introDes1 = document.getElementById("intro-des1");
let introDes2 = document.getElementById("intro-des2");
let introDes3 = document.getElementById("intro-des3");

introBlock1.addEventListener("mouseenter", function(){
    introBlock1.style.backgroundColor = "white";
    introBlock1.style.color = "black";
    introDes1.style.display = "block"
})
introBlock2.addEventListener("mouseenter", function(){
    introBlock2.style.backgroundColor = "white";
    introBlock2.style.color = "black";
    introDes2.style.display = "block"
})
introBlock3.addEventListener("mouseenter", function(){
    introBlock3.style.backgroundColor = "white";
    introBlock3.style.color = "black";
    introDes3.style.display = "block"
})

introBlock1.addEventListener("mouseleave", function(){
    introBlock1.style.backgroundColor = "";
    introBlock1.style.color = "white";
    introDes1.style.display = "none"
})
introBlock2.addEventListener("mouseleave", function(){
    introBlock2.style.backgroundColor = "";
    introBlock2.style.color = "white";
    introDes2.style.display = "none"
})
introBlock3.addEventListener("mouseleave", function(){
    introBlock3.style.backgroundColor = "";
    introBlock3.style.color = "white";
    introDes3.style.display = "none"
})