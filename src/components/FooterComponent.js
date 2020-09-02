import React from 'react';
import { Navbar, NavItem, Nav, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Footer(props)
{
    return(

        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Navbar dark>
                            <Nav pills vertical>
                                <h4 className="footer-title pl-2">Sitemap</h4>
                                <NavItem >
                                    <NavLink to="/home" className="nav-link" activeClassName="activeClass"><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink to="/education" className="nav-link" activeClassName="activeClass"><span className="fa fa-book fa-sm"></span> Education</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/projects" className="nav-link " activeClassName="activeClass"><span className="fa fa-briefcase fa-sm"></span> Projects</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/awards" className="nav-link" activeClassName="activeClass"><span className="fa fa-trophy fa-sm"></span> Accomplishments</NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink to="/skills" className="nav-link" activeClassName="activeClass"><span className="fa fa-hashtag fa-sm"></span> Proficiency</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link" activeClassName="activeClass"><span className="fa fa-address-book-o fa-sm"></span> Contact</NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Navbar>
                        </div>
                        <div className="col-12 col-md-6">
                            <Navbar dark>
                            <Nav pills vertical>
                                <h4 className="footer-title pl-2">Social Media</h4>
                                <NavItem >
                                    <NavLink to="/facebook" className="nav-link" activeClassName="activeClass"><span className="fa fa-facebook-square fa-sm"></span> Facebook</NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink to="/instagram" className="nav-link" activeClassName="activeClass"><span className="fa fa-instagram fa-sm"></span> Instagram</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/twitter" className="nav-link" activeClassName="activeClass"><span className="fa fa-twitter-square fa-sm"></span> Twitter</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/linkedin" className="nav-link" activeClassName="activeClass"><span className="fa fa-linkedin-square fa-sm"></span> LinkedIn</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        </div>
                    </div>
                </div>    
            </div>
        </React.Fragment>

    );
}

export default Footer;