/* Validation for Subscription Form */
function formValidation(){

var name = document.subscription.name;
var email = document.subscription.email;
var phone = document.subscription.phone;
var address = document.subscription.address;
var postalcode = document.subscription.postalcode;	
var salutation = document.subscription.salutation;
var maxinebox = document.subscription.maxinebox;

if (checkName(name)){
	if(checkEmail(email)){
		if(checkPhone(phone,8)){
			if(checkPostalCode(postalcode)){
				if(checkSalutation(salutation)){
					if(checkAddress(address)){
						if (noOfUncheckedBoxes(maxinebox)){
							return true;	
						}
						
					}
				}
			}
		}
	}
}

return false;
}

function checkName(name){
	var letters = /^[A-Za-z]+$/;
	
	if(name.value.match(letters)){
	return true;
	} 
	else {
	alert('Please enter alphabet characters only for name!');
	name.focus();
	return false;
	}
}

function checkEmail(email){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
		return true;
	}
	else{
		alert('Please enter a valid email address!');
		email.focus();
		return false;
	}
}

function checkPhone(phone, maxLength){
	if(phone.value.length == 0 || phone.value.length != maxLength){
		alert("Please enter a valid " +maxLength+ "-digit phone number!");
		phone.focus();
		return false;		
	}
	return true;
}

function checkAddress(address){
	if(address.value.length == 0){
		alert('Please enter a valid address!');
		address.focus();
		return false;
	} else {
		return true;
	}
}

function checkPostalCode(postalcode){
	var numbers = /^[0-9]+$/;
	
	if(postalcode.value.match(numbers) && postalcode.value.length == 6){
		return true;
	} else {
		alert('Postal Code must be numeric characters & 6-digit only.');
		postalcode.focus();
		return false;
	}
	
}

function checkSalutation(salutation){
	if (salutation.value == "Default"){
		alert('Please select your salutation');
		salutation.focus();
		return false;
	} else {
		return true;
	}
}

function noOfUncheckedBoxes(maxinebox){
	
	var n = 0;
	
	for(var i = 0; i<maxinebox.length; i++){
		if(!maxinebox[i].checked){
			n += 1;
		}
	}
	
	if(n==3){
		alert('Please check at least 1 box!');
		return false;
	} else{
		return true;	
	}
}

/*--------------------------------------*/
/* Contact Form JS */

/* showPopUpForm function displays form */
function showPopUpForm() {
	document.getElementById('popupForm').style.display = "block";
}

/* hidePopUpForm function hides the form (when closed) */
function hidePopUpForm(){
	document.getElementById('popupForm').style.display = "none";
}

/* Validation for ContactForm */
function checkContactForm(){

var name = document.contactForm.name;
var email = document.contactForm.email;
var phone = document.contactForm.phone;
var message = document.contactForm.message;


if (checkName(name)){
	if(checkEmail(email)){
		if(checkPhone(phone,8)){
			if(checkMsg(message)){
					return true;
			}
		}
	}
}

return false;
}

function checkMsg(message){
	if(message.value != ""){
		return true;		
	} else {
		alert('Please enter your message!');
		message.focus();
		return false;	
	}
}

