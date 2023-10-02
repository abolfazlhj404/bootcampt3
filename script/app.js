const navbtn = document.querySelector(".navbtn")
const navmenu = document.querySelector(".mobilenavmenu")
let navopen = false;

navbtn.addEventListener("click",function(){
    if(navopen){
        navbtn.classList.remove('navbtnopen')
        navmenu.classList.remove("mobilenavmenuopen")
        navopen = false
    }
    else{
        navbtn.classList.add('navbtnopen')
        navmenu.classList.add("mobilenavmenuopen")
        navopen = true
    }
})
