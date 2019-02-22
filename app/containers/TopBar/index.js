import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import api from '../../api';
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {connect} from 'react-redux';
import { friendDashboard } from '../../actions/friend';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: '#4e505d !important'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
});

class TopBar extends React.Component {
  state = {
    query: '',
    results: [{id: 0, username: 'Recherche..'}],
    user: 0,
    username: 'Liste des utilisateurs trouvés'
  };

  handleInputChange = async (e) => {
    this.setState({query: e.target.value});
    if (this.state.query && this.state.query.length > 1) {
      console.log((await api.get(`/Users/${this.state.query}/users`)).data);
      this.state.results = (await api.get(`/Users/${this.state.query}/users`)).data;
      this.state.user = this.state.results[0].username;
      if (this.state.results.length <= 0) {
        this.state.user = '';
      }
      console.log(this.state);
    }
  };

  handleChange = async (e) => {
    this.state.user = e.target.value;
    this.goToFriend(this.state.user);
  };

  render() {
    const {} = this.state;
    const {goToFriend, classes} = this.props;
    this.goToFriend = goToFriend;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Poker Data
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={this.handleInputChange}
              />
            </div>
            <Select
              value={this.state.user}
              onChange={this.handleChange}
              name="results"
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value="" disabled>
                Liste des utilisateurs trouvés
              </MenuItem>
              {this.state.results.length > 0 && (<MenuItem value={this.state.results[0].id}>{this.state.results[0].username}</MenuItem>)}
              {this.state.results.length > 1 && (<MenuItem value={this.state.results[1].id}>{this.state.results[1].username}</MenuItem>)}
              {this.state.results.length > 2 && (<MenuItem value={this.state.results[2].id, this.state.results[2].username}>{this.state.results[2].username}</MenuItem>)}
              {this.state.results.length > 3 && (<MenuItem value={this.state.results[3].id, this.state.results[3].username}>{this.state.results[3].username}</MenuItem>)}
              {this.state.results.length > 4 && (<MenuItem value={this.state.results[4].id, this.state.results[4].username}>{this.state.results[4].username}</MenuItem>)}
            </Select>
            <div className={classes.grow}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    goToFriend: (id) => friendDashboard(id)(dispatch)
  });
};

const styled = withStyles(styles, {name: 'TopBar'})(TopBar);
const connected = connect(mapStateToProps, mapDispatchToProps)(styled);
export default connected;
