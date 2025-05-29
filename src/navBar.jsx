import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";


function NavBar () {
 const [ open, setOpen] = useState(false);
 const [ bagopen, setBagopen] = useState(false);
 const [ home, setHome] = useState(false);

 const handleOpenMenu = () => {
  setOpen(!open);

 }
  const handleBag = () => {
  setBagopen(!bagopen);

 }
  const handleHome = () => {
  setHome(!home);

 }
 
 
 return(
  <>
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
    
      </ul>
  </nav>
  <nav>
    <div>
    <button onClick={handleBag}><IoBagHandle size={24}/></button>
   </div>
   <ul className={`mt-2 space-y-2 md:flex md:space-x-6 md:space-y-0 ${bagopen ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link to="/Home" className="block px-2 py-1 hover:bg-gray-700 rounded">Bag</Link>
        </li>
        </ul>

  </nav>
    <nav>
    <div>
    <button onClick={handleHome}><FaHome size={24}/></button>
   </div>
   <ul className={`mt-2 space-y-2 md:flex md:space-x-6 md:space-y-0 ${home ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link to="/Home" className="block px-2 py-1 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        </ul>

  </nav>
  </>
 )
}

export default NavBar; 

