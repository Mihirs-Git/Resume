import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component
{
    render()
    {
        return(

            <React.Fragment>
                <Jumbotron className="row-odd mt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 align-self-center">
                                <span className="fa fa-user fa-2x fa-md-3x ml-1 ml-md-5"></span>
                                <h4 className="ml-md-2">Objective</h4>
                            </div>
                            <div className="col-12 col-md-9 align-self-center">
                                <p className="content">
                                    A Computer Science Engineer, looking for a platform where I can put my learnings into practice.
                                    Seeking for a position where I can majorly enhance my web and mobile development skills obtained while learning react framework and benefit the organization
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Jumbotron className="row-even">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 align-self-center order-md-last">
                                <span className="fa fa-book fa-2x fa-md-3x ml-1 ml-md-5"></span>
                                <h4 className="ml-md-3">Education</h4>
                            </div>
                            <div className="col-12 col-md-9 align-self-center order-md-first">
                                <h5 className="content">
                                    Bachelor of Engineering,
                                    Computer Science and Engineering,
                                    2016-2020
                                </h5>
                                <p>
                                    Babaria Institute of Technology, GTU<br></br>
                                    C.P.I: 9.12, C.G.P.A: 8.99
                                </p>
                                <Button outline size="sm" color="primary">View More</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Jumbotron className="row-odd">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 align-self-center">
                                <span className="fa fa-trophy fa-2x fa-md-3x ml-1 ml-md-5"></span>
                                <h4>Achievements</h4>
                            </div>
                            <div className="col-12 col-md-9 align-self-center">
                                <h5 className="content">
                                    Shri Dewang Mehta IT Award, 2017    
                                </h5>
                                <p>
                                    Awarded by the Shri Dewang Mehta Foundation for obtaining the topper's position in the college for the 1st year 
                                </p>
                                <h5 className="content">
                                    Toppers Certificate, BITS EDU CAMPUS, 2016-17    
                                </h5>
                                <p>
                                    Awarded by the BITS EDU CAMPUS for securing the topper's position in the college for the 1st year
                                </p>
                                <Button color="primary" outline size="sm">View More</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Jumbotron className="row-even">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 offset-md-1 col-md-3 align-self-center order-md-last">
                                <span className="fa fa-hashtag fa-2x fa-md-3x ml-1 ml-md-5"></span>
                                <h4 className="ml-md-2">Proficiency</h4>
                            </div>
                            <div className="col-12 col-md-4 align-self-center order-md-first">
                                <ul type="None" className="p-0">
                                    <h5 className="content">
                                        Web Development Skills
                                    </h5>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 align-self-center order-md-first">
                                <ul type="None" className="p-0">
                                        <h5 className="content">
                                            Programming Languages
                                        </h5>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>Javascript</li>
                                        <li>C/C++</li>
                                    </ul>
                            </div>
                        </div>
                        <Button outline size="sm" color="primary">View Other Skills</Button>
                    </div>
                </Jumbotron>
            </React.Fragment>

        );
    }
}

export default Home;