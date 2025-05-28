import React from "react";
import { iphone16pro, iphone11, macbook, watchseries7 } from "../images";

function BagItems () {
const items = 
  [ {
    image: iphone16pro,
    phone: "Apple iphone 16 pro",
    color: "black",
    description: "128GB great camera",
    stars: "5stars",  //will check image for actual stars
    price: "R50000"
  },
]
return(
<div className="container mx-auto px-4 py-8 " >
 <div className="text-4xl margin-6">
 <p>Check your Bag Items</p>
 </div>
<div className="flex items-start gap-6 border-b border-gray-300 py-6"{">"}
  <img src={iphone16pro} className="w-60"></img>
  <div className="space-y-2">
            <h3 className="text-xl font-semibold">{item.phone}</h3>
            <p className="text-gray-600">{item.color}</p>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-yellow-500">{item.stars}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
          </div>
         
 




 
 </div>
);
}


export default BagItems;