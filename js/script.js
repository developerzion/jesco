window.onscroll =() =>{

    document.querySelector(".navbar").classList.remove("active")
    document.querySelector(".bars").classList.remove("fa-times")

    if (window.scrollY > 60) {
        document.querySelector(".scroll").classList.add("active")
    }else{
        document.querySelector(".scroll").classList.remove("active")
    }
}

document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo(0, 0);
})

function togglenav(x) {
  x.classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active")
}

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.animate`, {
    interval: 200
})