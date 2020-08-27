import React from 'react'
import SideNav from "react-simple-sidenav";
import SideNavItems from "./SideNavitems";


const Sidenav = (props) => {
    return (
        <div>
            <SideNav
                showNav = {props.show}
                onHideNav = {props.hideNav}
                navStyle={{
                    backgroud:'#242424',
                    maxWitdth:'220px'
                }}
                >
                    <SideNavItems/>
            </SideNav>
        </div>
    )
}

export default Sidenav
