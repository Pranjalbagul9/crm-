import React,{useState} from 'react'
import AddProspect from './AddProspect';
import PopUp from './PopUp';
import './Prospects.css';
import { CalendarDays } from 'lucide-react';
import { Plus } from 'lucide-react';
import { CiSearch} from "react-icons/ci";
import AddProspect2 from './AddProspect2';



const Prospects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openForm,setOpenForm] = useState(false);
  
  return (
    <div>
    <div className="prospects" style={{color:"black"}}
    >
     
      <h2>Prospects</h2>  
            
      
      
      <div className='prospectbuttons'>
        <div className='searchpros'>
        <CiSearch style={{color:'black'}}/>
            <input className="searchbar" type="search" placeholder="Search" />
        
        </div>
    <button  
      onClick={() => setOpenModal(true)}
      style={{
      backgroundColor: '#c7ecee',
      color: 'black',
      
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',
      marginLeft:'580px',
    }} className=""> Enter Prospect
    <i className="fa fa-download"></i>
    </button>
  <AddProspect
  open={openModal}
  onClose={()=> setOpenModal(false)} />
 
<button  
      onClick={() => setShowModal(true)}
      style={{
      backgroundColor: '#c7ecee',
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
      backgroundColor: '#c7ecee',
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
      backgroundColor: '#c7ecee',
      color: 'black',
      padding: '10px 15px',
      borderRadius: '5px',
      border: 'none',
      margin:'10px',
      cursor: 'pointer',
    }} className=""> Appoinments
    <i className="fa fa-download"></i>
    </button>
    </div> 
    
  
   
    </div>
    <div className='card-prospects'>
    <div className='card1'>
        <h4>New Enquiry  </h4> 
                <p>30</p>
                 
                   {/* <BsFillBellFill className='card_icon'/> */}
        </div>
        <div className='card2'>
        <h4>Quotation  </h4>
                <p>30</p>
                    
                   {/* <BsFillBellFill className='card_icon'/> */}
        </div>
        <div className='card3'>
        <h4>Discussion  </h4>
                <p>30</p>
                    
                   {/* <BsFillBellFill className='card_icon'/> */}
        </div>
        <div className='card4'>
        <h4>PO </h4>
                <p>30</p>
                    
                   {/* <BsFillBellFill className='card_icon'/> */}
        </div>
            
        </div> 
      <div className='newenq'>
        <button onClick={() => setOpenForm(true)} className='newenqbtn'>
            <h2>+</h2>
        </button>
        <AddProspect2
          open={openForm}
          onClose={()=> setOpenForm(false)} />
        <button onClick={() => setOpenForm(true)} className='newenqbtn'>
            <h2>+</h2>
        </button>
        <AddProspect2
          open={openForm}
          onClose={()=> setOpenForm(false)} />
        <button onClick={() => setOpenForm(true)} className='newenqbtn'>
            <h2>+</h2>
        </button>
        <AddProspect2
          open={openForm}
          onClose={()=> setOpenForm(false)} />
        <button onClick={() => setOpenForm(true)} className='newenqbtn'>
            <h2>+</h2>
        </button>
        <AddProspect2
          open={openForm}
          onClose={()=> setOpenForm(false)} />
      </div>
      
                             
</div>
  )
}

export default Prospects