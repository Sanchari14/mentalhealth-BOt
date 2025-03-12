import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AppBar,Toolbar,Button, Grid} from '@material-ui/core';
import '../App';

class Nav extends Component{
    render(){
        return(
            <AppBar position="static"  style={{ background: "rgba(22, 148, 239, 0.60)" }}>
                <Toolbar>
                    <img alt="" src="/assets/img/logo.jpg" style={{ height:"90px" }}/>
                    <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                    >        
                        <Link to="/"><Button style={{color:"rgba(22, 148, 239, 1)",fontWeight:"700",fontSize: "25px",padding:"10px",textTransform:"none"}}>Home</Button></Link>
                        <Link to="/why"><Button style={{color:"rgba(22, 148, 239, 1)",fontWeight:"700",fontSize: "25px",padding:"10px",textTransform:"none"}}>Why?</Button></Link>
                        <Link to="/developers"><Button style={{color:"rgba(22, 148, 239, 1)",fontWeight:"700",fontSize: "25px",padding:"10px",textTransform:"none"}}>Developers</Button></Link> 
                    </Grid> 
                </Toolbar>
            </AppBar>
        );
    }
}
export default Nav;