import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from '../Menu/index';
import TopBar from '../../containers/TopBar/index';
import Pie from '../../components/pieStats/Pie';
import CardsTool from '../../components/cards/list';
import { listCards } from './listCards.config';
import api from '../../api';
import Fab from '@material-ui/core/es/Fab/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  leftContent: {
    padding: '0px !important',
    backgroundColor: '#FFFFFF',
  },
  cardList: {
    textAlign: 'center'
  },
  rightContent: {
    zIndex: 10,
    backgroundColor: theme.palette.primary.contrastText,
    borderLeft: '1px solid #0a0b0d',
  },
  lastItem: {
    marginBottom: '100%'
  },
  fab: {
    margin: theme.spacing.unit,
    background: '#FFFFFF'
  },
  button: {
    textAlign: 'center',
    margin: '10px',
    background: '#FFFFFF'
  },
  percentageWin: {
    textAlign: 'center'
  }
});


const colorHand = {
  'high card': '#000000',
  'one pair': '#00CC00',
  'two pair': '#FF0000',
  'three of a kind': '#FFFF00',
  'straight': '#00FF77',
  'flush': '#0099AA',
  'full house': '#FF00FF',
  'four of a kind': '#0000DD',
  'straight flush': '#222222',
  'royal flush': '#9999FF'
};
const AssistantHBHPage = class AssistantHBHPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    advice: '',
    rows: {
      datasets: [],
    },
    winPercent: 0,
    cards: {
      1: {
        name: '',
        type: '',
        fullName: '',
        id: 0
      },
      2: {
        name: '',
        type: '',
        fullName: '',
        id: 1
      },
    }
  };

  async getRealCard(name, type, which) {
    this.state.cards[which][type] = name;
  }

  async getData() {
    if (this.state.cards[1].name !== '' && this.state.cards[1].type !== '') {
      this.state.cards[1].id = (listCards.find((card) => {
        return card.letterName === this.state.cards[1].name && this.state.cards[1].type === card.letterType;
      })).id;
      this.state.cards[1].fullName = (listCards.find((card) => {
        return card.letterName === this.state.cards[1].name && this.state.cards[1].type === card.letterType;
      })).fullName;
    }

    if (this.state.cards[2].name !== '' && this.state.cards[2].type !== '') {
      this.state.cards[2].id = (listCards.find((card) => {
        return card.letterName === this.state.cards[2].name && this.state.cards[2].type === card.letterType;
      })).id;
      this.state.cards[2].fullName = (listCards.find((card) => {
        return card.letterName === this.state.cards[2].name && this.state.cards[2].type === card.letterType;
      })).fullName;
    }
    const rows = await api.get(`PokerCalculator/percent`, {
      params: {
        idS: this.state.cards[2].id,
        idF: this.state.cards[1].id,
        board: ''
      }
    });

    const player1Chances = rows.data[0];

    this.state.winPercent = Math.round(player1Chances.wins / player1Chances.count * 100);
    this.state.advice = player1Chances.advice;
    const value = { datasets: [{ data: [], backgroundColor: [] }], labels: [] };
    player1Chances.handChances.forEach(data => {
      value.labels.push(data.name);
      value.datasets[0].data.push(Math.round((data.count / player1Chances.count) * 100));
      value.datasets[0].backgroundColor.push(colorHand[data.name]);
    });
    this.setState({ rows: value });
  }

  render() {
    const { classes } = this.props;

    //if (this.state.rows.datasets.length > 0) {
      return (
        <Grid container className={classes.root}>
          <TopBar />
          <Grid item xs={2} className={classes.leftContent}>
            <MenuBar />
          </Grid>
          <Grid item xs={5} className={classes.rightContent}>
            <div className={classes.cardList}>
              <CardsTool getRealCard={this.getRealCard.bind(this)} which={1}
                cards={this.state.cards} />
            </div>
          </Grid>
          <Grid item xs={5} className={classes.rightContent}>
            <div className={classes.cardList}>
              <CardsTool which={2} getRealCard={this.getRealCard.bind(this)}
                cards={this.state.cards} />
            </div>
          </Grid>
          <Grid item xs={2} className={classes.leftContent}>
          </Grid>
          <Grid item xs={10} className={classes.rightContent}>
            <div className={classes.button}>
              <Fab variant='extended' aria-label='Delete' className={classes.fab} onClick={this.getData.bind(this)}>
                <NavigationIcon className={classes.extendedIcon} />
                Ask
              </Fab>
            </div>
            <div className={classes.lastItem}>
            <div className={classes.percentageWin}>
                <Typography variant="h5">{this.state.advice}</Typography>
              </div>
              <div className={classes.percentageWin}>
                <Typography variant="h5">{this.state.winPercent} % de chances de gagner la main avec un(e) {this.state.cards[1].fullName} et un(e) {this.state.cards[2].fullName}</Typography>
              </div>
              <Pie
                rows={this.state.rows}
              />
            </div>
          </Grid>
        </Grid>
      );
    /*} else {
      this.getData();
      return (<span></span>);
    }*/
  }
}

AssistantHBHPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'AssistantHBHPage' })(AssistantHBHPage);
const connected = connect()(styled);
export default connected;
