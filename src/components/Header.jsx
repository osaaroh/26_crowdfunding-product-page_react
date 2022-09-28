import React from 'react'
import mainLogo from '../images/logo.svg'
import closeMenuIcon from '../images/icon-close-menu.svg'
import hamMenuIcon from '../images/icon-hamburger.svg'
import { useEffect, useState } from 'react'

const Header =()=> {
    const [displayMobileNav, setDisplayMobileNav] = useState(false); 
    const [mobileView, setMobileView] =  useState(false); 
    
    //Helper function to check screen size, if its <= 600px return true.
    //Anything bigger return false
    const checkScreenSize =()=>{
        if(document.body.clientWidth <= 600){
            setMobileView(true);
            return true;
        }else{
            setMobileView(false)
            return false;
        }
    }

    const showMobileNav =()=>{
        if(displayMobileNav && mobileView){
            document.querySelector('.nav-list').style.display = 'flex';
            document.querySelector('.mobile-menu').style.background = `url(${closeMenuIcon}) no-repeat`;   
        } 
        else if(!mobileView && !checkScreenSize()){
            document.querySelector('.nav-list').style.display = 'flex';
            document.querySelector('.mobile-menu').style.background = `url(${hamMenuIcon}) no-repeat`; 
        }
        else{
            document.querySelector('.nav-list').style.display = 'none';
            document.querySelector('.mobile-menu').style.background = `url(${hamMenuIcon}) no-repeat`; 
        }
    }
    
    //on screen resize ensure nav state is still preserved
    //use document.body.clientWidth instead of screen.width
    window.addEventListener("resize", function(event) {
        checkScreenSize();
    })
    

    useEffect(()=>{
        showMobileNav()
    })
    return  <header>
    <nav>
        <img src={mainLogo} alt="" className="logo" />
        <div className="mobile-menu" onClick={()=>{setDisplayMobileNav(!displayMobileNav)}}></div>

        <ul className="nav-list">
            <li className="nav-item" ><a href="#about" onClick={()=>{
                setDisplayMobileNav(false)
            }}>About</a></li>
            <hr/>
            <li className="nav-item"><a href="#start" onClick={()=>{
                setDisplayMobileNav(false)
            }}>Discover</a></li>
            <hr/>
            <li className="nav-item"><a href="#start" onClick={()=>{
                setDisplayMobileNav(false)
            }}>Get Started</a></li>
        </ul>
    </nav>
</header>


}

export default Header;
