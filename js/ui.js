import { EventAPI } from "./EventAPI.js";

export class  UI{
    
    constructor(){
        this.EventAPI = new EventAPI(); 
        this.categoriesSelect = document.querySelector("#category"); 
        this.init();
    }

    init(){
        this.displayCategories();
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



//THIS MODULE GETS INFO FROM USER:


// export const   cityInput = document.querySelector("#city"), 
//                dateInput = document.querySelector("#date"), 
//                timeInput = document.querySelector("#time");


