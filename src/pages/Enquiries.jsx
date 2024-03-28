import React from "react";
import "./Enquiries.css";
import { Button } from "bootstrap";
import * as XLSX from "xlsx";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { read, utils, writeFile } from "xlsx";
import { BsFillEyeFill, BsFillPencilFill } from "react-icons/bs";
import Add from "./Add";
import DataTable from "react-data-table-component";
import axios from 'axios'
import TableEnq from "./TableEnq";
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
import EditEnq from "./EditEnq";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from "react-router-dom";
// const columns = [
//   {
//     name: "Company",
//     selector: (row) => row.company,
//   },
//   {
//     name: "Contact",
//     selector: (row) => row.contact,
//   },
//   {
//     name: "Source",
//     selector: (row) => row.source,
//   },
//   {
//     name: "Since",
//     selector: (row) => row.since,
//   },
//   {
//     name: "POC",
//     selector: (row) => row.poc,
//   },
//   {
//     name: "Last Talk",
//     selector: (row) => row.last,
//   },
//   {
//     name: "Next Appoinment",
//     selector: (row) => row.next,
//   },
//   {
//     name: "Action",
//     selector: (row) => row.action,
//   },
// ];
// const data = [
//   {
//     company: "Abc",
//     contact: "abc",
//     source: "walkin",
//     since: "1-1-2023",
//     poc: "executive",
//     last: "1-1-2023",
//     next: "2-2-2023",
//     action: (
//       <div
//         style={{ display: "flex", justifyContent: "flex-end" }}
//         className="tableaction"
//       >
//         <button
//           style={{
//             marginLeft: "5px",
//             color: "#218c74",
//             border: "none",
//             backgroundColor: "white",
//           }}
//         >
//           <EditIcon />
//         </button>
//         <button
//           style={{ color: "green", border: "none", backgroundColor: "white" }}
//         >
//           <WhatsAppIcon />
//         </button>
//         <button
//           style={{ color: "#d63031", border: "none", backgroundColor: "white" }}
//         >
//           <DeleteIcon />
//         </button>
//       </div>
//     ),
//   },
//   {
//     company: "Abc",
//     contact: "abc",
//     source: "walkin",
//     since: "1-1-2023",
//     poc: "executive",
//     last: "1-1-2023",
//     next: "2-2-2023",
//     action: (
//       <div
//         style={{ display: "flex", justifyContent: "flex-end" }}
//         className="tableaction"
//       >
//         <button
//           style={{
//             marginLeft: "5px",
//             color: "#218c74",
//             border: "none",
//             backgroundColor: "white",
//           }}
//         >
//           <EditIcon />
//         </button>
//         <button
//           style={{ color: "green", border: "none", backgroundColor: "white" }}
//         >
//           <WhatsAppIcon />
//         </button>
//         <button
//           style={{ color: "#d63031", border: "none", backgroundColor: "white" }}
//         >
//           <DeleteIcon />
//         </button>
//       </div>
//     ),
//   },
// ];
      {/* http://localhost:3001/api/v1/Enquiry/enquiryGetAll */}
function createData(Company,Contact,Source,Since,POC,Last_Talk,Next) {

  return { Company,Contact,Source,Since,POC,Last_Talk,Next };
}
// const rows= [
//   createData("ABC Inc.",
//   "John Doe",
//   "Referral",
//   "2023-01-15",
//   "Jane Smith",
//   "2023-05-20",
//   "2023-07-15")
// ]

function deleteEnq(_id) {

  axios.delete(`http://localhost:4001/api/v1/Enquiry/enquiryDelete/${_id}`)
  .then((response) => {
     console.warn(response.data);
     
  })
  .catch((error) => {
     console.error(error);
  });
}

