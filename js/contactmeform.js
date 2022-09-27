
function validate(e) {
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}

	return true;

}

function resetForm(e) {

	// Confirm that the user wants to reset the form.
	if (confirm('Clear form?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("fullname").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

function formHasErrors() {
	let errorFlag = false;

	//  Check full name is not blank.
	let fullNameTextField = document.getElementById("fullname");
	if (fullNameTextField.value == "") {
		document.getElementById("fullname_error").style.display = "block";

		if (!errorFlag) {
			fullNameTextField.focus();
			fullNameTextField.select();
		}

		errorFlag = true;
	}

	// Check Phone
	let phoneTextField = document.getElementById("phone");
	if (phoneTextField.value == "") {
		document.getElementById("phone_error").style.display = "block";

		if (!errorFlag) {
			phoneTextField.focus();
			phoneTextField.select();
		}

			errorFlag = true;
		}
	else if (isNaN(phoneTextField.value)) {
		document.getElementById("phoneformat_error").style.display = "block";

		if (!errorFlag) {
			phoneTextField.focus();
			phoneTextField.select();
		}

		errorFlag = true;
	}

	// Check email
	let emailregex = new RegExp(/\S+@\S+\.\S+/);
	let emailValue = document.getElementById("email").value;
	let emailField = document.getElementById("email");

	if (emailValue == "") {
		document.getElementById("email_error").style.display = "block";

		if (!errorFlag) {
			emailField.focus();
		}

		errorFlag = true;
	}
	else if (!emailregex.test(emailValue)) {
		document.getElementById("emailformat_error").style.display = "block";

		if (!errorFlag) {
			emailField.focus();
			emailField.select();
		}

		errorFlag = true;
	}

	// Check Message is not blank
	let messageTextField = document.getElementById("message");
	if (messageTextField.value == "") {
		document.getElementById("message_error").style.display = "block";

		if (!errorFlag) {
			messageTextField.focus();
			messageTextField.select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("infoerror");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	document.getElementById("fullname").focus();

	//Hide all errors	
	hideErrors();

	// Add event listener for Purchase Items button.
	document.getElementById("infoform").addEventListener("submit", validate);

	// Add event listener for Clear Order button.
	//document.getElementById("infoform").reset();
	document.getElementById("infoform").addEventListener("reset", resetForm);

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
