import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

const styles = theme =>({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    nav: {
        background: '#309dff'
    }
  });
class Main extends Component {
    render() {
       const {classes} = this.props
        return (
            <div>
                <Grid container >
                    <Grid item xs={12} className={classes.nav}>
                        <Grid item xs={6}>
                            <Typography variant='h3'> WoW</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Main)