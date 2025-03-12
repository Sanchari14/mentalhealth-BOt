import React, {Component} from 'react';
import { Grid,Card } from '@material-ui/core';
import Nav from './Nav';
import Footer from './Footer';
import '../App';

class Developers extends Component{
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
                <p className="whyHeader">The Developers</p>
                <div className="whySpace"></div>
                <div className="whyPadding">
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Card className="nameCard" elevation="8">
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                                <img alt="" src="/assets/img/daniel.jpg" className="nameImage"/>
                                <div className="nameSpace"></div>
                                <p className="nameHeader">Daniel Saldanha</p>
                                <div className="nameSpace"></div>
                                <a href="https://www.linkedin.com/in/daniel-saldanha-31660a19a/" target="_blank" rel="noreferrer"><img alt="" src="/assets/img/linkedin.png" className="linkIcon"></img></a>
                            </Grid>
                        </Card>
                        <div className="nameSpace"></div>
                        <Card className="nameCard" elevation="8">
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                                <img alt="" src="/assets/img/ash.jpg" className="nameImage"/>
                                <div className="nameSpace"></div>
                                <p className="nameHeader">Ashwath Krishnan</p>
                                <div className="nameSpace"></div>
                                <a href="https://www.linkedin.com/in/ashwath-krishnan-0335b31a9/" target="_blank" rel="noreferrer"><img alt="" src="/assets/img/linkedin.png" className="linkIcon"></img></a>
                            </Grid>
                        </Card>
                    </Grid>
                </div>       

                <div className="whySpace"></div>
                <div className="whySpace"></div>


                <div className="whyPadding">
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Card className="nameCard" elevation="8">
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                                <img alt="" src="/assets/img/suhas.jpg" className="nameImage"/>
                                <div className="nameSpace"></div>
                                <p className="nameHeader">Suhas Pai</p>
                                <div className="nameSpace"></div>
                                <a href="https://www.linkedin.com/in/suhas-pai-45488a1a7/"  target="_blank" rel="noreferrer"><img alt="" src="/assets/img/linkedin.png" className="linkIcon"></img></a>
                            </Grid>
                        </Card>
                        <div className="nameSpace"></div>
                        <Card className="nameCard" elevation="8">
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                                <img alt="" src="/assets/img/abh.jpg" className="nameImage"/>
                                <div className="nameSpace"></div>
                                <p className="nameHeader">Abhiram Alamuri</p>
                                <div className="nameSpace"></div>
                                <a href="https://www.linkedin.com/in/abhiram-prakash-alamuri-43289a1a6/" target="_blank" rel="noreferrer"><img alt="" src="/assets/img/linkedin.png" className="linkIcon"></img></a>
                            </Grid>
                        </Card>
                    </Grid>
                </div>         
            </Grid>
            <Footer/>
            </>
        );
    }
}

export default Developers;