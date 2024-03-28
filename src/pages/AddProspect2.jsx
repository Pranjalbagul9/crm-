import React ,{useState}from 'react'
import './AddProspect2.css'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import PopUp2 from './PopUp2'
import { TrendingUp } from 'lucide-react';


const AddProspect2 = ({open, onClose,}) => {
  const [openPopUp,setOpenPopUp] = useState(false);
  
  
    if(!open) return null;
  return (
    <div className="form31">
        <div 
        onClick={(e) => {e.stopPropagation();}}>
            <p className='closeBtn31' onClick={onClose}>
            X
          </p>
        
    <div className="container31">

  <div  class-Name="header31">
    <h2>ThetaVega </h2>
    <div className="head_right">
      <div  className="head_button1">
        <a className="email" href="https://www.gmail.com">
          {" "}
          <MdOutlineMail /> <i className="bi bi-envelope-fill" />
        </a>
      </div>

      <div className="head_button2">
        <a className="email" href="#">
          {" "}
          <FaWhatsapp /> <i className="bi bi-pencil-fill" />
        </a>
      </div>
      <div className="head_button2">
        <a className="email" href="#">
          {" "}
          <MdOutlineModeEdit /> <i className="bi bi-trash3-fill" />
        </a>
      </div>
      <div className="head_buttond">
        <a className="email" href="https://www.gmail.com">
          {" "}
          <RiDeleteBin6Line /><i className="bi bi-envelope-fill" />
        </a>
      </div>
      <div className="head_button3">
        <a className="email" href="#" id="text">
          {" "}
         <i className="bi bi-cash"> Convert to Customer</i>
        </a>
      </div>
      <div className="head_button4">
        <a href="close">
          {" "}
          <i className="bi bi-x" style={{ color: "black" }} />{" "}
        </a>
      </div>
    </div>
  </div>
  <div className="button31">
    <a href="#">
      {" "}
      <button
      
       //onClick={() => setOpenPopUp(true)} 
       className="con1"> Theta Vega </button>
       {/* <PopUp2
        open={openPopUp}
        onClose={()=> setOpenPopUp(false)} /> */}
    </a>
    <a href="#">
      {" "}
      <button className="con2">Email</button>
    </a>
    <a href="#">
      {" "}
      <button className="con3"> Since  </button>
    </a>
    <a href="#">
      {" "}
      <button className="con4">
        <i className="bi bi-pencil-fill"> Stage</i>
      </button>
    </a>
    <a href="#">
      {" "}
      <button className="con5">
        <i className="bi bi-person-fill"> Executive</i>{" "}
      </button>
    </a>
    <a href="#">
      {" "}
      <button className="con6">
        <i className="bi bi-telephone-fill"> Others Contact</i>{" "}
      </button>
    </a>
    <a href="#">
      {" "}
      <button className="con7"></button>
    </a>
</div>
  <div className="main31">
    <div className="rgt">
      <div className="main_header">
        <p style={{ color: "orange", fontWeight: "bold" }}>
          {" "}
          Requirements &amp; Background <i className="bi bi-pencil-fill" />
        </p>
        <p> </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="leftbox">
                <div className="upperpara">
                  <p
                    style={{ color: "blue", fontSize: 15, fontWeight: "bold" }}
                  >
                    {" "}
                    Last Interaction{" "}
                  </p>
                  <p></p>
                  
                </div>
                <div className="lowerpara">
                 
                 {/*} <div className="tb_icons">
                    <div className="icon1">
                      <a className="add" href="#">
                        {" "}
                        <i className="bi bi-plus-lg" />
                      </a>
                    </div>
                    <div className="icon1">
                      <a className="bell" href="#">
                        {" "}
                        <i className="bi bi-bell-fill" />
                      </a>
                    </div>
                    <div className="icon1">
                      <a className="plus" href="#">
                        {" "}
                        <i className="bi bi-question-lg" />
                      </a>
                    </div>
  </div> */}
                </div>
              </div>
            </td>
            <td>
              <div className="rightbox">
                <p> Next Action</p>
                <button id="action">Click her to add next action</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="main_footer">
        <p> Note </p>
        <input
          className="tags"
          type="text"
          name="tag"
          placeholder="Enter a note"
        />
        <label className="firstlabel">
          {" "}
          <a href="#">
            <i
              className="bi bi-plus-lg"
              style={{ color: "orange", fontWeight: "bold" }}
            />
          </a>
        </label>
      </div>
    </div>
    <div className="right_container">
      <p
        style={{ padding: 10, fontSize: 15, fontWeight: "bold", color: "blue" }}
      >
        {" "}
        Interaction
      </p>
      <div className="name_con">
        <div className="name">
          <p style={{ color: "rgb(95, 94, 94)" }}> </p>
          <p> </p>
        </div>
        <div className="date">
          <p style={{ color: "rgb(83, 80, 80)" }}> </p>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
</div>
  )
}

export default AddProspect2