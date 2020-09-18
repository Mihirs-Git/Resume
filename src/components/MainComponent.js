import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Education from './EducationComponent';
import Contact from './ContactComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = state => {
    return(
        {
            education: state.education
        }
    );
};

class Main extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route exact path="/education" component={() => <Education education={this.props.education}></Education>}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(connect(mapDispatchToProps)(Main));