import { useState,useContext } from "react";
import { Context } from "../../context/context";
import Search from "./Search.js";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import './Header.css';


const Header=()=>{
    const navig=useNavigate();
    const [FirstSearch,setSearch]=useState(false);
    const {cartCount} = useContext(Context);
    const [Sidebar,setSidebar] = useState(false);
    return(
<>
    <div className="header-offer">
        <p>For bulk order contact us</p>
    </div>
            <header className="main-header">
                <div className="header-content-responsive">
                    <div className="header-left-hamburger">
                        <GiHamburgerMenu name="menu-open" onClick={()=>setSidebar(true)}/>
                        {Sidebar && <div className="sidebar-slider">
                            <GrClose name="menu-close" onClick={()=>{setSidebar(false)}}/>
                            <ul className="hamburger-items">
                                <li><Link to="/" style={{textDecoration:"none",color:"#282828"}} onClick={()=>{setSidebar(false)}}>Home</Link></li>
                                <li><Link to="/category" style={{textDecoration:"none",color:"#282828"}} onClick={()=>{setSidebar(false)}}>Categories</Link></li>
                                <li><Link to="/about" style={{textDecoration:"none",color:"#282828"}} onClick={()=>{setSidebar(false)}}>About</Link></li>
                                <li><Link to="/contact" style={{textDecoration:"none",color:"#282828"}} onClick={()=>{setSidebar(false)}}>Contact</Link></li>
                            </ul>
                        </div>}
                    </div>
                    <div className="header-center-name">
                        <Link to="/" style={{textDecoration:"none",color:"#282828"}}>Chamunda Works</Link>
                    </div>
                    <div className="header-right-content">
                        <Link to="/login" style={{textDecoration:"none",color:"#282828"}}><BsPersonCircle/></Link>
                        <TbSearch onClick={()=>setSearch(true)}/>
                    </div>
                </div>
                <div className="header-content">
                    <div className="header-left">
                        <Link to="/" style={{textDecoration:"none",color:"#282828"}}>Chamunda Works</Link>
                    </div>
                    <ul className="header-center">
                        <li><Link to="/category" style={{textDecoration:"none",color:"#282828"}}>Categories</Link></li>
                        <li><Link to="/about" style={{textDecoration:"none",color:"#282828"}}>About</Link></li>
                        <li><Link to="/contact" style={{textDecoration:"none",color:"#282828"}}>Contact</Link></li>
                    </ul>
                    <div className="header-right">
                        <TbSearch onClick={()=>setSearch(true)}/>
                        <Link to="/login" style={{textDecoration:"none",color:"#282828"}}><BsPersonCircle/></Link>
                        <span className="header-cart-icon">
                            <Link to="/cart" style={{textDecoration:"none",color:"#282828"}}><BiShoppingBag/></Link>
                            <span>{cartCount}</span>
                        </span>
                    </div>
                </div>
            </header>
            {FirstSearch && <Search setSearch={setSearch}/>}
      </>  
    )
}

export default Header;