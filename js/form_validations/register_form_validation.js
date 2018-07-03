//VALIDATE REGISTRATION FORM 
// FROM : https://jqueryvalidation.org/
console.log("found: register-form ");

$("#register-form").validate({
    rules: {
        username: {
            required: true,
            minlength: 5
        },
        email: {
            required: true,
            email: true,
            minlength: 10
        },  
        password: {
            required: true,
            minlength: 5
        },
        rpassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        crole: "required",
        ccomment: {
            required: true,
            minlength: 15
        },
        cgender: "required",
        cagree: "required",
    },
    //For custom messages
    messages: {
        username: {
            required: "Username is required",
            minlength: "Enter at least 5 characters"
        },
        email: {
            required: "Email addres is required ",
            minlength: "Enter at least 10 characters"
        }
    },
    errorClass: "invalid",
    validClass: "valid", 
    errorElement: 'div',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});