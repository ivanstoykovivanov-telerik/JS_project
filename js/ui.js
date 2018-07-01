import { EventAPI } from "./EventAPI.js";

export class  UI{
    
    constructor(){
        this.EventAPI = new EventAPI(); 
        this.init();
    }

    init(){
        this.categoriesSelect = document.querySelector("#category"); 
        this.displayCategories();
        this.eventsHTML = document.querySelector("#eventCards"); 
    }

    displayCategories(){
        const categoriesList = this.EventAPI.getCategories()
            .then(categories => {
                const ctgList = categories.categories;
                
                //APPEND CATEGORIES FROM EVENTBRITE API TO SELECT DROPDOWN 
                ctgList.forEach(category => {
                    const option = document.createElement('option'); 
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name))
                    this.categoriesSelect.appendChild(option);
                });
                
                // console.log(this.categoriesSelect);
                // console.log(categories.categories[0].name);
                // console.log(categories.categories[0].id);
            })
            .catch(err => console.log(err));
    }

    displayEvents(events){
        console.log("In method: ");
        console.log(events);
        
        let html = "";
        events.forEach(event => {
            html += `
                <div class="col l4 m6 s12">
                    <div class="card purple lighten-4">
                        <div class="card-image">
                            <img class="materialboxed"  
                                src="${event.logo !== null ? event.logo.url : ''}" 
                                width="100%" data-caption="Info goes here">
                            <a class="btn-floating halfway-fab waves-effect waves-light red tooltipped" 
                                data-position="bottom" data-tooltip="Add to favourites">
                                <i class="material-icons add-to-favorites"> favorite_border </i>
                            </a>
                        </div>
                        <div class="card-content">
                            <h5 class="black-text">
                                ${event.name.text}
                            </h5>
                            <h6>
                                Date: ${event.start.local}
                            </h6>
                            <p>
                                ${event.description.text.substring(0,200)}...
                            </p>
                            <h6>$5.00</h6>
                        </div>
                        <div class="card-action">
                            <div class="center-align">
                                <a class="btn orange center-align" target="_blank" href="${event.url}">Buy ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });
        this.eventsHTML.innerHTML = html
    }

    displayErrorMessage(content, id){
            const div = document.createElement('div');
            div.className = "red";
            
            const textNode = document.createTextNode(content); 
            div.appendChild(textNode);
            
            //insert into DOM tree
            const parentDiv = document.querySelector(id);
            parentDiv.appendChild(div); 

            //Remove after 3 seconds
            setTimeout(() => {
                this.removeMessage();
            }, 3000);
    }

    removeMessage(){
        //remove the error message        
    }
}



