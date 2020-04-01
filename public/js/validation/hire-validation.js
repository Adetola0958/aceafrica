import {validateNames, validateAmount, validateDuration} from "./validate.js"

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

const organizationName = selector("#organizationName")
const role = selector("#role")
const total = selector("#total")
const type = selector("#type")
const target = selector("#target")
const budget = selector("#budget")
const duration = selector("#duration")
const businessName = selector("#businessName")
const location = selector("#location")
const submit1 = selector("#submit1")
const submit2 = selector("#submit2")


// VALIDATION FOR HIRE
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
		orgFeedBack.classList.add("blur-feedback-error")
	}
})

role.addEventListener("focus" , event => {
	const roleFeedBack = selector(".role")
	if (roleFeedBack.classList.contains("blur-feedback-error")) {
		roleFeedBack.classList.remove("blur-feedback-error")
	}
	roleFeedBack.style.borderColor = "blue"
	roleFeedBack.classList.add("focus-feedback")
})
role.addEventListener("blur" , event => {
	const roleFeedBack = selector(".role")
	try {
		const roleValue = validateNames(role.value.trim())
		if ( roleValue.value != null ) {
			roleFeedBack.style.borderColor = "green"
		}else {
			roleFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		roleFeedBack.textContent = `${error.message} `
		roleFeedBack.classList.add("blur-feedback-error")
	}
})

total.addEventListener("focus" , event => {
	const totalFeedBack = selector(".total")
	if (totalFeedBack.classList.contains("blur-feedback-error")) {
		totalFeedBack.classList.remove("blur-feedback-error")
	}
	totalFeedBack.style.borderColor = "blue"
	totalFeedBack.classList.add("focus-feedback")
})
total.addEventListener("blur" , event => {
	const totalFeedBack = selector(".total")
	try {
		const totalValue = validateAmount(total.value.trim())
		if ( totalValue.value != null ) {
			totalFeedBack.style.borderColor = "green"
		}else {
			totalFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		totalFeedBack.textContent = `${error.message} `
		totalFeedBack.classList.add("blur-feedback-error")
	}
})

submit1.addEventListener("click", event => {
	const nameValue     = validateNames(organizationName.value.trim()).value
	const roleValue     = validateNames(role.value.trim()).value
	const totalValue    = validateAmount(total.value.trim()).value

	try{
		if(nameValue != null && roleValue != null && totalValue != null) {
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


// VALIDATION FOR NEEDING AN APP
type.addEventListener("focus" , event => {
	const typeFeedBack = selector(".type")
	if (typeFeedBack.classList.contains("blur-feedback-error")) {
		typeFeedBack.classList.remove("blur-feedback-error")
	}
	typeFeedBack.style.borderColor = "blue"
	typeFeedBack.classList.add("focus-feedback")
})
type.addEventListener("blur" , event => {
	const typeFeedBack = selector(".type")
	try {
		const typeValue = validateNames(type.value.trim())
		if ( typeValue.value != null ) {
			typeFeedBack.style.borderColor = "green"
		}else {
			typeFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		typeFeedBack.textContent = `${error.message} `
		typeFeedBack.classList.add("blur-feedback-error")
	}
})

target.addEventListener("focus" , event => {
	const targetFeedBack = selector(".target")
	if (targetFeedBack.classList.contains("blur-feedback-error")) {
		targetFeedBack.classList.remove("blur-feedback-error")
	}
	targetFeedBack.style.borderColor = "blue"
	targetFeedBack.classList.add("focus-feedback")
})
target.addEventListener("blur" , event => {
	const targetFeedBack = selector(".target")
	try {
		const targetValue = validateNames(target.value.trim())
		if ( targetValue.value != null ) {
			targetFeedBack.style.borderColor = "green"
		}else {
			targetFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		targetFeedBack.textContent = `${error.message} `
		targetFeedBack.classList.add("blur-feedback-error")
	}
})

budget.addEventListener("focus" , event => {
	const budgetFeedBack = selector(".budget")
	if (budgetFeedBack.classList.contains("blur-feedback-error")) {
		budgetFeedBack.classList.remove("blur-feedback-error")
	}
	budgetFeedBack.style.borderColor = "blue"
	budgetFeedBack.classList.add("focus-feedback")
})
budget.addEventListener("blur" , event => {
	const budgetFeedBack = selector(".budget")
	try {
		const budgetValue = validateAmount(budget.value.trim())
		if ( budgetValue.value != null ) {
			budgetFeedBack.style.borderColor = "green"
		}else {
			budgetFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		budgetFeedBack.textContent = `${error.message} `
		budgetFeedBack.classList.add("blur-feedback-error")
	}
})

businessName.addEventListener("focus" , event => {
	const nameFeedBack = selector(".new-name")
	if (nameFeedBack.classList.contains("blur-feedback-error")) {
		nameFeedBack.classList.remove("blur-feedback-error")
	}
	nameFeedBack.style.borderColor = "blue"
	nameFeedBack.classList.add("focus-feedback")
})
businessName.addEventListener("blur" , event => {
	const nameFeedBack = selector(".new-name")
	try {
		const nameValue = validateNames(businessName.value.trim())
		if ( nameValue.value != null ) {
			nameFeedBack.style.borderColor = "green"
		}else {
			nameFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		nameFeedBack.textContent = `${error.message} `
		nameFeedBack.classList.add("blur-feedback-error")
	}
})

location.addEventListener("focus" , event => {
	const locationFeedBack = selector(".location")
	if (locationFeedBack.classList.contains("blur-feedback-error")) {
		locationFeedBack.classList.remove("blur-feedback-error")
	}
	locationFeedBack.style.borderColor = "blue"
	locationFeedBack.classList.add("focus-feedback")
})
location.addEventListener("blur" , event => {
	const locationFeedBack = selector(".location")
	try {
		const locationValue = validateNames(location.value.trim())
		if ( locationValue.value != null ) {
			locationFeedBack.style.borderColor = "green"
		}else {
			locationFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		locationFeedBack.textContent = `${error.message} `
		locationFeedBack.classList.add("blur-feedback-error")
	}
})

duration.addEventListener("focus" , event => {
	const durationFeedBack = selector(".duration")
	if (durationFeedBack.classList.contains("blur-feedback-error")) {
		durationFeedBack.classList.remove("blur-feedback-error")
	}
	durationFeedBack.style.borderColor = "blue"
	durationFeedBack.classList.add("focus-feedback")
})
duration.addEventListener("blur" , event => {
	const durationFeedBack = selector(".duration")
	try {
		const durationValue = validateDuration(duration.value.trim())
		if ( durationValue.value != null ) {
			durationFeedBack.style.borderColor = "green"
		}else {
			durationFeedBack.style.borderColor = "red"
		}
	}catch(error) {
		durationFeedBack.textContent = `${error.message} `
		durationFeedBack.classList.add("blur-feedback-error")
	}
})

submit2.addEventListener("click", event => {
	const typeValue     = validateNames(type.value.trim()).value
	const targetValue   = validateNames(target.value.trim()).value
	const budgetValue   = validateAmount(budget.value.trim()).value
	const nameValue     = validateNames(businessName.value.trim()).value
	const locationValue = validateNames(location.value.trim()).value
	const durationValue = validateDuration(duration.value.trim()).value

	try{
		if(typeValue != null && targetValue != null && budgetValue != null && nameValue != null && locationValue != null && durationValue != null) {
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