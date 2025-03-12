import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Grid,Button} from '@material-ui/core';
import Nav from './Nav';
import Footer from './Footer';
import '../App';




class Home extends Component{
    render(){
        return(
            <>
            <Nav/>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
                <div className="whySpace"></div>
                <img alt="" src="/assets/img/panda.jpg" className="panda"/>
                
                <Link to="/chatBot">
                    <Button 
                    style={{color:"white",fontSize: "20px",padding:"10px",paddingLeft:"20px",paddingRight:"20px",textTransform:"none",backgroundColor:"rgba(32, 145, 226, 1)"}}>Hey! How was your day?</Button>
                </Link>
                <div className="whySpace"></div>
                <p style={{fontSize:"25px",color:"rgba(73, 73, 73, 1)"}}>BonBot is a non judgmental friend with empathy to help your ease your stress and anxiety, all while being anonymous.</p>
            </Grid>
            <Footer/>
            </>


        );
    }
}
export default Home;