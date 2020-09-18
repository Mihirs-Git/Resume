import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, Jumbotron, Card, CardTitle, CardText, CardSubtitle, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap';



class Education extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isActiveSpi: true,
            isActiveCpi: false,
            isActiveCgpa: false
        }
        this.graphData = {
            labels:  this.props.education.college.spi.sem,
            datasets :[ {
                label: "SPI",
                backgroundColor: '#FED9B7',
                borderColor: "#0081A7",
                borderWidth: 2,
                data: this.props.education.college.spi.spi
            }],
        };
        this.switchGraph = this.switchGraph.bind(this);
    }

    

    switchGraph(grade){

        switch(grade)
        {
            case "spi": 
                    this.setState({isActiveSpi: true, isActiveCpi: false, isActiveCgpa: false});
                    this.graphData.labels =  this.props.education.college.spi.sem;
                    this.graphData.datasets[0].label = "SPI";
                    this.graphData.datasets[0].data = this.props.education.college.spi.spi;   
                    break;

            case "cpi": 
                    this.setState({isActiveSpi: false, isActiveCpi: true, isActiveCgpa: false});
                    this.graphData.labels =  this.props.education.college.cpi.sem;
                    this.graphData.datasets[0].label = "CPI";
                    this.graphData.datasets[0].data = this.props.education.college.cpi.cpi;
                    break;

            case "cgpa": 
                    this.setState({isActiveSpi: false, isActiveCpi: false, isActiveCgpa: true});
                    this.graphData.labels =  this.props.education.college.cgpa.sem;
                    this.graphData.datasets[0].label = "CGPA"
                    this.graphData.datasets[0].data = this.props.education.college.cgpa.cgpa;
                    break;
        }

    }

    render()
    {
        const schoolData = this.props.education.school.map((item) => {


            return(
                <div className="col-12 col-md-6 mt-4 mt-md-0">
                    <h4><span className="fa fa-sm fa-book"></span>{item.standard}</h4>
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">{item.percentile}</CardTitle>
                            <CardSubtitle className="text-center">Percentile Marks</CardSubtitle>
                        </CardBody>
                        <CardFooter>
                                <CardText>{item.schoolName}</CardText>
                                <CardText>{item.board}</CardText>
                            <CardText>Percentage: {item.percentage}</CardText>
                        </CardFooter>
                    </Card>  
                </div>
    
    
            );
        });

        const certificationData = this.props.education.certification.map((item, index) => {

            return(
                
                <div className={`row p-2 p-md-5 ${index % 2 === 0 ? "row-even" : "row-odd"}`}>
                    <div className="col-12 col-md-4 align-self-center">
                        <h5>{item.title}</h5>
                        {item.specializationLink !== ""       
                            ? <a className="certi-links" href={item.specializationLink}>Specialization Certificate</a>
                            : <a></a>
                        }    
                    </div>
                    <div className="col-12 col-md-8 align-self-center">
                        <ul type="none" className="list">
                            { item.courses.map((course) => {
                               return(
                                    <li className="p-2">{course.name} <a className="certi-links" href={course.link}> view certificate</a></li>
                                );
                            })
                        }
                        </ul>
                    </div>
                </div>
                

            );

        })

        
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
                                data = {this.graphData}
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
                                    },
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                max: 10
                                            }
                                        }]
                                    }
                                }} />
                        </div>
                        <div className="col-12 col-md-3 align-self-center">
                            <Button color="info" outline size="sm" active={this.state.isActiveSpi} onClick={() => this.switchGraph("spi")} block>SPI</Button>
                            <Button color="info" outline size="sm" active={this.state.isActiveCpi} onClick={() => this.switchGraph("cpi")} block>CPI</Button>
                            <Button color="info" outline size="sm" active={this.state.isActiveCgpa} onClick={() => this.switchGraph("cgpa")} block>CGPA</Button>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {schoolData}
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h4><span className="fa fa-lg fa-certificate"></span> Certifications</h4>
                        </div>
                        <div className="col-12">
                        {
                            certificationData
                        }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Education;