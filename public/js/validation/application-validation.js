import {validateEmail, validateMobile} from "./validate.js"

$(document).ready(function() {
    $('input').on('focusin', function(){
        $(this).parent().find('label').addClass("active")
    })
    $('input').on('focusout', function(){
        if(!this.value){
            $(this).parent().find('label').removeClass("active")  
        }  
    })
})

let selector = e => document.querySelector(e)

const email = selector("#email")
const telephone = selector("#telephone")
const housing = selector("#housing")
const cost = selector("#cost")
const program = selector("#program")
const duration = selector("#duration")
const courses = selector("#courses")


telephone.addEventListener("focus" , event => {
	const telFeedBack = selector(".telephone")
	if (telFeedBack.classList.contains("blur-feedback-error")) {
		telFeedBack.classList.remove("blur-feedback-error")
	}
	telFeedBack.style.borderColor = "blue"
	telFeedBack.classList.add("focus-feedback")
})
telephone.addEventListener("blur" , event => {
	const telFeedBack = selector(".telephone")
	try {
		const telValue = validateMobile(telephone.value.trim())
		if ( telValue.value != null ) {
			telFeedBack.style.borderColor = "green"
		}else {
			telFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		telFeedBack.textContent = `${error.message} `
		telFeedBack.classList.add("blur-feedback-error")
	}
})

email.addEventListener("focus" , event => {
	const emailFeedBack = selector(".email")
	if (emailFeedBack.classList.contains("blur-feedback-error")) {
		emailFeedBack.classList.remove("blur-feedback-error")
	}
	emailFeedBack.style.borderColor = "blue"
	emailFeedBack.classList.add("focus-feedback")
})
email.addEventListener("blur" , event => {
	const emailFeedBack = selector(".email")
	try {
		const emailValue = validateEmail(email.value.trim())
		if ( emailValue.value != null ) {
			emailFeedBack.style.borderColor = "green"
		}else {
			emailFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		emailFeedBack.textContent = `${error.message} `
		emailFeedBack.classList.add("blur-feedback-error")
	}
})

housing.addEventListener("change", () => {
	if(program.value === "Web Development" && housing.value === "yes") {
		cost.value = "#150,000"
		duration.value = "4 Months"
		courses.value = "HTML 5, CSS 3, Bootstrap"
	}else if (program.value === "Web Development" && housing.value === "no"){
		cost.value = "#100,000"
		duration.value = "4 Months"
		courses.value = "HTML 5, CSS 3, Bootstrap"
	}else if(program.value === "Data Science" && housing.value === "yes") {
		cost.value = "#130,000"
		duration.value = "3 Months"
		courses.value = "Python etc."
	}else if(program.value === "Data Science" && housing.value === "no") {
		cost.value = "#80,000"
		duration.value = "3 Months"
		courses.value = "Python etc."
	}else if(program.value === "Mobile Development" && housing.value === "yes") {
		cost.value = "#230,000"
		duration.value = "6 Months"
		courses.value = "Kotlin, React Native, Flutter"
	}else if(program.value === "Mobile Development" && housing.value === "no") {
		cost.value = "#180,000"
		duration.value = "6 Months"
		courses.value = "Kotlin, React Native, Flutter"
	}else if(program.value === "Java & .NET" && housing.value === "yes") {
		cost.value = "#230,000"
		duration.value = "6 Months"
		courses.value = "Java etc"
	}else if(program.value === "Java & .NET" && housing.value === "no") {
		cost.value = "#180,000"
		duration.value = "6 Months"
		courses.value = "Java etc."
	}else {
		cost.value = "Select a program"
		duration.value = "Select a program"
		courses.value = "Select a program"
	}
})

program.addEventListener("change", () => {
	if(program.value === "Web Development" && housing.value === "yes") {
		cost.value = "#150,000"
		duration.value = "4 Months"
		courses.value = "HTML 5, CSS 3, Bootstrap"
	}else if (program.value === "Web Development" && housing.value === "no"){
		cost.value = "#100,000"
		duration.value = "4 Months"
		courses.value = "HTML 5, CSS 3, Bootstrap"
	}else if(program.value === "Data Science" && housing.value === "yes") {
		cost.value = "#130,000"
		duration.value = "3 Months"
		courses.value = "Python etc."
	}else if(program.value === "Data Science" && housing.value === "no") {
		cost.value = "#80,000"
		duration.value = "3 Months"
		courses.value = "Python etc."
	}else if(program.value === "Mobile Development" && housing.value === "yes") {
		cost.value = "#230,000"
		duration.value = "6 Months"
		courses.value = "Kotlin, React Native, Flutter"
	}else if(program.value === "Mobile Development" && housing.value === "no") {
		cost.value = "#180,000"
		duration.value = "6 Months"
		courses.value = "Kotlin, React Native, Flutter"
	}else if(program.value === "Java & .NET" && housing.value === "yes") {
		cost.value = "#230,000"
		duration.value = "6 Months"
		courses.value = "Java etc"
	}else if(program.value === "Java & .NET" && housing.value === "no") {
		cost.value = "#180,000"
		duration.value = "6 Months"
		courses.value = "Java etc."
	}else {
		cost.value = "Select a housing option"
		duration.value = "Select a housing option"
		courses.value = "Select a housing option"
	}
})