import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goTo } from '../../actions/changePage'
import { withStyles } from '@material-ui/core/styles';
import MenuList from "@material-ui/core/es/MenuList/MenuList";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import DashboardIcon from '@material-ui/icons/Dashboard';
import StatsIcon from '@material-ui/icons/SignalCellularNull';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
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
      <MenuList>
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
