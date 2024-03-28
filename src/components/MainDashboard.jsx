import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./MainDashboard.css"
import{BsFillBellFill,BsCardText,BsFillFileEarmarkFill,
    BsFillPersonLinesFill,BsClipboardMinus ,BsFileEarmarkText,BsFileCode,
    BsGraphUpArrow,BsListCheck,BsCart} from 'react-icons/bs';

const MainDashboard = () => {
  
    const navigate = useNavigate()
    
  return (
    <main>
    <div className="MainDashboard">
        <h1>Dashboard</h1>
    </div>
    <div className='main-cards'>
        <button  onClick={()=>navigate("/enquiries")}className='btn'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ENQUIRIES</h3>
                    <BsCardText className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
        
        <button onClick={()=>navigate("/prospects")} className='btn1'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Prospects</h3>
                    <BsFileCode  className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
            
        <button onClick={()=>navigate("/quotations")} className='btn2'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Quotations</h3>
                    <BsFileEarmarkText className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
            
        <button onClick={()=>navigate("/orders")} className='btn4'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsCart className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
            
        <button onClick={()=>navigate("/billing")} className='btn51'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Billing</h3>
                    <BsListCheck className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
            
        <button onClick={()=>navigate("/customers")} className='btn6'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Customers</h3>
                    <BsFillPersonLinesFill  className='card_icon'/>
                </div>
                <h2>42</h2>
            </div>
            </button>
            
            
        <button onClick={()=>navigate("/analytics")} className='btn7'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Analytics</h3>
                    <BsGraphUpArrow className='card_icon'/>
                </div>
                <h1></h1>
            </div>
            </button>
            
            
            </div>
    </main>

    
  )
}

export default MainDashboard