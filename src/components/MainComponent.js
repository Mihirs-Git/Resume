import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

class Main extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
            </div>
        )
    }
}
export default Main;