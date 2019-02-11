import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import {withStyles} from '@material-ui/core/styles';
import api from '../../api';

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
  tableParent: {
    marginBottom: '20%'
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});


class DashboardArray extends Component {
  submit = values => {
    this.props.onSubmit(values);
  };

  state = {
    rows: {},
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  render() {
    const { rows, rowsPerPage, page } = this.props;
    const classes = this.props.classes;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <div className={classes.tableParent}>
        <div className={classes.root}>
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
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
                      rowsPerPageOptions={[5, 10]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
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
  rows: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

const styled = withStyles(styles, {name: 'DashboardArray'})(DashboardArray);

export default styled;
