import React ,{useState, useEffect}from 'react'
import './EditEnq.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TrendingUp } from 'lucide-react';
import { CgNotes } from "react-icons/cg";
import { FaRegNoteSticky } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbMessage2Plus } from "react-icons/tb";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const  EditEnq = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  console.log("ID prop:", id);
  const [editdata,setEditData] = useState({
    companyName:'',
    requirements:'',
    notes:'',
    lastInteraction:'',
    nextInteraction:'',
     });
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/api/v1/Enquiry/enquiryGet/${id}`);
         console.log(res);
        setEditData(res.data.enquiry);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, [id]);

    const [textInput, setTextInput] = useState('');
    const [enteredTexts, setEnteredTexts] = useState([]);
    
    
    
    
      axios.put(`http://localhost:4001/api/v1/Enquiry/enquiryUpdate${id}`,editdata )
        
      
        .then(res => {
          console.log('Data updated successfully:', res.data);
          navigate('/enquiries')
          // Optionally, you can update your local state or perform any other action upon successful update
        })
        .catch(err => console.error('Error updating data:', err));
    
    //   const handleSubmitl = (event) => {
    //     event.preventDefault(); // Prevent default form submission behavior
    //     if (textInput.trim() !== '') {
    //       // If input is not empty, add it to the list of entered texts
    //       setLastEnter([...enteredTexts, textInput]);
    //       setTextInputlt(''); // Clear the input field after submission
    //     }
    //   };
    // if(!open) return null;
   

    
    
    // const handlePost = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post("http://localhost:4001/api/v1/editenq/editEnqs",post)
    //     console.log(response.data);
    //     setPost({
    //       lastInteraction:'',
    //       nextInteraction:'',
    //       notes:'',
    //     })
    //   } catch(error) {
    //     console.error('Error occurred while submitting form:', error);
    //   }
    // }

    return (
   
      // <div onClick={onClose} className='EditEnq'>
      //    <div  onClick={(e) => {e.stopPropagation();}} className='formeditenq'>
      //    <p className='closeBtn312' onClick={onClose}>
      //       X
      //    </p>
        
    <div className="container31enq">
    <form >
  <div  className="header312">
    <h2 
    // onChange={e => setEditData({...editdata,companyName: e.target.value})} 
    style={{textAlign:'left',marginLeft:20}}>
      {editdata.companyName}  </h2>
    <div className="head_rightenq">
    
   
      <div  className="head_button12" style={{backgroundColor:'#fad390'}}>
        <a className="emailenq" href="https://www.gmail.com">
          {" "}
          <MdOutlineMail style={{color:'black'}}/> <i className="bi bi-envelope-fill"  />
        </a>
      </div>

      <div className="head_button2enq" style={{backgroundColor:'#fad390'}}>
        <a className="emailenq" href="#">
          {" "}
          <FaWhatsapp  style={{color:'black'}} /> <i className="bi bi-pencil-fill" />
        </a>
      </div>
     
      <div className="head_buttond" style={{backgroundColor:'#fad390',width:'50px'}}>
        <a className="emailenq" href="https://www.gmail.com">
          {" "}
          <RiDeleteBin6Line style={{color:'black'}}/><i className="bi bi-envelope-fill" />
        </a>
      </div>
      <div className="head_button3enq" style={{backgroundColor:'#fad390',width:'95%'}}>
        <a className="emailenq" href="#" id="text">
          {" "}
         <i className="bi bi-cash" style={{color:'black',marginRight:'0px'}}> Move to prospect</i>
        </a>
      </div>
      <div>
     
      </div>
      
      <div className="head_button4enq">
        <a href="close">
          {" "}
          <i className="bi bi-x" style={{ color: "black" }} />{" "}
        </a>
      </div>
    </div>
  </div>
  <div className="button313">
   
</div>
  <div className="main31enq">
    <div className="rgt" style={{marginLeft:'-30px',marginTop:'20px'}}>
      <div className="main_headerenq">
        <form >
        <p style={{ fontSize: 15, color: "#c0392b", fontWeight: "bold",textAlign:'left'}}>
          {" "}
         <span><FaRegNoteSticky /> Requirements  </span> 
         </p>
         <ul >
          {/* {enteredTexts.map((text, index) => (
            <li style={{textAlign:'left',marginLeft:'10px',listStyleType:'circle',}}key={index}>{text}</li>
          ))} */}
        </ul>
         
       
        <textarea name="" id="" cols="40" rows="3" 
         style={{width:'90%',position:'relative',left:'10px',bottom:'5px',outlineColor:'#ced6e0',borderColor:'#dfe4ea'}}  placeholder="Enter here..."
        value={editdata.requirements}
        onChange={e => setEditData({...editdata,requirements: e.target.value})}
        // onChange={handleInputChange}
        ></textarea>
        {/* <button style={{position:'relative',bottom: '30px',marginLeft:'20px'
          }} type="submit">Save</button> */}
        <br />
       
        </form>
      </div>
     
    
    </div>
    <div className="right_containerenq" style={{width:'48%',marginTop:'30px'}}>
      <p
        style={{ fontSize: 15, fontWeight: "bold", color: "#c0392b",textAlign:'left' }}
      >
        {" "}
        <CgNotes /> Last Interaction
      </p>
      
      <textarea name="" id="" cols="40" rows="3" value={editdata.lastInteraction}
        onChange={e => setEditData({...editdata,lastInteraction: e.target.value})}
        style={{width:'90%',height:'40%',marginTop:4,outlineColor:'#ced6e0',borderColor:'#dfe4ea',
        position:'relative',bottom:'9px',left:'10px'}}  placeholder="Enter here..."
        ></textarea>
      {/* <CiEdit style={{color:'#EA2027',fontSize:20,fontWeight:'bold',marginLeft:4}} */}
    </div>
  </div>
  <div className="main31">
    <div className="rgt">
      <div className="main_headerenq" style={{marginLeft:"-2px"}}>
      <form >
        <p style={{ fontSize: 15, color: "#c0392b", fontWeight: "bold",textAlign:'left'}}>
          {" "}
         <span><BiMessageRoundedDetail /> Next Interaction  </span> 
         </p>
         
       
         <textarea name="" id="" cols="40" rows="3" value={editdata.nextInteraction}
        onChange={e => setEditData({...editdata,nextInteraction: e.target.value})}
         style={{width:'90%',height:'40%',outlineColor:'grey',
         position:'relative',bottom:'5px',left:'10px',outlineColor:'#ced6e0',borderColor:'#dfe4ea'}}  placeholder="Enter here..."
        ></textarea>
        {/* <button style={{position:'relative',bottom: '30px',marginLeft:'20px'
          }} type="submit">Save</button> */}
        <br />
       
        </form>
      </div>
     
    
    </div>
    <div className="right_containerenq" style={{marginLeft:'38px',width:'60%'}}>
      <p
        style={{  fontSize: 15, fontWeight: "bold", color: "#c0392b",textAlign:'left' }}
      >
        {" "}
        <TbMessage2Plus />  Notes

      </p>
      <textarea name="" id="" cols="40" rows="3" 
           value={editdata.notes}
           onChange={e => setEditData({...editdata,notes: e.target.value})}
         style={{width:'90%',height:'40%',marginTop:7,
         position:'relative',bottom:'15px',left:'10px',outlineColor:'#ced6e0',borderColor:'#dfe4ea'}}  placeholder="Enter here..."
          ></textarea>
     
    </div>
   
  </div>
  <div>
    <button style={{ position:'absolute',left:'88%',bottom:'15%',borderRadius:'10px',border: '2px solid #27ae60',backgroundColor:'none',padding: '5px 5px'}} 
    >
    <div className="head_button3" style={{backgroundColor:'white',width:'50px',height:'20px'}}>
        <a className="emailenq" href="#" id="text">
          {" "}
         <i className="bi bi-cash" style={{color:'green',fontSize:'medium'}}> Save</i>
        </a>
      </div>
      </button>
    </div>
  </form>
  
</div>

// </div>
// </div>

  )
        }

export default EditEnq