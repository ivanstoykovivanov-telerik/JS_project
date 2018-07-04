
//INITIALIZERS FOR MATERIALIZE.css


$(document).ready(function () {

    // SIDENAV for mobile
    $('.button-collapse').sideNav();

    //Initialize AUTOCOMPLETE:
    //TODO make a request to an API for some data of cities and put it here : 
    $('.autocomplete').autocomplete({
        data: {
            "Sofia": null,
            "Los Angeles": null,
            "London": null,
            "Moscow": null,
            "New York": null,
            "Plovdiv": null,
            "Berlin": null,
            "Barcelona": null,
        },
        limit: 10
    })

    //Initialize SELECT
    $('select').material_select();

    // Initialize DATEPICKER : 
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        closeOnSelect: true
    });

    // Initialize TIMEPICKER : 
    $('.timepicker').pickatime({
        dafault: "now",
        twelvehour: true,
        autoclose: true
    });

    //Initialize TOAST
    //The TOAST button appearing when the  heart icon is clicked
    var toastHTML = '<button class="btn-flat white-text toast-action">Added to favourites</button>';
    $('.add-to-favorites').click(function () {
        Materialize.toast(toastHTML, 2000, 'rounded');
    });

    //Initialize TOOLTIP
    $('.tooltipped').tooltip({
        exitDelay: 0,
        enterDelay: 4000,
        margin: 10
    });

    // Initialize MODAL : 
    $('.modal').modal({
        dismissable: true,
        ready: function (modal, trigger) {
            console.log("Modal opened", modal, trigger);
        }
    });

});