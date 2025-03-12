import React from 'react';
import { makeStyles, createStyles, Theme, AppBar, Toolbar,Typography } from '@material-ui/core';

import Logo from '../../../assests/img/chatbot.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      flexDirection:'row',
      backgroundColor:'white',
    },
    grow: {
      flexGrow: 1,
      
    },
    logo: {
      width: '100px',
    },
  }),
);
const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="fixed"
 
      className={classes.appBar}
      >
        <Toolbar>
          <img src={Logo} className={classes.logo} alt="" />
          <div className={classes.grow} />

        </Toolbar>
        <Typography variant="h3" style={{color:"  #4169E1"}}>Awimmowe</Typography>
      </AppBar>
    );
  };
  
  export default Header;