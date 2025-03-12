import React from 'react';
import { makeStyles, createStyles, Theme, CssBaseline } from '@material-ui/core';
import Header from '../molecules/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
  }),
);

const PageTemplate = ({ children }) => {
    const classes = useStyles();
    return (
      <div className={classes.wrapper}>
         <CssBaseline />
        <Header /> 
        <main className={classes.content}>
          <div className={classes.offset} />
          {children}
        </main>
       </div>
    );
  };
  
  export default PageTemplate;