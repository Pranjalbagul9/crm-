import React from 'react';
import './Quotations.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


function createData(QNo, Type, Customer, Issued_on,Issued_by,valid_till,Rejection_response) {

  return { QNo, Type, Customer, Issued_on,Issued_by,valid_till,Rejection_response };
}


const rows = [
  createData('1', 'Type 1','Joshua Rolluffs','2024-02-08','Issuer 1','2025-02-08', 'Response 1'),
  createData('2', 'Type 2','John Doe','2024-01-08','Issuer 2','2025-02-08', 'Response 2'),
  createData('3', 'Type 3','Kevin Vandy','2024-03-08','Issuer 3','2025-02-08', 'Response 3'),
];
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <h2>Quotations</h2>
      <div className='create-quotation'>
      
      <button onClick={()=>navigate("/quotationform")}
      style={{ backgroundColor: '#7ed6df',
      color: 'black',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',}}
      >Create Quotation</button>
      <button  
       style={{
          backgroundColor: '#7ed6df',
          color: 'black',
          padding: '10px 15px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          }} className="">
          Export <i className="fa fa-download"></i>
          </button>
       
      </div>
    <div className='dropdown'>
    
    <select className='dropdown-select'>
      <option  value="">This Month</option>
      <option value="">Last Month</option>
      <option value="">Expired</option>
      <option value="">Not expired</option>
      <option value="">Other</option>
    </select>
    <select className='dropdown-select' >
      <option value="">All</option>
      <option value="">Open</option>
      <option value="">Rejected</option>
      <option value="">Converted</option>
      <option value="">Cancelled</option>
      <option value="">Replaced</option>
    </select>
    
    </div>
    <div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  QNo
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Type
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Customer
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Issued on
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Issued by
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Valid till
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  rejection response
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                   <TableCell key={index} align='right'>
                         {row.QNo}
                        </TableCell>
                        <TableCell key={index} align='right'>
                         {row['Type']} {/* Accessing the 'Type' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         {row['Customer']} {/* Accessing the 'Customer' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         {row['Issued_on']} {/* Accessing the 'Issued on' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         {row['Issued_by']} {/* Accessing the 'Issued by' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         {row['valid_till']} {/* Accessing the 'valid till' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         {row['Rejection_response']} {/* Accessing the 'Rejection response' field */}
                         </TableCell>
                         <TableCell key={index} align='right'>
                         <div style={{display:'flex',justifyContent:'flex-end'}}className="tableaction">
                            <div style={{marginLeft:'5px',color:'#00b894'}}><EditIcon />
                            <span style={{color:'#d63031'}}><DeleteIcon /></span>
                            </div>
                            
                         </div>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  


    </div>
    
    </div>
  );
}
