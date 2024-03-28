import { useEffect, useState } from 'react';
import "./Sidebar.css";
import { FcList,FcCollaboration,FcMultipleDevices ,FcKindle,FcBullish,
    FcOrgUnit,FcRules,FcProcess,FcNews,FcMenu } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { SlRefresh } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FcSettings,FcPositiveDynamic,FcViewDetails } from "react-icons/fc";
import{BsFillBellFill,BsCardText,BsFillFileEarmarkFill,
    BsFillPersonLinesFill,BsClipboardMinus ,BsFileEarmarkText,BsFileCode,
    BsGraphUpArrow,BsListCheck,BsCart,BsPerson} from 'react-icons/bs';
    import { RxDashboard } from "react-icons/rx";

export const SidebarData= [
    {
        path:"/",
        icon : < RxDashboard style={{color:'black',fontSize:'large'}}/>,
        heading:"Dashboard",
    },
    {
        path:"/enquiries",
        icon : <BsCardText style={{color:'black',fontSize:'large'}}/>,
        heading:"Enquiries",
    },
    {
        path:"/prospects",
        icon :<BsFileCode style={{color:'black',fontSize:'large'}} />,
        heading:"Prospects",
    },
    {
        path:"/quotations",
        icon : <BsFileEarmarkText style={{color:'black',fontSize:'large'}}/>,
        heading:"Quotations",
    },
    {
        path:"/orders",
        icon : <BsCart style={{color:'black',fontSize:'large'}}/>,
        heading:"Orders",
    },
    {
        path:"/billing",
        icon : <BsListCheck style={{color:'black',fontSize:'large'}}/>,
        heading:"Billing",
    },
    {
        path:"/customers",
        icon : <BsPerson style={{color:'black',fontSize:'large'}} />,
        heading:"Customers",
    },
    {
        path:"/analytics",
        icon : <BsGraphUpArrow style={{color:'black',fontSize:'large'}}/>,
        heading:"Analytics",
    },
    {
        path:"/help",
        icon : <IoIosHelpCircleOutline style={{color:'black',fontSize:'large'}}/>,
        heading:"Help",
    },
    {
        path:"/settings",
        icon :< IoSettingsOutline style={{color:'black',fontSize:'large'}} />        ,
        heading:"Settings",
    },

 ];
const Sidebar = () => {
const [selected, setSelected] = useState(0);
const [expanded,setExpanded] = useState(true);
const refreshPage = () => {
    window.location.reload();
  };
const sidebarVariants = {
    true:{
        left:'0'
    },
    false:{
        left: '-60%'
    }
} 
console.log(window.innerWidth)

    return(
        <aside >
        
           {/*<div className="bars" style={expanded ? 
                {left:"60%"} : {left:"5%"}}
                onClick={()=>setExpanded(!expanded)}
                >
            <FcMenu /> 
           </div> */}
            <motion.div className="Sidebar"
            variants={sidebarVariants}
            animate={expanded ? "true" : "false" }
            >
                {/* logo */}
            <div className="logo">
                <img src="src/img/logo.png" alt="" />
                <span>
                    Admin 
                </span>
                
            </div>
            
            
            <div className="menu">
                <div  className='home-logout-con'>
             <div className='home-logout'>{/*<NavLink to ="/"><IoHomeOutline style={{color:'black'}} /></NavLink> */}
             <AiOutlineLogout />
              <SlRefresh onClick={refreshPage} style={{cursor:'pointer'}} /></div></div>
                {/* {SidebarData.map((item, index) => (
                    
                        <div className={selected===index?'menuItem active': 'menuItem'}
                         key={index}
                         onClick={()=>setSelected(index)}>
                            {item.icon}
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    
                
                )
                )} */}
                {
                SidebarData.map((item, index) =>(
                   <NavLink to={item.path} 
                    key={index} onClick={()=>setSelected(index)}
                    className={selected===index?'menuItem active': 'menuItem'} activeclassName="" style={{ textDecoration: 'none'}} >
                     <div className="icon">{item.icon} 
                     <span style={{color:'black',fontSize:'medium', textDecoration: 'none',transition: '#3B3B98 0.3s',marginLeft:'20px'}}
                     className="link_test">
                        {item.heading}
                     </span>
                     </div>
                   </NavLink>
                ))
            }
              {/* {
                    SidebarData.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                        </NavLink>
                    ))
                } */}

            
                </div>
            </motion.div>
        
        </aside>
    );
};
    

export default Sidebar;
