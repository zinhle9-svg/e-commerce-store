import React from "react";
import { iphone16pro, iphone11, macbook, watchseries7 } from "../images";

function BagItems () {
return(
 <>
 <div className="bg-red-500 text-white text-4xl p-4">
 <p>Check your Bag Items</p>
 </div>
 <div>
  <img src={iphone16pro}></img>
  </div>
  <div>
<p>Apple iphone 16pro</p>
</div>
<div>
<p>color</p>
</div>
<div>
<p>short description</p>
</div>
<div>
<p>stars</p>
</div>
<div>
<p>price</p>
 </div>
 </>
)
}


export default BagItems;