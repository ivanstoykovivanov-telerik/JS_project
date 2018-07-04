//VALIDATE SEARCH FORM 
// FROM : https://jqueryvalidation.org/
console.log("found: search-form ");

$("#login-form").validate({
    rules: {
        city: {
            required: true,
            minlength: 2
        }
    },
    //For custom messages
    messages: {
        email: {
            required: "City is required",
            minlength: "Enter at least 2 characters"
        },
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