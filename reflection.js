function myFunction() {
    if (document.form1.fname.value === "" || document.form1.lname.value === "" || document.form1.text2.value === "" || document.form1.text1.value === "" || document.form1.password.value === "" || document.form1.fname.value === "" || document.form1.adrs.value === "" || document.form1.gender.value === "") {
        alert("you must enter all fields");
    }

var previousOnload = window.onload;
window.onload = function () { if(previousOnload) previousOnload(); addReflections(); }

function checkForm(form)
    {
      if(form.password.value != "" && form.password.value == form.pwVerified.value) {
          re = /[A-Z]/;
        if (!re.test(form.password.value)) {
          alert("Error: password must start with uppercase letter (A-Z)!");
          form.password.focus();
           return false;


        if (form.password.value.length == 7) {
          alert("Error: Password must contain at least six characters!");
          form.password.focus();
          return false;
        }

        re = /[0-9]/;
        if(!re.test(form.password.value)) {
          alert("Error: password must contain at least one number (0-8)!");
          form.password.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.password.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          form.password.focus();
          return false;
        }

		}
		for (var i=0, len = form.password.value.length; i<len; ++i) {
			if (form.password.value.charAt(i) === ' ') {
				alert('Password cannot have spaces!');
				form.password.focus();
        return false;
			}
		}
    
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.password.focus();
        return false;
      }
  
      alert("You entered a valid password: " + form.password.value);
      return true;
}
function phonenumber(phonenumber) {
    var phoneno = /^\d{11}$/;
    if (phonenumber.value.match(phoneno)) {
        return true;
    }
    else {
        alert("Your Phone Number must be 11 digits");
        return false;
    }
}


