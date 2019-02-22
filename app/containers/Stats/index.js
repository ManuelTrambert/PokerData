import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import MenuBar from '../Menu/index';
import StatsTool from '../../components/Stats/Stats';
import StatsMoneyTool from '../../components/Stats/StatsMoney';
import StatsPositionPercentTool from '../../components/Stats/StatsPositionPercent';
import api from '../../api';
import Typography from "@material-ui/core/es/Typography/Typography";
import TopBar from '../../containers/TopBar/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  showBottom: {
    marginBottom: '100%'
  },
  leftContent: {
    padding: '0px !important',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    margin: 'auto',
    textAlign: 'center'
  },
  rightContent: {
    zIndex: 10,
    backgroundColor: theme.palette.primary.contrastText,
    borderLeft: '1px solid #0a0b0d',
    marginBottom: '100%'
  },
});

const StatsPage = class StatsPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    userId: 0
  };

  async getData() {
    const rows = await api.get(`Tournaments/${this.state.userId}/user`);
    const rowPercent = await api.get(`Tournaments/${this.state.userId}/statspercent`);
    rowPercent.data.forEach(tournament => {
      console.log(typeof tournament.createdAt);
      tournament.createdAt = tournament.createdAt.substr(5, 5);
    });
    const rowStats = await api.get(`Tournaments/${this.state.userId}/stats`);
    rowStats.data.forEach(tournament => {
      tournament.date = tournament.date.substr(5, 5);
    });
    this.setState({moneyRows: rowStats.data, percentRows: rowPercent.data, rows: rows.data});
  }

  render() {
    const {classes, userId} = this.props;
    this.state.userId = userId;

    if (this.state.rows && this.state.moneyRows) {
      return (
        <div>
          <Grid container className={classes.root}>
            <TopBar/>
            <Grid item xs={2} className={classes.leftContent}>
              <MenuBar/>
            </Grid>
            <Grid item xs={10} className={classes.rightContent}>
              <div className={classes.headerTitle}>
                <Typography variant="h6">STATISTIQUES</Typography>
              </div>
              <StatsTool rows={this.state.rows}/>
              <StatsMoneyTool rows={this.state.moneyRows}/>
              <div className={classes.showBottom}>
                <StatsPositionPercentTool rows={this.state.percentRows}/>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      console.log('La?');

      this.getData();
      return (<span></span>);
    }
  }
}

StatsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return ({
    userId: state.auth.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

const styled = withStyles(styles, {name: 'StatsPage'})(StatsPage);
const connected = connect(mapStateToProps, mapDispatchToProps)(styled);
export default connected;
