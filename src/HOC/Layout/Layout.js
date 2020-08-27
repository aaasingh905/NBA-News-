import React, { Component } from 'react'
import './Layout.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Layout extends Component {
    state = {
        showNav: false
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav:action
        })
    }


    render() {
        return (
            <div>
                <Header show={this.state.showNav} 
                hideNav = {()=> this.toggleSideNav(false)}
                showNav = {()=> this.toggleSideNav(true)}/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;
