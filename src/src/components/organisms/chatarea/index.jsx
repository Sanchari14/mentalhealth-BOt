import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
    
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },

  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    border:'1px solid black',
    marginLeft:'150px',
    width:'100%'
},
avatar: {
    marginLeft:"150px",
    width:"177.5ch",
    backgroundColor:'#1694EF',
    opacity:"75%"
}
 
});

const Chat = ( Message ) => {
  const classes = useStyles();
  const messageList = Message['Message'].map((element,index) => {
    console.log(element);  
  })
  
  return (
      <div >
          <Grid item xs={3} >
                <List>
                    <ListItem button key="RemySharp" className={classes.avatar}>
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Alan"></ListItemText>
                    </ListItem>
                </List>
                <Divider style={{
                    color:'blue'
                }}/>          
            </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    {messageList}
                    
                </List>
                
                
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;