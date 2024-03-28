import React,{useState,useEffect} from 'react'
import AddCustomer from './AddCustomer'
import PopUp from './PopUp';
import { CalendarDays } from 'lucide-react';
import { CiSearch} from "react-icons/ci";
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
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';


function createData(Company,Contact,Relation,Last_Talk,Next_Action) {

  return { Company,Contact,Relation,Last_Talk,Next_Action };
}

// const rows = [
//   createData('ABC Corp', 'John Doe', 'Client', '2023-10-20', 'Follow-up call'),
//   createData('XYZ Inc', 'Jane Smith', 'Prospect', '2023-09-05', 'Send proposal'),
//   createData('LMN Ltd', 'Mike Johnson', 'Client', '2023-11-18', 'Schedule meeting'),
//   createData('PQR Inc.', 'Sarah Lee', 'Prospect', '2023-12-04', 'Send brochure'),
//   createData('DEF Co.', 'David Brown', 'Client', '2023-10-30', 'Follow-up email'),
  
// ];
export default function StickyHeadTable() {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [customerdata , setCustomerData] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/v1/customers/customersGetAll");
      console.log(response.data); // Log the response data to check its structure
      setCustomerData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      
    <div className="customers" style={{color:"black"}}
    >
      <h2>Customers</h2>
      </div>
      <div>
      <div className='searchpros'>
        <CiSearch style={{color:'black'}}/>
            <input className="searchbar" type="search" placeholder="Search" />
        
        </div>
    <button  
      onClick={() => setOpenModal(true)}
      style={{
      backgroundColor: '#7ed6df',
      color: 'black',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      marginLeft:'750px',
      cursor: 'pointer',
    }} className=""> Enter Customer
    <i className="fa fa-download"></i>
    </button>
  <AddCustomer
  open={openModal}
  onClose={()=> setOpenModal(false)} />
 
<button  
      onClick={() => setShowModal(true)}
      style={{
      backgroundColor: '#7ed6df',
      color: 'black',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',
      
    }} className=""> Import
    <i className="fa fa-download"></i>
    </button>
    {showModal && <PopUp onClose={() => setShowModal(false) } />}
  

<button  
      
      style={{
      backgroundColor: '#7ed6df',
      color: 'black',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',
    }} className=""> Export
    <i className="fa fa-download"></i>
    </button>
    <button  
      style={{
      backgroundColor: '#7ed6df',
      color: 'black',
      padding: '5px 7px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',
    }} className=""> <CalendarDays/>
    <i className="fa fa-download"></i>
    </button>
  
    </div> 
    <div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table >
          <TableHead>
            <TableRow>
            <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Company
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Contact
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Relation
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Last_Talk
                </TableCell>
                <TableCell
                  align='right'
                  style={{ minWidth: 80 }}
                >
                  Next_Action
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
            {
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              customerdata.map((list) =>{
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={list._id}>
                   <TableCell  align='right'>
                         {list.companyName}
                        </TableCell>
                        <TableCell  align='right'>
                         {list.firstName}{list.lastName}
                        </TableCell>
                        <TableCell  align='right'>
                        {/* {Object.keys(list.interestedIn).filter(key => list.interestedIn[key]).join(', ')} */}
                        </TableCell>
                        <TableCell  align='right'>
                         
                        </TableCell>
                        <TableCell  align='right'>
                         
                        </TableCell>
                         <TableCell  align='right'>
                         <div style={{display:'flex',justifyContent:'flex-end'}}className="tableaction">
                            <div style={{marginLeft:'5px',color:'#00b894'}}><EditIcon />
                            <span style={{color:'green'}}><WhatsAppIcon /></span>
                            <span style={{color:'#d63031'}}><DeleteIcon /></span>
                            
                            </div>
                            
                         </div>
                        </TableCell>
                  </TableRow>
                );
              } )
              }
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
      </div>                        
</div>
  )
}

