import React from 'react'
import classes from './Header.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Sidenav from './SideNav/SideNav'

const Header = (props) => {

    const navBars = () => (
        <div className={classes.Navbar}>
            <FontAwesome name="bars" 
            onClick={props.showNav} style= {{
                color: '#dfdfdf',
                padding: '10px'
            }}
            />
        </div>
    )

    const logo = () => (
            <Link to ="/" className={classes.logo}>
                <img alt="nba_logo"  src="/images/nba_logo.png"/>
            </Link>
        
    )
    return (
        <header className = {classes.Header}>
            <Sidenav {...props} />
            <div  className = {classes.HeaderDiv}>
            {navBars()}
            {logo()}
            </div>
        </header>
    )
}

export default Header;
