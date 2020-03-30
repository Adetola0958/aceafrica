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

// PROGRAM
let programArr = new Array("Web Development", "Data Science", "Mobile Development", "Java & .NET")

//HOUSING
let optionsArr = new Array("Yes", "No")


// COST
let webDevCost = new Array("#100,000", "#150,000")
let datSciCost = new Array("#80,000", "#130,000")
let mobDevCost = new Array("#180,000", "#230,000")
let javCost    = new Array("#180,000", "#230,000")

housing.addEventListener("change", () => {
	if(housing.value === "yes") {
		cost.value = "#100,000"
	}else if (housing.value === "no"){
		cost.value = "#80,000"
	}
})