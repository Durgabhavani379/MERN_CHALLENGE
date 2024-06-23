import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const TransactionsTable = () => {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState('March');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(`http://localhost:3001/api/transactions`, {
        params: {
          month,
          search,
          page,
          perPage,
        },
      });
      setTransactions(response.data);
    };
    fetchTransactions();
  }, [month, search, page, perPage]);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <div>
      <select value={month} onChange={handleMonthChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search transactions"
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date of Sale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell component="th" scope="row">
                  {transaction.title}
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.dateOfSale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default TransactionsTable;