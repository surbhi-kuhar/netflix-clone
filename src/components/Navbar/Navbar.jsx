import "./navbar.scss";
import {useState} from 'react';
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
    const[isScroll,setScroll] = useState(false);

    window.onscroll=()=>{
        setScroll(window.scrollY === 0 ? false : true);
        // clean up code , otherwise it will be stuck in an infinite loop
        return ()=>(window.onscroll=null);
    }

    console.log(isScroll);

    const navigate=useNavigate();
    const handleClick=()=>{
      navigate('/');
    }
    
  return (
    <div className={isScroll ? 'navbar scrolled': 'navbar'}>
      <div className="left">
        <img alt='' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <span>My List</span>
      </div>
      <div className="right">
        <Search />
        <span className="icon">KID</span>
        <Notifications className="icon" />
        <img
          className="icon"
          alt=''
          src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80"
        />
        <div className="profile">
          <ArrowDropDown className="icon" />
          <div className="options">
            <span className="settings">Settings</span>
            <span className="logout" onClick={handleClick}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
