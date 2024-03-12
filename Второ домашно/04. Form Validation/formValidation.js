function validate() {
    $('#company').on('change', showHideCompany);

    $('#submit').on('click', function(ev) {
        ev.preventDefault();
		
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let pass1 = document.getElementById("password");
        let pass2 = document.getElementById("confirm-password");
        let company = document.getElementById("company");
        let valid = document.getElementById("valid");

        $('#valid').css('display', 'block');

        
       if(!usernameRegex.test(username.value)){
            valid.innerText = "Username not valid";
        }
        else if(!emailRegex.test(email.value)){
            valid.innerText = "E-mail not valid";
        }
        else if(!passwordRegex.test(pass1.value)){
            valid.innerText = "Password not valid";
            
        }
       else if(pass1.value != pass2.value){
            valid.innerText = "Passwords are not the same";
        }
        else if(!companyNumberRegex.test(companyNumber.value)){
            valid.innerText = "Company number not valid";
        }
        else if(usernameRegex.test(username.value)&& (emailRegex.test(email.value))&&(passwordRegex.test(pass1.value))&&(pass1.value == pass2.value)&&(companyNumberRegex.test(company.value))){
            valid.innerText = "Valid!";
        }



    });

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}