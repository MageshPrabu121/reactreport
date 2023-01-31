import React, { useState } from 'react'
import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
export default function Navbar() { 
  const [navbarState, setNavbarState]=useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
            <div className="container">
                <Link to="/"><img height={60} width={80} src={"https://res.cloudinary.com/dc8kig0rh/image/upload/v1670664258/Screenshot_20221125_215122-removebg-preview_qsizoz.png"} alt="" /></Link>
                  Ace Adventures
            </div>
            <div className="toggle">
              {
                navbarState ? <VscChromeClose onClick={()=>setNavbarState(false)} /> : <GiHamburgerMenu  onClick={()=>setNavbarState(true)}/>
              }
            </div>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/places">Places</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/connect">Connect</Link></li>
        </ul>
      </Nav>  
      <ResponsiveNav state={navbarState}>
      <ul>
            <li><Link to="/" onClick={()=>setNavbarState(false)}>Home</Link></li>
            <li><Link to="/contact" onClick={()=>setNavbarState(false)}>ContactUs</Link></li>
            <li><Link to="/places" onClick={()=>setNavbarState(false)}>Places</Link></li>
            <li><Link to="/testimonial" onClick={()=>setNavbarState(false)}>Testimonial</Link></li>
            <li><Link to="/connect" onClick={()=>setNavbarState(false)}>Connect</Link></li>
    
        </ul>
      </ResponsiveNav>
      </>
  );
}
const Nav=styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0rem 3.5rem;
  .brand{
    .container{
      cursor:pointer;
      display:flex;
      justify-content:center;
      align-items:center;
      gap:0.4 rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform:uppercase;
    }
    .toggle{
      display:none;
    }
  }
  ul{
    display:flex;
    list-style-type:none;
    gap:2rem;
    li{
      font-size:1.2rem;
      transition:0ms.1s ease-in-out;
      &:hover{
        color:#023e8a;
        transform:scale(1.1);
      }
    }
    a{
      color:white;
    text-decoration:none;
    }
    a:hover{
      color:black;

    }
    }
    }
  }
  button{
    padding:0.5rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    background-color:#48cae4;
    text-transform:uppercase;
    font-size:0.9rem;
    letter-spacing:0.1rem;
    transition:0.3s ease-in-out;
    &:hover{
      background-color:#023e8a;
    }
    a{
      text-decoration:none;
      color:white;
    }
  }

@media screen and (min-width:280px) and (max-width: 1080px){
  .brand{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    .toggle{
      display:block;
    }
  }
  ul,
  button{
    display:none;
  }
}
`;

 const ResponsiveNav =styled.div`
 display:flex;
 position:absolute;
  z-index:5;
  background-color:white;
  width:100%;
  height:30vh;
  align-items:center;
  top:${({state})=>(state?"50px": "-400px")};
  ul{
    list-style-type:none;
    li
    {
      width:100%;
      margin:1rem 0;
      margin-left:2rem;
      a{
        text-decoration:none;
        color:#007736;
        font-size:1.2rem;
        transition:0.3s ease-in-out; 
        &.hover{
          color: #023e8a;
        }
      }
      &:first-of-type{
        a{
          color:#023e8a;
          font-weight:900;
        }
      }
    }
  }
  }
 `