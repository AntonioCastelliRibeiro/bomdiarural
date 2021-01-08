import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Hidden, withWidth, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
    variant: 'outlined'
  },
}));

function BreakpointUp(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
      <Hidden only="xl">
        <Paper className={classes.paper} elevation={1}>XL</Paper>
        </Hidden>
      <Hidden only="lg">
        <Paper className={classes.paper} elevation={1}>LG</Paper>
        </Hidden>
        <Hidden only="sm">
        <Paper className={classes.paper} elevation={2}>SM</Paper>
        </Hidden>
        <Hidden only={['sm', 'lg']}>
        <Paper className={classes.paper} elevation={3}>MD</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointUp.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(BreakpointUp);
