import React from 'react'
import classes from './SideNav.css'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const SideNavitems = () => {

    const items = [
        {
            type: classes.Options,
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type: 'Options',
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
           type: 'Options',
            icon:'play',
            text:'videos',
            link:'/videos'
        },
        {
            type: 'Options',
            icon:'sign-in',
            text:'Sign-In',
            link:'/signin'
        },
        {
            type: 'Options',
            icon:'sign-out',
            text:'Sign-out',
            link:'/signout'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) => {
            return (
                <div className={classes.Options} key={i}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
            
        </div>
            )
        })
    }
   
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavitems;
