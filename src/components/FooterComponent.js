import React from 'react';
import { Navbar, NavItem, Nav, NavLink, Jumbotron } from 'reactstrap';

function Footer(props)
{
    return(

        <React.Fragment>
            <Jumbotron className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Navbar dark>
                            <Nav pills vertical>
                                <h4 className="footer-title pl-2">Sitemap</h4>
                                <NavItem >
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
                            
                        </Navbar>
                        </div>
                        <div className="col-12 col-md-6">
                            <Navbar dark>
                            <Nav pills vertical>
                                <h4 className="footer-title pl-2">Social Media</h4>
                                <NavItem >
                                    <NavLink href="#" className="activeClass"><span className="fa fa-facebook-square fa-sm"></span> Facebook</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-instagram fa-sm"></span> Instagram</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-twitter-square fa-sm"></span> Twitter</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="activeClass"><span className="fa fa-linkedin-square fa-sm"></span> LinkedIn</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        </div>
                    </div>
                </div>    
            </Jumbotron>
        </React.Fragment>

    );
}

export default Footer;