export default function StickyHeadTable() {
  const [data, setData] = useState([]);
  const [select, setselect] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editenq, setEditEnq] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedExecutive, setSelectedExecutive] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [records,setRecords] = useState([]);
  
  const {id} = useParams();
  console.log(id);
  // useEffect(() => {
  //   fetch("http://localhost:3001/api/v1/Enquiry/enquiryGetAll")
  //   .then(response => response.json())
  //   .then(data => setRecords( data))
  //   .catch(err => console.log(err))
  // }, []);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/api/v1/Enquiry/enquiryGetAll`);
      console.log(response.data); // Log the response data to check its structure
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
   const handleDelete = (id) => {
    const updatedData = data.filter(row => row._id !== id);
    setData(updatedData); 
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditEnq(false);
  };
 

  const handleFileUpload = (e) => {
    const files = e.target.files;

    if (files.length) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const wb = XLSX.read(data, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const rows = XLSX.utils.sheet_to_json(ws);
        setData(rows);
        setselect(rows);
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleExport = () => {
    const headings = [
      [
        "Id",
        "Company",
        "Contract",
        "Source",
        "Since",
        "POC",
        "Last_Talk",
        "Next_Appointment",
      ],
    ];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, select, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "report.xlsx");
  };

  {
    /*
    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload =(e) =>{
            const data = e.target.result;
            const workbook = XLSX.read(data,{type:"binary"});
            const sheetName=workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
        };
    }
*/
  }

  const filteredData = select.filter((item) => {
    return (
      (selectedStatus === "" || item.status === selectedStatus) &&
      (selectedTime === "" || item.time === selectedTime) &&
      (selectedSource === "" || item.source === selectedSource) &&
      (selectedExecutive === "" || item.executive === selectedExecutive) &&
      (selectedAppointment === "" || item.appointment === selectedAppointment)
    );
  });

  return (
    <div>
      <div className="enquiries">
        <h2>Enquiries</h2>
        <div className="dropdown">
          <select
            className="select"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Active</option>
            <option value="">Inactive</option>
          </select>
          <select
            className="select"
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">This month</option>
            <option value="">Last month</option>
            <option value="">Others</option>
          </select>
          <select
            className="select"
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            <option value="">Select source</option>
            <option value="">Email</option>
            <option value="">Walkin</option>
            <option value="">Whatsapp</option>
            <option value="">Other</option>
          </select>
          <select
            className="select"
            onChange={(e) => setSelectedExecutive(e.target.value)}
          >
            <option value="">Select Executive</option>
            <option value="">Unassigned</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select
            className="select"
            onChange={(e) => setSelectedAppointment(e.target.value)}
          >
            <option value="">Appoinment date</option>
            <option value="">Today</option>
            <option value="">Tomorrow</option>
            <option value="">Others</option>
          </select>
        </div>
        <div>
          <div>
            <button
              onClick={() => setOpenModal(true)}
              style={{
                backgroundColor: "#01a3a4",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              Add New Enquiry
            </button>
            <Add open={openModal} onClose={handleCloseModal} />

            <button
              style={{
                backgroundColor: "#01a3a4",
                color: "white",
                padding: "10px 15px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleExport}
              className=""
            >
              Export <i className="fa fa-download"></i>
            </button>

            <label
              htmlFor="fileInput"
              className="custom-button"
              style={{
                backgroundColor: "#01a3a4",
                color: "white",
                fontFamily: "Montserrat ",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                margin: "10px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Choose File
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div className="excel">
            <div className="row mb-2 mt-5">
              <div className="col-sm-6 offset-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group">
                      <div className="custom-file">
                        {/* <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleFileUpload}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/> */}

                        {/* <button className="custom-file-label" htmlFor="inputGroupFile">Choose file</button> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TableEnq /> */}

      <div>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{maxHeight:440}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Company
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Contact
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Source
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Since
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >POC
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Last_Talk
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Next
                  </TableCell>
                  <TableCell
                  align='right'
                  style={{ minWidth:80}}
                  >Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                records.map((record) => {
                  return(
                    <TableRow hover role="checkbox" tabIndex={-1} key={record._id}>
                      <TableCell align='right'>
                        {record.companyName}
                      </TableCell>
                      <TableCell align='right'>
                        {record.firstName}{record.lastName}
                      </TableCell>
                      <TableCell align='right'>
                        {record.source}
                      </TableCell>
                      <TableCell  align='right'>
                        {record.since}{new Date(record.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell align='right'>
                        {record.executive}
                      </TableCell>
                      <TableCell align='right'>
                        {record.Last_Talk}
                      </TableCell>
                      <TableCell align='right'>
                        {record.Next}
                      </TableCell>
                      <TableCell  align='right'>
                      <div style={{display:'flex',justifyContent:'flex-end'}}className="tableaction">
                            <div  
                            style={{marginLeft:'5px',color:'#00b894'}}>
                            <Link to={`/editenq/${record._id}`}>
                             <EditIcon  /></Link>
                             {/* <EditEnq open={editenq} onClose={handleCloseModal} id={id} /> */}
                             
                            <span style={{color:'green'}}><WhatsAppIcon /></span>
                            <span><InfoOutlinedIcon style={{color:'black'}}/></span>
                            <span style={{color:'#d63031'}}><DeleteIcon onClick={() => deleteEnq(record._id)}/></span>
                           
                            
                            </div>
                            
                         </div>
                      </TableCell>
                    </TableRow>
                  )
                })
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
  );
}

{
  /*  <div className="App">
        <input type="file" 
        accept=".xlsx, .xls"
        onChange={handleFileUpload}/>
        
        {data.length > 0 && (
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>

                            */
}
