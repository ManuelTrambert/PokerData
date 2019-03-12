import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from '../Menu/index';
import TopBar from '../../containers/TopBar/index';
import Pie from '../../components/pieStats/Pie';
import CardsTool from '../../components/cards/list';
import { listCards } from '../AssistantHandByHand/listCards.config';
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
    marginTop: '10px',
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
const VsCalculator = class VsCalculator extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    winSentence: '',
    rows: {
      datasets: [],
    },
    winPercent: 0,
    cards: [],
    cardTemplate: {
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
    this.state.cardTemplate[which][type] = name;
  }

  async addHand() {
    this.state.cardTemplate[1].id = (listCards.find((card) => {
      return card.letterName === this.state.cardTemplate[1].name && card.letterType === this.state.cardTemplate[1].type;
    })).id;
    this.state.cardTemplate[2].id = (listCards.find((card) => {
      return card.letterName === this.state.cardTemplate[2].name && card.letterType === this.state.cardTemplate[2].type;
    })).id;
    this.state.cardTemplate[1].fullName = (listCards.find((card) => {
      return card.letterName === this.state.cardTemplate[1].name && card.letterType === this.state.cardTemplate[1].type;
    })).fullName;

    this.state.cardTemplate[2].fullName = (listCards.find((card) => {
      return card.letterName === this.state.cardTemplate[2].name && card.letterType === this.state.cardTemplate[2].type;
    })).fullName;

    this.state.cards.push(this.state.cardTemplate);
    this.state.cardTemplate = {
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
    };
    console.log(this.state.cards);
  }

  async getVs() {
    let i = 0;
    let cardList = '';
    this.state.cards.forEach((hand) => {
      if (i === 0) {
        cardList += hand[1].id + ',' + hand[2].id
        i += 1;
      } else {
        cardList += ',' + hand[1].id + ',' + hand[2].id
      }
    });
    console.log(cardList);
    const rows = await api.get(`PokerCalculator/vs`, {
      params: {
        cards: cardList,
        board: ''
      }

    });

    let maxWin = 0;

    for (let i = 0; i < rows.data.length; i += 1) {
      if (rows.data[i].wins > maxWin) {
        const card1 = (listCards.find((card) => {
          return card.letterName === rows.data[i].hand[0][0] && card.letterType === rows.data[i].hand[0][1];
        })).fullName;

        const card2 = (listCards.find((card) => {
          return card.letterName === rows.data[i].hand[1][0] && card.letterType === rows.data[i].hand[1][1];
        })).fullName;
        this.state.winSentence = 'La main : ' + card1 + ', ' + card2 + ' est favorite avec ' + Math.round((rows.data[i].wins / rows.data[i].count) * 100) + '% de chances de gagner';
        maxWin = rows.data[i].wins;
      }
    }

    this.state.cardSentence = 'La liste des mains en jeu est : ';
    let count = 0;
    this.state.cards.forEach((card) => {
      count += 1;
      this.state.cardSentence += card[1].fullName + '/' + card[2].fullName;
      if (count < this.state.cards.length) {
        this.state.cardSentence += ' vs ';
      } else {
        this.state.cardSentence += '.';
      }
    })
    console.log(this.state);
    this.setState({ rows });
  }

  render() {
    const { classes } = this.props;

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
            <Fab variant='extended' aria-label='Delete' className={classes.fab} onClick={this.addHand.bind(this)}>
              <NavigationIcon className={classes.extendedIcon} />
              Ajouter une main
              </Fab>
          </div>
          <div className={classes.lastItem}>
            <div className={classes.percentageWin}>
              <Typography variant="h5">{this.state.winSentence}</Typography>
            </div>
            <div className={classes.percentageWin}>
              <Typography variant="h5">{this.state.cardSentence}</Typography>
            </div>
            <div className={classes.percentageWin}>
              <Fab variant='extended' aria-label='Delete' className={classes.fab} onClick={this.getVs.bind(this)}>
                <NavigationIcon className={classes.extendedIcon} />
                Calculer
              </Fab>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

VsCalculator.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { name: 'VsCalculator' })(VsCalculator);
const connected = connect()(styled);
export default connected;
