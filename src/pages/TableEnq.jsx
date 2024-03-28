import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TableEnq = () => {
    const [page, setPage] = useState(0);
    const [totalRows, setTotalRows] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        };
    
    const handleChangeRowsPerPage = (event) => {
        if (event && event.target && event.target.value) {
        setRowsPerPage(+event.target.value);
        setPage(0);
        }
        };
const columns = [
	{
		name: 'Company',
		selector: row => row.company,
	},
	{
		name: 'Contact',
		selector: row => row.contact,
	},
    {
		name: 'Source',
		selector: row => row.source,
	},
    {
		name: 'Since',
		selector: row => row.since,
	},
    {
		name: 'POC',
		selector: row => row.poc,
	},
    {
		name: 'Last Talk',
		selector: row => row.last,
	},
    {
		name: 'Next Appoinment',
		selector: row => row.next,
	},
    {
		name: 'Action',
		selector: row => row.edit,
        cell:(row) => (
            <div >
          <button style={{ marginLeft: '5px', color: '#218c74', border: 'none', backgroundColor: 'white' }}><EditIcon /></button>
          <button style={{ color: 'green', border: 'none', backgroundColor: 'white' }}><a href='https://web.whatsapp.com/'><WhatsAppIcon /></a></button>
          <button style={{ color: '#d63031', border: 'none', backgroundColor: 'white' }}><DeleteIcon /></button>
        </div>
        )
	},
];
const data = [
    {
      company : 'Abc',
      contact : 'abc',
      source: 'walkin',
      since :'1-1-2023',
      poc :'executive',
      last : '1-1-2023',
      next : '2-2-2023',
     
  },
  {
    company : 'Abc',
    contact: 'abc',
    source: 'walkin',
    since :'1-1-2023',
    poc :'executive',
    last : '1-1-2023',
    next : '2-2-2023',
    
  },

]


	return (
		<DataTable
			columns={columns}
			data={data}
            selectableRows={true}
            //onSelectedRowsChange={handleSelected}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangePage={handleChangePage}
            dense
            highlightOnHover
            pointerOnHover
            theme=''
		/>
	);
    }

export default TableEnq