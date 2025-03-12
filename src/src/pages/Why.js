import React, {Component} from 'react';
import { Grid,Box } from '@material-ui/core';
import Nav from './Nav';
import Footer from './Footer';
import '../App';

class Why extends Component {
    render(){
        return (
            <>
            <Nav/>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                    <div className="whySpace"></div>
                    <p className="whyHeader" >Why?</p>
                    <div className="whySpace"></div>
                        <div className="whyPadding">
                            <Box className="whyBox">
                            Mental illness amounts to one-sixth of all health-related problems and it’s a worldwide concern. 
                            The emotional, psychological, and social well-being of a person reflects his state of mental health. 
                            According to research reports, 20 percent of the Indian population suffers from some sort of mental disorder 
                            with a vast majority of them not seeking treatment.
                            <br></br><br></br>
                            There are many reasons for this ranging from social stigma from the community to financial situations while 
                            approaching a doctor. But this can be changed if more and more people decide to take the first step in seeking help.   
                            <br></br><br></br>
                            Our solution BonBot helps people to internally structure their emotions and throughts through empathetic conversations. Thus 
                            giving people an outlet to speak about their day without the fear of being judged all while being anonymous. 
                            <br></br><br></br>
                            BonBot is no substitute to a doctor, however it can act as a non judgemental friend who is ready to hear you out at anytime.  
                            </Box>
                        </div>
                </Grid>
            </Grid>
            <Footer/>
            </>
        );
    }
}
export default Why;