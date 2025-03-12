import React, { useState,useEffect } from 'react';
import { makeStyles, Theme, createStyles, TextField, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';


import Header from '../../components/molecules/Header';
import Chat from "../../components/organisms/chatarea";
const useStyles = makeStyles((theme)=>
    createStyles({
       root:{
           position:"absolute",
           bottom:"0",
           width:"75%",
           display:"flex",
           borderTop:theme.spacing(1),
           marginLeft:"150px",
           
        },
        table: {
            minWidth: 650,
          },
          chatSection: {
            width: '200ch',
            height: '80vh'
          },
          borderRight500: {
              borderRight: '1px solid #e0e0e0'
          },
          messageArea: {
            height: '70vh',
            overflowY: 'auto',
            width:'100%',
            
          },
          container:{
              margin:'150px',
              marginTop:'0px',
          },
          avatar:{
              backgroundColor:'#1694EF',
              opacity:"75%",
              width:"200ch"
          }
        })
)


const Chatbot = () => {
    const classes = useStyles();
    const [message,messageSet] = useState('');
    const [messageReplylist,setMessageReplyList]=useState([]);
    const [placeholder,setplaceholder]=useState('Type here');
    const [reply,setReply] = useState([]);
    const messageHandler = ( element ) => {
        messageSet(element.target.value);
    }
    function makePostRequest(path, queryObj) { 
        axios.post(path, queryObj).then( 
            (response) => { 
                setMessageReplyList([...messageReplylist,[message,response['data']]]);
                console.log(messageReplylist); 
            }, 
            (error) => { 
                console.log(error); 
            } 
        ); 
    } 
   
    const submitHandler = (  ) => {
        if(message !=='')
        {   
            const queryObj = { stringinput: message }; 
            makePostRequest(`http://127.0.0.1:5000/${message}`, queryObj); 
            messageSet('');
        }   
    }

    const messagefunction = messageReplylist.map((element,index)=>{
        
    return(
    <>
    <ListItem key={index}>
        <Grid container>
            <Grid item xs={12}>
                <ListItemText align="right" style={{fontSize:'10px'}} primary={element[0]}></ListItemText>
            </Grid>
            <Grid item xs={12}>
                <ListItemText align="right" secondary="09:30"></ListItemText>
            </Grid>
        </Grid>
        </ListItem>
             <ListItem key={index}>
            <Grid container>
            <Grid item xs={12}>
                <ListItemText align="left" style={{fontSize:'10px'}} primary={element[1]}></ListItemText>
            </Grid>
            <Grid item xs={12}>
                <ListItemText align="left" secondary="09:30"></ListItemText>
            </Grid>
        </Grid>
            </ ListItem>
    </>
    )})

    

    

    return(
        <>  
        <div className={classes.container}>     
        
        <Grid item xs={3} >
            <div className={classes.avatar}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="/panda.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="BonBot"></ListItemText>
                    </ListItem>
                </List>
             </div>
            </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                     {messagefunction}
                </List>
                <Divider />
                <Grid container style={{paddingLeft: '20px',paddingTop:"20px",width:'195ch'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" placeholder="Type here.."  value={message}  fullWidth onChange={messageHandler}/>
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick={submitHandler} ><SendIcon /></Fab>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        </div>
        </>
    )
}

export default Chatbot;