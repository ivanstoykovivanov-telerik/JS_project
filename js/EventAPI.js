export class EventAPI{
   
    constructor(){
       this.auth_token = 'JEAFOUYZOQRHEN4RKL32'; 
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

   //find events methods: 
//    queryAPI(){
//     const url = await fetch(`url`);
//     const res = await url.json();
//     return res;
//    } 
}   