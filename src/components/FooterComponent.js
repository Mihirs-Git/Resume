import React from 'react';
import { Jumbotron } from 'reactstrap';

function Footer(props)
{
    return(

        <React.Fragment>
            <Jumbotron className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ul type="None" className="p-0">
                                <h4>Sitemap</h4>
                                <li><span className="fa fa-home fa-sm"></span> Home</li>
                                <li><span className="fa fa-book fa-sm"></span> Education</li>
                                <li><span className="fa fa-briefcase fa-sm"></span> Projects</li>
                                <li><span className="fa fa-trophy fa-sm"></span> Accomplishments</li>
                                <li><span className="fa fa-hashtag fa-sm"></span> Proficiency</li>
                                <li><span className="fa fa-address-book-o fa-sm"></span> Contact</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">                        
                            <ul type="None" className="p-0">
                                <h4>Social Media Links</h4>
                                <li><span className="fa fa-facebook-square fa-sm"></span> Facebook</li>
                                <li><span className="fa fa-instagram fa-sm"></span> Instagram</li>
                                <li><span className="fa fa-twitter-square fa-sm"></span> Twitter</li>
                                <li><span className="fa fa-linkedin-square fa-sm"></span> Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>

    );
}

export default Footer;