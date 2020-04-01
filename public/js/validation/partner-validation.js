import {validateNames, validateMobile} from "./validate.js"

$(document).ready(function() {
    $('input').on('focusin', function(){
        $(this).parent().find('label').addClass("active")
    })
    $('input').on('focusout', function(){
        if(!this.value){
            $(this).parent().find('label').addClass("active")  
        }  
    })
})

let selector = e => document.querySelector(e)

const organizationName = selector("#organizationName")
const nature = selector("#nature")
const telephone = selector("#telephone")
const describe  = selector("#describe")

organizationName.addEventListener("focus" , event => {
	const orgFeedBack = selector(".name")
	if (orgFeedBack.classList.contains("blur-feedback-error")) {
		orgFeedBack.classList.remove("blur-feedback-error")
	}
	orgFeedBack.style.borderColor = "blue"
	orgFeedBack.classList.add("focus-feedback")
})
organizationName.addEventListener("blur" , event => {
	const orgFeedBack = selector(".name")
	try {
		const nameValue = validateNames(organizationName.value.trim())
		if ( nameValue.value != null ) {
			orgFeedBack.style.borderColor = "green"
		}else {
			orgFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		orgFeedBack.textContent = `${error.message} `
		orglFeedBack.classList.add("blur-feedback-error")
	}
})

nature.addEventListener("focus" , event => {
	const natureFeedBack = selector(".nature")
	if (natureFeedBack.classList.contains("blur-feedback-error")) {
		natureFeedBack.classList.remove("blur-feedback-error")
	}
	natureFeedBack.style.borderColor = "blue"
	natureFeedBack.classList.add("focus-feedback")
})
nature.addEventListener("blur" , event => {
	const natureFeedBack = selector(".nature")
	try {
		const natureValue = validateNames(nature.value.trim())
		if ( natureValue.value != null ) {
			natureFeedBack.style.borderColor = "green"
		}else {
			natureFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		natureFeedBack.textContent = `${error.message} `
		natureFeedBack.classList.add("blur-feedback-error")
	}
})

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

submit.addEventListener("click", event => {
	const nameValue   = validateNames(organizationName.value.trim()).value
	const natureValue = validateNames(nature.value.trim()).value
	const telValue    = validateMobile(telephone.value.trim()).value

	try{
		if(nameValue != null && natureValue != null && telValue != null && desValue != null) {
			const errorArea = selector(".submit")
		    errorArea.textContent = "Loading..."
		}else {
			throw {
				name : "WrongFormValue" , 
				message : "Please , fill the fields correctly"
			}
			event.preventDefault()
		}
	}catch(error) {
	    const errorArea = selector(".submit")
		errorArea.textContent = error.message 
		event.preventDefault()
	}
})