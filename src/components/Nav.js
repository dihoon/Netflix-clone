import React, {useState} from 'react'
import { useEffect } from 'react';
import "./Nav.css"

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 50) {
        setShow(true);
      }else{
        setShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll", ()=> {});
    }
  },[]);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img 
      alt="Netflix logo" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
      className="nav_logo"
      onClick={()=>window.location.reload()}/>
      <img
      alt="User logged"
      src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png"
      className="nav_avatar"/>

    </nav>
  )
}

export default Nav;