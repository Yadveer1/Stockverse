import { useEffect, useState } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Orders () {
    const [AllOrders, setAllOrders] = useState([]);
    const [isOrder, setisOrders] = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        setAllOrders(res.data);
      })
    },[])

    Orders = () => {
      if(AllOrders.length > 0) {
        setisOrders(true);
      } else {
        setisOrders(false);
      }

    }

  return (
    <div className="orders">
      <div className="no-orders">
        {AllOrders.length === 0 && <p>You haven't placed any orders today</p>}

        <TableContainer
          component={Paper}
          sx={{
            width: "95%",
            maxWidth: 900,
            minWidth: 320,
            margin: "0 auto",
            overflowX: "auto"
          }}
        >
          <Table sx={{ minWidth: 320 }} aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell >Stock</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllOrders.map((stock, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {stock.name}
                  </TableCell>
                  <TableCell align="center">{stock.qty}</TableCell>
                  <TableCell align="center">₹{stock.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;
