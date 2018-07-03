//VALIDATE REGISTRATION FORM 
// FROM : https://jqueryvalidation.org/
console.log("found: login-form ");

$("#login-form").validate({
    rules: {
        email: {
            required: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 5
        },
    },
    //For custom messages
    messages: {
        email: {
            required: "Email is required",
            minlength: "Enter at least 5 characters"
        },
        password: {
            required: "Password is required",
            minlength: "Password should be at least 5 characters"
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