const section = document.querySelector("section");
let clicked = false;

section.addEventListener('click',(e)=>{
    console.log("trigggerd");
    section.classList.toggle('flip');
    if(!clicked){
        clicked = true;
        document.getElementById("title").style.opacity = 0;
    }else{
        clicked = false;
        // document.getElementById("title").style.opacity = 0;
    }
});