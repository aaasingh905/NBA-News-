import React from 'react'
import classes from './footer.css'
import { Link } from 'react-router-dom'
import { CURRENT_YEAR } from '../../functions'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Link to='/' className={classes.logo} >
                <img alt="nba-logo" src="images/nba_logo.png"/>
            </Link>
            <div className={classes.Copyright}>
            @NBA {CURRENT_YEAR} All rights Reserved
            </div>
            
        </div>
    )
}

export default Footer
