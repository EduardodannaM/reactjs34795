import { BsCart2 } from "react-icons/bs";
import Button from "./Button";



export const Navbar = ({onClick}) => {
    return <header className="header">
    <img
      src="./logoreactjs.png"
      alt="Logo del ecommerce"
      className="headerLogo"
    />
    <div className="headerNav">
      <a href= "../App.js"><h1>RayBan</h1></a>
      <a href= "../App.js"><h1>Oakley</h1></a>
      <a href= "../App.js"><h1>Costa</h1></a>
    </div>
    <div className="headerCarrito">
      <Button onClick={onClick}><BsCart2 /></Button>
    </div>
  </header>
}

