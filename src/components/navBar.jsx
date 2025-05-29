import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

function NavBar () {
 const [ open, setOpen] = useState(false);
//  const [] = useState()

 const handleOpenMenu = () => {
  setOpen(!open);

 }
 
 return(
  <nav>
   <div> 
   <button onClick={handleOpenMenu}><IoIosMenu size={24}/></button>
   </div>
   <ul className={`mt-2 space-y-2 md:flex md:space-x-6 md:space-y-0 ${open ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link to="/Home" className="block px-2 py-1 hover:bg-gray-700 rounded">Home</Link>
        </li>
        <li>
          <Link to="/BagItems" className="block px-2 py-1 hover:bg-gray-700 rounded">Bag</Link>
        </li>
        <li>
          <Link to="/Navbar" className="block px-2 py-1 hover:bg-gray-700 rounded">Navbar</Link>
        </li>
      </ul>
  </nav>
 )
}

export default NavBar; 

