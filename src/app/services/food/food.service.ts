import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string):Foods[]{
    return tag=='All'?
    this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
    
  }
  getAllTag():Tag[]{
    return[
      {name:'All',count:10},
      {name: 'FastFood',count:2},
      {name:'Lunch',count:4},
      {name:'Pizza',count:2},
      {name:'Burger', count:2}
    ];
    
  }


  
  getAll():Foods[]{
    return[
      {
     id:1,
     name:'chicken biryani',
     cookTime:'50-60',
     price:10,
     favorite:false,
     origins:['italy'],
     star:4.5,
     imageUrl:'assets/image1.jpg'
      },
      {
        id:2,
        name:'chicken  dum biryani',
        cookTime:'40-50',
        price:20,
        favorite:false,
        origins:['italy','indian'],
        star:.5,
        imageUrl:'assets/image2.jpg'
         },
         {
          id:3,
          name:'egg biryani',
          cookTime:'10-30',
          price:5,
          favorite:false,
          origins:['italy'],
          star:4.5,
          imageUrl:'assets/image3.jpg'
           },
           {
            id:4,
            name:'masala egg biryani',
            cookTime:'10-20',
            price:15,
            favorite:false,
            origins:['italy','asia'],
            star:4.5,
            imageUrl:'assets/image4.jpg'
             },
             {
              id:5,
              name:'veg Noodles',
              cookTime:'10-15',
              price:10,
              favorite:false,
              origins:['italy' ,'indian'],
              star:4.5,
              imageUrl:'assets/image5.jpg'
               },
               {
                id:6,
                name:'egg Noodles',
                cookTime:'10-20',
                price:13,
                favorite:false,
                origins:['italy'],
                star:4.5,
                imageUrl:'assets/image6.jpg'
                 },
                 {
                  id:7,
                  name:'veg cheese pizza',
                  cookTime:'10-20',
                  price:15,
                  favorite:false,
                  origins:['italy'],
                  star:4.5,
                  imageUrl:'assets/image7.jpg'
                   },
                   {
                    id:8,
                    name:'chicken pizza',
                    cookTime:'10-20',
                    price:20,
                    favorite:false,
                    origins:['italy','asian','indian'],
                    star:4.5,
                    imageUrl:'assets/image8.jpg'
                     },
                     {
                      id:9,
                      name:'cheese burgur',
                      cookTime:'15-20',
                      price:10,
                      favorite:false,
                      origins:['italy','chineese'],
                      star:4.5,
                      imageUrl:'assets/image9.jpg'
                       },
                       {
                        id:10,
                        name:'burgur',
                        cookTime:'10-20',
                        price:10,
                        favorite:false,
                        origins:['italy'],
                        star:4.5,
                        imageUrl:'assets/image10.jpg'
                         }
    ]
  }
}
