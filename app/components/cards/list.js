import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import FormLabel from '@material-ui/core/es/FormLabel/FormLabel';
import FormControlLabel from '@material-ui/core/es/FormControlLabel/FormControlLabel';
import FormGroup from '@material-ui/core/es/FormGroup/FormGroup';
import Checkbox from '@material-ui/core/es/Checkbox/Checkbox';
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({
  spaceBetween: {
    marginTop: '20px',
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  smallTitle: {
    color: '#000000',
    borderBottom: '1px solid'
  }
});


const CardsTool = class CardsTool extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    AS: false,
    KING: false,
    QUEEN: false,
    JACK: false,
    TEN: false,
    NINE: false,
    EIGHT: false,
    SEVEN: false,
    SIX: false,
    FIVE: false,
    FOUR: false,
    THREE: false,
    TWO: false,
    HEART: false,
    SPADE: false,
    CLUB: false,
    DIAMOND: false,

    error: null
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.checked});
  };

  render() {
    const {
      which,
      getRealCard,
      classes,
    } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend' className={classes.smallTitle}>Choisi ta carte n°{which}</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.AS} onChange={(e) => {
                    getRealCard('A', 'name', which);
                    this.handleChange('AS')(e);
                  }} value='AS'/>
                }
                label='AS'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.KING} onChange={(e) => {
                    getRealCard('K', 'name', which);
                    this.handleChange('KING')(e);
                  }} value='KING'/>
                }
                label='Roi'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.QUEEN}
                    onChange={(e) => {
                      getRealCard('Q', 'name', which);
                      this.handleChange('QUEEN')(e);
                    }}
                    value='QUEEN'
                  />
                }
                label='Dame'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.JACK}
                    onChange={(e) => {
                      getRealCard('J', 'name', which);
                      this.handleChange('JACK')(e);
                    }}
                    value='JACK'
                  />
                }
                label='Valet'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.TEN} onChange={(e) => {
                    getRealCard('T', 'name', which);
                    this.handleChange('TEN')(e);
                  }} value='TEN'/>
                }
                label='10'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.NINE} onChange={(e) => {
                    getRealCard('9', 'name', which);
                    this.handleChange('NINE')(e);
                  }}
                            value='NINE'/>
                }
                label='9'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.EIGHT}
                    onChange={(e) => {
                      getRealCard('8', 'name', which);
                      this.handleChange('EIGHT')(e);
                    }}
                    value='EIGHT'
                  />
                }
                label='8'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.SEVEN}
                    onChange={(e) => {
                      getRealCard('7', 'name', which);
                      this.handleChange('SEVEN')(e);
                    }}
                    value='SEVEN'
                  />
                }
                label='7'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.SIX} onChange={(e) => {
                    getRealCard('6', 'name', which);
                    this.handleChange('SIX')(e);
                  }} value='SIX'/>
                }
                label='6'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.FIVE} onChange={(e) => {
                    getRealCard('5', 'name', which);
                    this.handleChange('FIVE')(e);
                  }}
                            value='FIVE'/>
                }
                label='5'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.FOUR}
                    onChange={(e) => {
                      getRealCard('4', 'name', which);
                      this.handleChange('FOUR')(e);
                    }}
                    value='FOUR'
                  />
                }
                label='4'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.THREE}
                    onChange={(e) => {
                      getRealCard('3', 'name', which);
                      this.handleChange('THREE')(e);
                    }}
                    value='THREE'
                  />
                }
                label='3'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.TWO}
                    onChange={(e) => {
                      getRealCard('2', 'name', which);
                      this.handleChange('TWO')(e);
                    }}
                    value='TWO'
                  />
                }
                label='2'
              />
            </FormGroup>
          </FormControl>
          <FormControl required error={this.state.error} component='fieldset' className={classes.formControl}>
            <FormLabel component='legend' className={classes.smallTitle}>Choisi le sigle de ta carte</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.HEART} onChange={(e) => {
                    getRealCard('h', 'type', which);
                    this.handleChange('HEART')(e);
                  }}
                            value='HEART'/>
                }
                label='Coeur'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.SPADE} onChange={(e) => {
                    getRealCard('s', 'type', which);
                    this.handleChange('SPADE')(e);
                  }}
                            value='SPADE'/>
                }
                label='Pique'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.DIAMOND}
                    onChange={(e) => {
                      getRealCard('d', 'type', which);
                      this.handleChange('DIAMOND')(e);
                    }}
                    value='DIAMOND'
                  />
                }
                label='Carreau'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.CLUB}
                    onChange={(e) => {
                      getRealCard('c', 'type', which);
                      this.handleChange('CLUB')(e);
                    }}
                    value='CLUB'
                  />
                }
                label='Trèfles'
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    )
  }
};

CardsTool.propTypes = {
  classes: PropTypes.object.isRequired,
  getRealCard: PropTypes.func.isRequired,
  which: PropTypes.number.isRequired
};

export default withStyles(styles)(CardsTool);
