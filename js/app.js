import { EventAPI } from "./EventAPI.js";
import { UI } from "./ui.js";


const api = new EventAPI();
const ui = new UI(); 

// Listener for the submit button
document.querySelector("#searchBtn").addEventListener('click', (e) => {
    e.preventDefault();

    //get values 
    const city = document.querySelector("#city").value; 
    const category = document.querySelector("#category").value; 
    
    //VALIDATE: 
    if(city !== ''){
        console.log("success");
        //QUERY
        api.getEventsByCityAndCategory(city, category)
            .then(events => {
                const eventsLength = events.events.length;
                const eventsList = events.events; 

                if(eventsLength > 0){
                    //Show the event cards : 
                    ui.displayEvents(eventsList);
                    
                    //Add event listeners to show TOASTS for the new cards: 
                    var toastHTML = '<button class="btn-flat white-text toast-action">Added to favourites</button>';
                    $('.add-to-favorites').click(function () {
                        Materialize.toast(toastHTML, 2000, 'rounded');
                        var eventName = $(this)[0].attributes.event_name.value; 
                        var eventURL = $(this)[0].attributes.event_URL.value; 
                        ui.addToFavorites(eventName, eventURL);  
                    });
                    //MATERIALBOX
                }else{
                    ui.displayErrorMessage("No events found");    
                }
            });
    }else{
       
       //TO BE DONE IN FRONT END: 
        console.log("Empty City Input");
        
        //Handle ERROR MESSAGE:
        ui.displayErrorMessage("Please, fill in the name of the city.");
    }
    
});

    //DELETE LIKED EVENT FROM FAVORITES
    //Event delegation
    $('.favorites_to_delete').on('click', '.delete', function (e) {
        $(this).parent().parent().parent().remove();  
        let event_id = $(this).attr("event_id");  
       
        //remove from favs array: 
        ui.removeFromFavorites(event_id); 
        e.preventDefault();
    });


