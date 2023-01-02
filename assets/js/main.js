//Scroll Sections Active Link
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
sr.reveal('.portofolio-box-1', {delay: 1000, origin: 'top'})
sr.reveal('.portofolio-box-2', {delay: 1000, origin: 'top'})
sr.reveal('.portofolio-box-3', {delay: 1200, origin: 'top'})
sr.reveal('.portofolio-box-4', {delay: 1200, origin: 'top'})
sr.reveal('.social-footer', {delay: 900, origin: 'bottom'})



//Email JS
function validate() {
	let name = document.querySelector('.name')
	let email = document.querySelector('.email')
	let msg = document.querySelector('.message')
	let sendBtn = document.querySelector('.send-btn')

	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (name.value == "" || email.value == "" || msg.value == "") {
			emptyerror();
		} else {
			sendmail (name.value, email.value, msg.value);
			success();
		}
	})
}
validate();

function sendmail(name, email, msg) {
	emailjs.send("service_mfa515f","rezaluthfi_template",{
		to_name: name,
		from_name: email,
		message: msg,
		});
}

function emptyerror () {
	swal({
		title: "Error!",
		text: "Fields cannot be empty!",
		icon: "error",
	  });
}
function success () {
	swal({
		title: "Success!",
		text: "Thanks for contact me",
		icon: "success",
	  });
}



//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
});




