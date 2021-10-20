window.onscroll =() =>{
    if (window.scrollY > 60) {
        document.querySelector(".scroll").classList.add("active")
    }else{
        document.querySelector(".scroll").classList.remove("active")
    }
}

document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo(0, 0);
})
// document.getElementById("shownav").onclick =()=>{
//     document.querySelector(".navbar").classList.add("active")
    
// }
function togglenav(x) {
  x.classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active")
}
