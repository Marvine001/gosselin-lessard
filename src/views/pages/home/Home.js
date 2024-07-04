import React, { Component } from 'react';
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

//create Home class
class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='container'>
                    <h1 className='blue'>Home</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Home;