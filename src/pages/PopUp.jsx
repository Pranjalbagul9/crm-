import React from 'react'
import { X,Info ,Download,FolderInput} from 'lucide-react';
import { EXCEL_FILE_BASE64 } from '../constants';
import FileSaver from 'file-saver'

const handleDownload = () => {
  let dataBlob = EXCEL_FILE_BASE64;
  let sliceSize = 1024;
  let byteCharacters = atob(dataBlob);
  let bytesLength = byteCharacters.length;
  let slicesCount = Math.ceil(bytesLength / sliceSize);
  let byteArrays = new Array(slicesCount);
  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex){
    let begin = sliceIndex * sliceSize;
    let end = Math.min(begin + sliceSize, bytesLength);
    let bytes = new Array(end - begin);
    for (var offset = begin, i=0; offset < end; ++i,++offset){
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  let blob = new Blob(byteArrays, { type: 'application/vnd.ms-excel'});
  FileSaver.saveAs(new Blob([blob], {}), "template.xlsx");
}
const PopUp = ({onClose}) => {

    
  return (
    <div className= 'Popup' 
    style={{position:'fixed',
            left:'0',top:'0',width:'100%',height:'100%',display:'flex',
            alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'
           }}
    >
        <div 
           className='popup-div'
           style={{backgroundColor:'white',borderRadius:'5px',
            padding:'2rem',width:'40em'
            }}
           > 
            <button onClick={onClose} className='X'
            style={{display:'flex',justifyContent:'right',fontSize:'2rem',cursor:'pointer',overflow:'hidden'}}
            ><X/></button>
            <div className='popup-btns'
            style={{
                   }}
            >
                <button onClick={() => handleDownload()} className='download'style={{backgroundColor:'#2ecc71',color:'black',border:'none',
                   borderRadius:'5px',cursor:'pointer',fontSize:'1rem',display:'inline-flex',marginLeft:'50px',height:'32px',padding:'6px'
                   }}>
                    <Download />Download Template</button>
                <button className='folderinput' style={{backgroundColor:'#ff7979',color:'black',border:'none',
                   borderRadius:'4px',cursor:'pointer',fontSize:'1rem',marginLeft:'30px',display:'inline-flex',height:'32px',padding:'6px'
                   }}>
                     <FolderInput/> Upload Excel </button>
                <button className='infobtn' style={{backgroundColor:'transparent',color:'black',border:'none',
                   borderRadius:'5px',cursor:'pointer',fontSize:'1srem',marginLeft:'30px',display:'inline-flex'
                   }}>
                    <Info />info</button>
                    
            </div>
        </div>
    </div>
  )
}

export default PopUp