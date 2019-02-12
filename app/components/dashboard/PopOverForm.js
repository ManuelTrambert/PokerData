import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/es/Fab/Fab";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import Button from "@material-ui/core/es/Button/Button";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import Slide from "@material-ui/core/es/Slide/Slide";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  whiteBackground: {
    backgroundColor: 'white'
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const PopOverForm = class PopOverForm extends Component {
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
      classes,
    } = this.props;

    return (
      <div className={classes.addTournamentButton}>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContentText>
            Ajoute un tournoi :)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom du tournoi"
            type="email"
            fullWidth
          />
        </Dialog>
      </div>
    )
  }
};

PopOverForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopOverForm);
