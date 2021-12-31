import { writable,type Writable } from "svelte/store";

type prod={
    id:number,
    name:string,
    price:number
}[]

export const Products:Writable<prod>=writable([]);

let data:prod=[
    {
        id:1,
        name:'Plastic Chair',
        price:450,
    },
    {
        id:2,
        name:'Bean Bag',
        price:300,
    },
    {
        id:1,
        name:'Luggage Bag',
        price:725.50,
    }
]

Products.update(datas=>datas=data)