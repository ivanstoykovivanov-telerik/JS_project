export class EventAPI{
   
    constructor(){
       this.auth_token = 'JEAFOUYZOQRHEN4RKL32'; 
       this.orderByDate = 'date';
       this.orderByBest = 'best'
       //this.city = city; 
   }
   

    async getCategories(){
       //query the api 
       const returnedCategories = await fetch(`
            https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`); 

        //
        const categories = await returnedCategories.json();   //as json 
        return categories ; 

    }

    async getEventsByCityAndCategory(city, category){
        const eventsR = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${city}&sort_by=date&categories=${category}&token=${this.auth_token}`);
        const events = await eventsR.json(); 

        return events; 
    }

}   