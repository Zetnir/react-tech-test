import {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTable(props) {

    useEffect(() => {
      console.log(props.data)
    }, [])
    
  return (
    <div style={{"padding":"0px 20px 0px 20px"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Coins Name</b></TableCell>
            <TableCell align="right"><b>Current Price (USD)</b></TableCell>
            <TableCell align="right"><b>Opening price (USD)</b></TableCell>
            <TableCell align="right"><b>Price Increase</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((coinData) => (
            <TableRow
              key={coinData.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {coinData.name}
              </TableCell>
              <TableCell align="right">{coinData.currentPrice}</TableCell>
              <TableCell align="right">{coinData.openingPrice}</TableCell>
              <TableCell align="right">{coinData.increasePrc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default DataTable;