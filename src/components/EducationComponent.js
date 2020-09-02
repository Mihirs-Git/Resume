import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, Jumbotron, Card, CardTitle, CardText, CardSubtitle, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap';

const graphData = {
    labels: ['SEM-1','SEM-2','SEM-3','SEM-4','SEM-5','SEM-6','SEM-7','SEM-8'],
    datasets :[ {
        label: "SPI",
        backgroundColor: '#FED9B7',
        borderColor: "#0081A7",
        borderWidth: 2,
        data: [9.66,9.27,9.12,0.0,0.0,0.0,0.0,10.0] 
    }]
};


class Education extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isActiveSpi: false,
            isActiveCpi: false,
            isActiveCgpa: false
        }
        this.switchGraph = this.switchGraph.bind(this);
    }

    switchGraph(grade){

        switch(grade)
        {
            case "spi": 
                    this.setState({isActiveSpi: true, isActiveCpi: false, isActiveCgpa: false});
                    graphData.labels =  ['SEM-1','SEM-2','SEM-3','SEM-4','SEM-5','SEM-6','SEM-7','SEM-8'];
                    graphData.datasets[0].label = "SPI";
                    graphData.datasets[0].data = [9.66,9.27,9.12,0.0,0.0,8.69,0.0,10.0];   
                    break;

            case "cpi": 
                    this.setState({isActiveSpi: false, isActiveCpi: true, isActiveCgpa: false});
                    graphData.labels =  ['SEM-1','SEM-2','SEM-3','SEM-4','SEM-5','SEM-6','SEM-7','SEM-8'];
                    graphData.datasets[0].label = "CPI";
                    graphData.datasets[0].data = [9.66,9.28,1,0.0,0.0,9.04,0.0,9.12];
                    break;

            case "cgpa": 
                    this.setState({isActiveSpi: false, isActiveCpi: false, isActiveCgpa: true});
                    graphData.labels =  ['SEM-5','SEM-6','SEM-7','SEM-8'];
                    graphData.datasets[0].label = "CGPA"
                    graphData.datasets[0].data = [0.0,8.64,0.0,8.99];
                    break;
        }

    }

    render()
    {
        
        return(

            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-3 align-self-center">
                            <span className="fa fa-graduation-cap fa-2x fa-md-3x ml-1 ml-md-5"></span>
                            <h4 className="ml ml-md-2">Graduation</h4>
                        </div>
                        <div className="col-12 col-md-6">
                            <Bar
                                data = {graphData}
                                height = "250px"
                                options = {{
                                    title: {
                                        display: true,
                                        text: "Click to see numeric values",
                                        fontSize: 14
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }} />
                        </div>
                        <div className="col-12 col-md-3 align-self-center">
                            <Button color="info" size="md" active={this.state.isActiveSpi} onClick={() => this.switchGraph("spi")} block>SPI</Button>
                            <Button color="info" size="md" active={this.state.isActiveCpi} onClick={() => this.switchGraph("cpi")} block>CPI</Button>
                            <Button color="info" size="md" active={this.state.isActiveCgpa} onClick={() => this.switchGraph("cgpa")} block>CGPA</Button>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card>
                                <CardHeader className="text-center card-header"><span className="fa fa-sm fa-book"></span> H.S.C </CardHeader>
                                <CardBody className="card-body">
                                    <CardSubtitle>B.V.B's Narmada Vidyalaya</CardSubtitle>
                                    <CardSubtitle>2015-16</CardSubtitle>
                                    <CardText>Percentage: 86.00%</CardText>
                                </CardBody>
                            </Card>  
                        </div>
                        <div className="col-12 col-md-6">
                            <Card>
                                <CardHeader className="text-center card-header"><span className="fa fa-sm fa-book"></span> S.S.C </CardHeader>
                                <CardBody className="card-body">
                                    <CardSubtitle>B.V.B's Narmada Vidyalaya</CardSubtitle>
                                    <CardSubtitle>2013-14</CardSubtitle>
                                    <CardText>Percentage: 86.00%</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <h4><span className="fa fa-lg fa-certificate"></span> Certifications</h4>
                            </div>
                        </div>
                        <div className="row row-odd  p-2 p-md-5">
                            <div className="col-12 col-md-4 align-self-center">
                                <h5>Full-Stack Web Development with React</h5>
                            </div>
                            <div className="col-12 col-md-8 align-self-center">
                                <ul type="none" className="list">
                                    <li className="p-2">Front-End Web UI Frameworks and Tools: Bootstrap 4 <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/HNEAMCGSHKPP"> view certificate</a></li>
                                    <li className="p-2">Front-End Web Development with React <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/RFBRQRMUCEUY">view certificate</a></li>
                                    <li className="p-2">Multiplatform Mobile App Development with React Native <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/M9UKUEPR8BXJ">view certificate</a></li>
                                    <li className="p-2">Nodejs - Express, MongoDB, Mongoose <a className="certi-links" href="#">view certificate</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row row-even p-2 p-md-5 ">
                            <div className="col-12 col-md-4 align-self-center">
                                <h5>Python for Everybody</h5>
                            </div>
                            <div className="col-12 col-md-8 align-self-center">
                                <ul type="none" className="list">
                                    <li className="p-2">Programming for Everybody (Getting Started with Python) <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/AHFEYCT6DHT7"> view certificate</a></li>
                                    <li className="p-2">Python Data Structures <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/32TPQXKBLJE4">view certificate</a></li>
                                    <li className="p-2">Using Python to Access Web Data <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/PQHCZ8LJ69RG">view certificate</a></li>
                                    <li className="p-2">Using Databases with Python <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/CHY9THU367A2">view certificate</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row row-odd p-2 p-md-5">
                            <div className="col-12 col-md-4 align-self-center">
                                <h5>Architecting with Google Compute Engine</h5>
                                <a className="certi-links" href="https://www.coursera.org/account/accomplishments/specialization/certificate/RANQZUJ34G5P">Specialization Certificate</a>
                            </div>
                            <div className="col-12 col-md-8 align-self-center">
                                <ul type="none" className="list">
                                    <li className="p-2">Google Cloud Platform Fundamentals: Core Infrastructure<a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/ZHBF6HYUKKEJ"> view certificate</a></li>
                                    <li className="p-2">Essential Google Cloud Infrastructure: Foundation <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/LCKXK2MEGC3K">view certificate</a></li>
                                    <li className="p-2">Essential Google Cloud Infrastructure: Core Services <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/775ZUP5A5SXS">view certificate</a></li>
                                    <li className="p-2">Elastic Google Cloud Infrastructure: Scaling and Automation <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/N3HYEFKWYVH6">view certificate</a></li>
                                    <li className="p-2">Elastic Cloud Infrastructure: Containers and Services <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/BUWY874WBHW2">view certificate</a></li>
                                    <li className="p-2">Reliable Google Cloud Infrastructure: Design and Process <a className="certi-links" href="https://www.coursera.org/account/accomplishments/certificate/9AYDYMMZM56M">view certificate</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row row-even p-2 p-md-5 ">
                            <div className="col-12 col-md-4 align-self-center">
                                <h5>Other</h5>
                            </div>
                            <div className="col-12 col-md-8 align-self-center">
                                <ul type="none" className="list">
                                    <li className="p-2">Web Design for Web Developers <a className="certi-links" href="https://www.udemy.com/certificate/UC-XXF516LP/"> view certificate</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Education;