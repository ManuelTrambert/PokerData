import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/es/Fab/Fab";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/es/TextField/TextField";
import Slide from "@material-ui/core/es/Slide/Slide";
import api from '../../api';

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
    name: '',
    price: '0',
    nbPlayer: '0',
    pos: '0',
    userId: '0'
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  postNewTournament = () => {
    api.post('/Tournaments', {
      type: this.state.name,
      price: this.state.price,
      difference: this.state.difference,
      pos: this.state.pos,
      nbPlayers: this.state.nbPlayers,
      user: this.state.userId
    });
  };

  _handleTextFieldChange = (fieldName) => (e) => {
    this.setState({
      [fieldName]: e.target.value
    });
  };

  render() {
    const {
      userId,
      classes,
      reloadDash
    } = this.props;


    this.state.userId = userId;
    return (
      <div className={classes.addTournamentButton}>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleClickOpen}>
          <AddIcon/>
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
                <CloseIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom du tournoi"
            type="text"
            value={this.state.name}
            fullWidth
            onChange={this._handleTextFieldChange('name')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="difference"
            label="Gains/Pertes"
            type="number"
            value={this.state.difference}
            fullWidth
            onChange={this._handleTextFieldChange('difference')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Mise"
            type="number"
            value={this.state.price}
            fullWidth
            onChange={this._handleTextFieldChange('price')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="pos"
            label="Position"
            type="number"
            value={this.state.pos}
            fullWidth
            onChange={this._handleTextFieldChange('pos')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="nbPlayers"
            label="Nombre de joueurs"
            type="number"
            value={this.state.nbPlayers}
            fullWidth
            onChange={this._handleTextFieldChange('nbPlayers')}
          />
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.postNewTournament}>
            <CheckIcon/>
          </Fab>
        </Dialog>
      </div>
    )
  }
};

PopOverForm.propTypes = {
  userId: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  reloadDash: PropTypes.func.isRequired
};

export default withStyles(styles)(PopOverForm);
