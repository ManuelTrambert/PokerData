import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/es/Paper/Paper';
import Table from '@material-ui/core/es/Table/Table';
import TableBody from '@material-ui/core/es/TableBody/TableBody';
import TableRow from '@material-ui/core/es/TableRow/TableRow';
import TableCell from '@material-ui/core/es/TableCell/TableCell';
import {withStyles} from '@material-ui/core/styles';
import TableHead from '@material-ui/core/es/TableHead/TableHead';

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 700,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});


class DashboardArray extends Component {
  submit = values => {
    this.props.onSubmit(values);
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  state = {
    rows: [],
    page: 0,
    rowsPerPage: 15,
  };

  render() {
    const {rows} = this.props;
    const classes = this.props.classes;
    const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, rows.length - this.state.page * this.state.rowsPerPage);
    this.state.rows = rows;
    return (
      <div>
        <div className={classes.root}>
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Difference</TableCell>
                    <TableCell align="right">Number of players</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => (
                    <TableRow key={row.id}>
                      <TableCell align="right">
                        {row.type}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.difference}</TableCell>
                      <TableCell align="right">{row.nbPlayers}</TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{height: 48 * emptyRows}}>
                      <TableCell colSpan={6}/>
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 15]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={this.state.rowsPerPage}
                      page={this.state.page}
                      SelectProps={{
                        native: true,
                      }}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

DashboardArray.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

const styled = withStyles(styles, {name: 'DashboardArray'})(DashboardArray);

export default styled;
