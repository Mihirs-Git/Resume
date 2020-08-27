import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavLink, NavbarBrand } from 'reactstrap';

class Header extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand>
                            <h1 className="title">Mihir Parmar</h1>
                        </NavbarBrand>
                        <Nav pills>
                            <NavItem>
                                <NavLink href="/" active><span className="fa fa-home fa-sm"></span> Home</NavLink>
                            </NavItem>
                        
                            <NavItem>
                                <NavLink href="/"><span className="fa fa-book fa-sm"></span> Education</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/"><span className="fa fa-briefcase fa-sm"></span> Projects</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/"><span className="fa fa-trophy fa-sm"></span> Accomplishments</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="/"><span className="fa fa-hashtag fa-sm"></span> Proficiency</NavLink>
                            </NavItem>
                        
                            <NavItem>
                                <NavLink href="/"><span className="fa fa-address-book-o fa-sm"></span> Contact</NavLink>
                            </NavItem>
                        </Nav>
                        
                    </div>
                </Navbar>
            </React.Fragment>

        );
    }

}

export default Header;