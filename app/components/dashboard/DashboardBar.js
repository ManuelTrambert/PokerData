import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DashboardArray from './DashboardArray';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/es/Fab/Fab";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import Button from "@material-ui/core/es/Button/Button";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/es/Divider/Divider";


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  whiteBackground: {
    backgroundColor: 'white'
  },
  loginBarBox: {
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  addTournamentButton: {
    textAlign: 'right',
  },
  headerTitle: {
    paddingTop: '10px',
    margin: 'auto',
    textAlign: 'center'
  },
  links: {
    marginTop: '20%'
  },
  loginForm: {
    marginTop: '10%'
  },
  fadeBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%'
  },
});

const DashboardBar = class DashboardBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      rows,
      classes,
    } = this.props;

    return (
      <div>
        <div className={classes.loginBarBox}>
          <div>
            <Typography variant="h6" className={classes.headerTitle}>DASHBOARD</Typography>
          </div>
          <div className={classes.addTournamentButton}>
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
              <AddIcon />
            </Fab>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.flex}>
                    Sound
                  </Typography>
                  <Button color="inherit" onClick={this.handleClose}>
                    save
                  </Button>
                </Toolbar>
              </AppBar>
              <List className={classes.whiteBackground}>
                <ListItem button>
                  <ListItemText primary="Phone ringtone" secondary="Titania" />
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                </ListItem>
              </List>
            </Dialog>
          </div>
          <div>
            <DashboardArray
              classes={classes}
              rows={rows}
            />
          </div>
        </div>
      </div>
    );
  }
};

DashboardBar.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default withStyles(styles)(DashboardBar);
