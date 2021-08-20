let  sections = document.querySelectorAll("section");

const objectsObserve = {
    root :null,
    threshold : .3,
    rootMargin : "0px"
}

const observer = new IntersectionObserver(function (entries,observer) {
 entries.forEach(entry => {
     if(!entry.isIntersecting){
        entry.target.classList.remove("anims");
     }else{
        entry.target.classList.add("anims");
        // console.log(entry);
     }
   
 })
}, objectsObserve);

sections.forEach((section) =>{
    observer.observe(section)
        })