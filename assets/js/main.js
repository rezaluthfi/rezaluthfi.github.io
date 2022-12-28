//Scroll Sections Active Link
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id')

//             if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//                 document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//             } else {
//                 document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//             }
//     })
// }
// window.addEventListener('scroll', scrollActive)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
});

//Scroll Reveal Animation
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home-img')
sr.reveal('.home-text', {delay: 900})
sr.reveal('.social', {delay: 1100, origin: 'bottom'})
sr.reveal('.section__subtitle-skills, .section__title-skills', {delay: 2000})
sr.reveal('.skills-content', {delay: 2000, origin: 'bottom'})