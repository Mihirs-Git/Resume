import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavLink, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav()
    {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render()
    {
        return(
            <React.Fragment>
                <Navbar expand="md" dark>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand>
                            <img src="assets/logo.png" alt="Mihir Parmar" width="300"></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav pills>
                                <NavItem>
                                    <NavLink href="#" className="activeClass"><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-book fa-sm"></span> Education</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-briefcase fa-sm"></span> Projects</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-trophy fa-sm"></span> Accomplishments</NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-hashtag fa-sm"></span> Proficiency</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-address-book-o fa-sm"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>    
                    </div>
                </Navbar>
            </React.Fragment>

        );
    }

}

export default Header;