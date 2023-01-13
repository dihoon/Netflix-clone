import React, {useState} from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(()=>{
    if (searchValue){
      navigate(`/search?q=${searchValue}`);
    } else navigate(`/`);
  }, [searchValue])

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img 
      alt="Netflix logo" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
      className="nav_logo"
      onClick={()=>window.location.reload()}/>
      <input
      value={searchValue}
      onChange={handleChange}
      className="nav_input"
      type="text"
      placeholder='영화를 검색해주세요.'/>
      <img
      alt="User logged"
      src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png"
      className="nav_avatar"/>

    </nav>
  )
}

export default Nav;