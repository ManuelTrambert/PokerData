import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goTo } from '../../actions/changePage'
import { withStyles } from '@material-ui/core/styles';
import MenuList from "@material-ui/core/es/MenuList/MenuList";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import DashboardIcon from '@material-ui/icons/Assignment';
import TournamentIcon from '@material-ui/icons/List';
import AssistantIcon from '@material-ui/icons/PermIdentity';
import AssistantTournamentIcon from '@material-ui/icons/SupervisorAccount';
import VsIcon from '@material-ui/icons/DialPad';
import StatsIcon from '@material-ui/icons/Assessment';

const styles = theme => ({
  menuList: {
    marginTop: '1px'
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
    border: '1px solid',
    margin: '5px',
    borderRadius: '16px'
  },
  primary: {},
  icon: {},
});

const MenuBar = class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, goToPage } = this.props;
    return(
      <MenuList className={classes.menuList}>
        <MenuItem onClick={() => goToPage('/dashboard')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
        </MenuItem>
        <MenuItem onClick={() => goToPage('/stats')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <StatsIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Stats" />
        </MenuItem>
        <MenuItem onClick={() => goToPage('/tournamentsuserpage')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <TournamentIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Tournois" />
        </MenuItem>
        <MenuItem onClick={() => goToPage('/assistanthbh')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AssistantIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Assistant main par main" />
        </MenuItem>
        <MenuItem onClick={() => goToPage('/assistantTournament')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AssistantTournamentIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Assistant tournoi" />
        </MenuItem>
        <MenuItem onClick={() => goToPage('/vscalculator')} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <VsIcon/>
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="VS calculator" />
        </MenuItem>
      </MenuList>
    );
  }
}

MenuBar.propTypes = {
  goToPage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    goToPage: (where) => goTo(where)(dispatch)
  });
};
const styled = withStyles(styles, { name: 'MenuBar' })(MenuBar);
const connected = connect(mapStateToProps, mapDispatchToProps)(styled);
export default connected;
