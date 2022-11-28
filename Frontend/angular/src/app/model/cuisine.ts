export class Cuisine
{
    cuisineId:string;
    cuisineName:string;
    cuisineDescription:string;
    price:number;

    constructor(cuisineId:any, cuisineName:any, cuisineDescription:any, price:any)
    {   
        this.cuisineId = cuisineId;
        this.cuisineName = cuisineName;
        this.cuisineDescription = cuisineDescription;
        this.price = price;
    }
}